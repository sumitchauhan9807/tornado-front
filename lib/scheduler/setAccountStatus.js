import fs from 'fs';
import path from 'path';

const url = 'https://sip1.tornadodialer.net/u4/accounts.php';

const LOG_DIR = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'accounts.txt');
const SCHEDULE_LOG_FILE = path.join(LOG_DIR, 'schedule.txt');

const COOKIE_FILE = path.join(process.cwd(), 'sippy', 'cookie.txt');

// -------------------------------------------------------
// LOG SETUP
// -------------------------------------------------------

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, {
    recursive: true,
  });
}

// -------------------------------------------------------
// TIMESTAMP
// -------------------------------------------------------

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

// -------------------------------------------------------
// LOGGING
// -------------------------------------------------------

function formatLogMessage(args) {
  return args
    .map((arg) => {
      if (typeof arg === 'string') {
        return arg;
      }

      if (arg instanceof Error) {
        return arg.stack || arg.message;
      }

      try {
        return JSON.stringify(arg);
      } catch {
        return String(arg);
      }
    })
    .join(' ');
}

function writeLog(...args) {
  const message = formatLogMessage(args);
  const timestamp = getTimestamp();
  const line = `[${timestamp}] ${message}\n`;

  fs.appendFileSync(LOG_FILE, line, 'utf8');
  fs.appendFileSync(SCHEDULE_LOG_FILE, line, 'utf8');
}

function writeError(...args) {
  const message = formatLogMessage(args);
  const timestamp = getTimestamp();
  const line = `[${timestamp}] [ERROR] ${message}\n`;

  fs.appendFileSync(LOG_FILE, line, 'utf8');
  fs.appendFileSync(SCHEDULE_LOG_FILE, line, 'utf8');
}

// -------------------------------------------------------
// COOKIE
// -------------------------------------------------------

function getCookie() {
  try {
    if (!fs.existsSync(COOKIE_FILE)) {
      throw new Error(`Cookie file not found: ${COOKIE_FILE}`);
    }

    const content = fs.readFileSync(COOKIE_FILE, 'utf8').trim();

    if (!content) {
      throw new Error('Cookie file is empty');
    }

    // Split the cookie entries by comma
    const cookies = content
      .split(',')
      .map((cookie) => cookie.trim())
      .filter(Boolean);

    if (cookies.length === 0) {
      throw new Error('No cookies found in cookie file');
    }

    // Get ONLY the last cookie
    const lastCookie = cookies[cookies.length - 1];

    // Remove attributes such as "; path=/u4/"
    const cookie = lastCookie.split(';')[0].trim();

    if (!cookie.startsWith('PHPSESSID=')) {
      throw new Error('Last cookie is not a PHPSESSID');
    }

    return cookie;
  } catch (error) {
    writeError('[Account API] Failed to read cookie:', error);
    throw error;
  }
}

// -------------------------------------------------------
// ACCOUNT API
// -------------------------------------------------------

export async function setAccountStatus(accountId,type) {
  let status;
  if(type == 'open') {
    status = 'unblockAccount'
  }else {
    status = 'blockAccount'
  }
  const payload = {
    account: {
      i_account: accountId,
    },
    action: status,
  };

  // writeLog('[Account API] Starting request', `action=${status}`, `account=${accountId}`);

  try {
    // -----------------------------------------------
    // Read last PHPSESSID
    // -----------------------------------------------

    const cookie = getCookie();

    // writeLog('[Account API] Cookie loaded successfully');

    // -----------------------------------------------
    // API request
    // -----------------------------------------------

    // writeLog('[Account API] POST', url);

    // writeLog('[Account API] Payload:', payload);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookie,
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    // -----------------------------------------------
    // API response
    // -----------------------------------------------

    if (response.ok) {
      writeLog('[Account API] Request successful', `status=${response.status}`, `action=${status} for accountId ${accountId}`);

      // writeLog('[Account API] Response:', text);
    } else {
      writeError('[Account API] Request failed', `status=${response.status}`, `action=${status}`);

      // writeError('[Account API] Response:', text);
    }

    return {
      status: response.status,
      ok: response.ok,
      response: text,
    };
  } catch (error) {
    writeError('[Account API] Request failed', `action=${status}`, error);

    throw error;
  }
}

// -------------------------------------------------------
// EXECUTION
// -------------------------------------------------------

// setAccountStatus('unblockAccount');
