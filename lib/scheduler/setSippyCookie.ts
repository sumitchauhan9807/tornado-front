import fs from 'node:fs/promises';
import path from 'node:path';

const LOG_DIR = path.join(process.cwd(), 'logs');
const COOKIE_DIR = path.join(process.cwd(), 'sippy');

const LOG_FILE = path.join(LOG_DIR, 'login.txt');
const SCHEDULE_LOG_FILE = path.join(LOG_DIR, 'schedule.txt');

const COOKIE_FILE = path.join(COOKIE_DIR, 'cookie.txt');

function getTimestamp() {
  return new Date().toLocaleString('en-DE', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Europe/Berlin',
  });
}

async function writeLog(message) {
  const line = `${message}\n`;

  await Promise.all([
    fs.appendFile(LOG_FILE, line, 'utf8'),
    fs.appendFile(SCHEDULE_LOG_FILE, line, 'utf8'),
  ]);
}

const params = new URLSearchParams({
  acct_type: 'customer',
  return_to_referer: '1',
  login_page: 'all',
  username: 'Sumit',
  password: 'dws4jw2*',
  Login: 'Login',
});

export const setSippyCookie = async () => {
  // Make sure directories exist
  await fs.mkdir(LOG_DIR, { recursive: true });
  await fs.mkdir(COOKIE_DIR, { recursive: true });

  // --------------------------------------------------
  // EXACT LOGIN ATTEMPT TIME
  // --------------------------------------------------

  const timestamp = getTimestamp();

  // Write login attempt to BOTH log files immediately
  await writeLog(
    `[Sippy Login] ${timestamp} - Login attempt started`
  );

  try {
    const response = await fetch(
      'https://sip1.tornadodialer.net/main.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'https://sip1.tornadodialer.net',
          Referer: 'https://sip1.tornadodialer.net/all.php',
          'User-Agent': 'Mozilla/5.0',
        },
        body: params.toString(),
        redirect: 'manual',
      }
    );

    const location = response.headers.get('location');
    const setCookie = response.headers.get('set-cookie');

    // --------------------------------------------------
    // COOKIE RECEIVED
    // --------------------------------------------------

    if (setCookie) {
      await fs.writeFile(
        COOKIE_FILE,
        `${setCookie}\n`,
        'utf8'
      );

      await writeLog(
        `[Sippy Login] ${timestamp} - Login completed - HTTP ${response.status} - Set-Cookie received`
      );
    } else {
      // ------------------------------------------------
      // LOGIN REQUEST COMPLETED BUT NO COOKIE
      // ------------------------------------------------

      await writeLog(
        `[Sippy Login] ${timestamp} - Login completed - HTTP ${response.status} - No Set-Cookie received`
      );
    }

    const body = await response.text();

    return {
      status: response.status,
      location,
      cookie: setCookie,
      body,
    };
  } catch (error) {
    // --------------------------------------------------
    // LOGIN FAILED
    // --------------------------------------------------

    const message =
      error instanceof Error
        ? error.message
        : String(error);

    await writeLog(
      `[Sippy Login] ${timestamp} - Login FAILED - ${message}`
    );

    console.error('Login error:', error);

    throw error;
  }
};
