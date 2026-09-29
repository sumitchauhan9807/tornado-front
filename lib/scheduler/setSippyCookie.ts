import fs from 'node:fs/promises';
import path from 'node:path';

const LOG_DIR = path.join(process.cwd(), 'logs');
const COOKIE_DIR = path.join(process.cwd(), 'sippy');

const LOG_FILE = path.join(LOG_DIR, 'login.txt');
const COOKIE_FILE = path.join(COOKIE_DIR, 'cookie.txt');

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

  // Timestamp for this login attempt
  const timestamp = new Date().toLocaleString('en-IN', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  });

  // Log every login attempt as a new line
  await fs.appendFile(
    LOG_FILE,
    `${timestamp} - Login attempt\n`,
    'utf8'
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

    console.log('Status:', response.status);
    console.log('Location:', response.headers.get('location'));

    // Get Set-Cookie
    const setCookie = response.headers.get('set-cookie');

    console.log('Set-Cookie:', setCookie);

    // Save cookie response
    if (setCookie) {
      await fs.writeFile(
        COOKIE_FILE,
        `${setCookie}\n`,
        'utf8'
      );

      console.log(`Cookie saved to: ${COOKIE_FILE}`);
    } else {
      console.log('No Set-Cookie header received.');

      await fs.appendFile(
        LOG_FILE,
        `${timestamp} - No Set-Cookie received (HTTP ${response.status})\n`,
        'utf8'
      );
    }

    const body = await response.text();

    console.log('Response:', body);

    // Log result
    await fs.appendFile(
      LOG_FILE,
      `${timestamp} - Login response: HTTP ${response.status}\n`,
      'utf8'
    );

    return {
      status: response.status,
      location: response.headers.get('location'),
      cookie: setCookie,
      body,
    };
  } catch (error) {
    await fs.appendFile(
      LOG_FILE,
      `${timestamp} - Login error: ${error.message}\n`,
      'utf8'
    );

    console.error('Login error:', error);

    throw error;
  }
};