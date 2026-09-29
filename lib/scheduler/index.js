import cron from 'node-cron';
import schedule from 'node-schedule';
import { DateTime } from 'luxon';
import axios from 'axios';

import fs from 'fs';
import path from 'path';
import { scheduledJobs } from './scheduledJobs';
import { setSippyLoginSchedules } from './sippyLoginSchedules';
import { setSippyCookie } from './setSippyCookie';
// const fs = require("fs");
// const path = require("path");

const TIMEZONE = 'Europe/Berlin';
let dailyRefreshJob = null;

// -------------------------------------------------------
// LOG FILE
// -------------------------------------------------------

const LOG_DIR = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'schedule.txt');

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, {
    recursive: true,
  });
}

/**
 * Create a fresh schedule.txt file.
 *
 * This is called every time setupTodaysJobs() runs.
 * Therefore, every setup starts with a completely
 * fresh log file.
 */
function resetLogFile() {
  fs.writeFileSync(LOG_FILE, `========== Scheduler Started: ${new Date().toISOString()} ==========\n`, 'utf8');
}

/**
 * Write normal log.
 *
 * Logs are written to:
 * 1. schedule.txt
 * 2. console
 */
function writeLog(...args) {
  const message = args
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

  const line = `[${new Date().toISOString()}] ${message}\n`;

  fs.appendFileSync(LOG_FILE, line, 'utf8');

  console.log(...args);
}

/**
 * Write error log.
 *
 * Logs are written to:
 * 1. schedule.txt
 * 2. console.error
 */
function writeError(...args) {
  const message = args
    .map((arg) => {
      if (arg instanceof Error) {
        return arg.stack || arg.message;
      }

      if (typeof arg === 'string') {
        return arg;
      }

      try {
        return JSON.stringify(arg);
      } catch {
        return String(arg);
      }
    })
    .join(' ');

  const line = `[${new Date().toISOString()}] [ERROR] ${message}\n`;

  fs.appendFileSync(LOG_FILE, line, 'utf8');

  console.error(...args);
}

// -------------------------------------------------------
// SCHEDULED JOB STORAGE
// -------------------------------------------------------
//
// Keeps scheduled node-schedule Job objects for this
// Node.js process.
//
// Key:
//   accountId:type
//
// Example:
//   store-1:open
//   store-1:close
// -------------------------------------------------------

// -------------------------------------------------------
// SETUP TODAY'S JOBS
// -------------------------------------------------------

/**
 * Setup today's dynamic jobs.
 *
 * This function is safe to call multiple times.
 *
 * Every time this function runs:
 *
 * 1. schedule.txt is deleted/overwritten
 * 2. A fresh schedule.txt is created
 * 3. Today's jobs are fetched
 * 4. Future jobs are scheduled
 *
 * Already scheduled jobs in the current Node.js process
 * are not scheduled again.
 */
async function setupTodaysJobs() {
  try {
    // -----------------------------------------------
    // IMPORTANT:
    // Start a completely fresh log file.
    // -----------------------------------------------

    resetLogFile();

    writeLog(`[Scheduler] Setting up jobs at ${new Date().toISOString()}`);

    // -----------------------------------------------
    // Fetch today's jobs
    // -----------------------------------------------

    const jobs = await getTodaysDynamicJobs();

    if (!jobs || jobs.length === 0) {
      writeLog('[Scheduler] No jobs found for today.');

      writeLog(`[Scheduler] Setup complete. Active schedules: ${scheduledJobs.size}`);

      return;
    }

    writeLog(`[Scheduler] Found ${jobs.length} jobs for today.`);

    // -----------------------------------------------
    // Schedule each job
    // -----------------------------------------------

    for (const job of jobs) {
      if (!job || !job.accountId || !job.schedule) {
        writeLog('[Scheduler] Invalid job skipped:', job);
        continue;
      }

      // Open job
      if (job.schedule.openTime) {
        scheduleJob(job, 'open', job.schedule.openTime);
      } else {
        writeLog(`[Scheduler] No openTime for ${job.accountId}`);
      }

      // Close job
      if (job.schedule.closeTime) {
        scheduleJob(job, 'close', job.schedule.closeTime);
      } else {
        writeLog(`[Scheduler] No closeTime for ${job.accountId}`);
      }
    }

    writeLog(`[Scheduler] Setup complete. Active schedules: ${scheduledJobs.size}`);
    setSippyLoginSchedules();
  } catch (error) {
    writeError("[Scheduler] Failed to setup today's jobs:", error);
  }
}

// -------------------------------------------------------
// SCHEDULE ONE JOB
// -------------------------------------------------------

/**
 * Schedule one job.
 *
 * Duplicate protection:
 *
 * If the same accountId/type is already scheduled,
 * nothing happens.
 */
function scheduleJob(job, type, time) {
  const key = `${job.accountId}:${type}`;

  // -----------------------------------------------
  // Already scheduled in this Node.js process
  // -----------------------------------------------

  if (scheduledJobs.has(key)) {
    writeLog(`[Scheduler] Already scheduled: ${key}`);

    return;
  }

  // -----------------------------------------------
  // Convert Berlin time to JS Date
  // -----------------------------------------------

  let runAt;

  try {
    runAt = getTodayAtBerlinTime(time);
  } catch (error) {
    writeError(`[Scheduler] Invalid time for ${key}: ${time}`, error);

    return;
  }

  const now = new Date();

  // -----------------------------------------------
  // The scheduled time has already passed.
  //
  // We intentionally DO NOT execute missed jobs
  // after restart.
  // -----------------------------------------------

  if (runAt <= now) {
    writeLog(`[Scheduler] Skipping ${key} - ${time} Berlin time has already passed`);

    return;
  }

  // -----------------------------------------------
  // Create node-schedule job
  // -----------------------------------------------
  // console.log(runAt,"arunnn attt")

  const scheduledJob = schedule.scheduleJob(runAt, async () => {
    try {
      writeLog(`[${type}] ${job.accountId} running at ${new Date().toISOString()}`);

      await executeJob(job, type);
    } catch (error) {
      writeError(`[${type}] ${job.accountId} failed:`, error);
    } finally {
      // -----------------------------------------
      // One-time schedule has fired.
      // -----------------------------------------

      scheduledJobs.delete(key);

      writeLog(`[Scheduler] Removed completed job: ${key}`);
    }
  });

  // -----------------------------------------------
  // Check if node-schedule created the job
  // -----------------------------------------------

  if (!scheduledJob) {
    writeError(`[Scheduler] Failed to schedule ${key}`);

    return;
  }

  // -----------------------------------------------
  // Store job
  // -----------------------------------------------

  scheduledJobs.set(key, scheduledJob);

  writeLog(`[Scheduler] Scheduled ${key} at ${runAt.toISOString()} (${time} Berlin time)`);
}

// -------------------------------------------------------
// BERLIN TIME -> JAVASCRIPT DATE
// -------------------------------------------------------

/**
 * Convert HH:mm Berlin time into a JavaScript Date.
 *
 * Example:
 *
 * "08:30"
 *
 * becomes today's 08:30 Europe/Berlin.
 */
function getTodayAtBerlinTime(time) {
  if (!time || typeof time !== 'string') {
    throw new Error(`Invalid time: ${time}`);
  }

  const parts = time.split(':');

  if (parts.length !== 2) {
    throw new Error(`Invalid time format: ${time}. Expected HH:mm`);
  }

  const hour = Number(parts[0]);
  const minute = Number(parts[1]);

  if (Number.isNaN(hour) || Number.isNaN(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    throw new Error(`Invalid time value: ${time}`);
  }

  return DateTime.now()
    .setZone(TIMEZONE)
    .startOf('day')
    .set({
      hour,
      minute,
      second: 0,
      millisecond: 0,
    })
    .toJSDate();
}

// -------------------------------------------------------
// ACTUAL BUSINESS LOGIC
// -------------------------------------------------------

async function executeJob(job, type) {
  if (type === 'open') {
    writeLog(`Opening ${job.accountId}`);

    // Your actual logic:
    //
    // await openSomething(job);
  }

  if (type === 'close') {
    writeLog(`Closing ${job.accountId}`);

    // Your actual logic:
    //
    // await closeSomething(job);
  }
}

// -------------------------------------------------------
// GET CLIENT DATA
// -------------------------------------------------------

const getClientsData = async () => {
  try {
    const jobs = [];

    const { data } = await axios.get('https://strapi.tornadodialer.net/api/timezones');

    if (!data || !Array.isArray(data.data)) {
      writeLog('[Scheduler] Invalid response from timezone API');

      return jobs;
    }

    // -----------------------------------------------
    // Get today's date/schedule for each client
    // -----------------------------------------------

    data.data.forEach((client) => {
      try {
        const today = getTodayObject(client.schedule);

        if (client.accountId && today) {
          jobs.push({
            accountId: client.accountId,

            schedule: today,
          });
        } else if (client.accountId && !today) {
          writeLog(`[Scheduler] No schedule found for today: ${client.accountId}`);
        }
      } catch (error) {
        writeError(`[Scheduler] Failed to process client: ${client.accountId}`, error);
      }
    });

    writeLog(`[Scheduler] Clients converted into ${jobs.length} jobs.`);

    return jobs;
  } catch (error) {
    writeError('[Scheduler] Failed to fetch client data:', error);

    return [];
  }
};

// -------------------------------------------------------
// GET TODAY'S DYNAMIC JOBS
// -------------------------------------------------------

async function getTodaysDynamicJobs() {
  const clientsData = await getClientsData();

  return clientsData;
}

// -------------------------------------------------------
// GET TODAY'S SCHEDULE OBJECT
// -------------------------------------------------------

/**
 * Finds today's schedule based on:
 *
 * - Berlin weekday
 * - Berlin month
 * - Berlin date
 */
function getTodayObject(data) {
  if (!Array.isArray(data)) {
    return null;
  }

  const now = new Date();

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const parts = formatter.formatToParts(now);

  const weekday = parts.find((p) => p.type === 'weekday')?.value;

  const monthName = parts.find((p) => p.type === 'month')?.value;

  const dayValue = parts.find((p) => p.type === 'day')?.value;

  const date = Number(dayValue);

  const month = data.find((month) => month.name === monthName);

  if (!month) {
    return null;
  }

  const today = month.days?.find((day) => day.date === date && day.wd === weekday);

  return today || null;
}

// -------------------------------------------------------
// STARTUP
// -------------------------------------------------------
//
// node-schedule stores jobs in memory.
//
// Therefore, after a server restart we must recreate
// today's future schedules.
// -------------------------------------------------------

// setupTodaysJobs();

// -------------------------------------------------------
// DAILY REFRESH
// -------------------------------------------------------
//
// Every day at 05:00 Berlin time:
//
// 1. schedule.txt is recreated
// 2. today's schedules are fetched
// 3. future jobs are scheduled
//
// -------------------------------------------------------

// cron.schedule(
//   '0 5 * * *',
//   async () => {
//     writeLog('[Scheduler] 05:00 Berlin refresh started');

//     await setupTodaysJobs();
//   },
//   {
//     timezone: TIMEZONE,
//   }
// );

// -------------------------------------------------------
// GRACEFUL SHUTDOWN
// -------------------------------------------------------

function shutdown() {
  writeLog('[Scheduler] Shutting down...');

  for (const [key, job] of scheduledJobs) {
    writeLog(`[Scheduler] Cancelling ${key}`);

    job.cancel();
  }

  scheduledJobs.clear();

  if (dailyRefreshJob) {
    dailyRefreshJob.stop();
    dailyRefreshJob = null;
  }

  writeLog('[Scheduler] All scheduled jobs cancelled.');

  process.exit(0);
}
// -------------------------------------------------------
// PROCESS SIGNALS
// -------------------------------------------------------

process.on('SIGTERM', shutdown);

process.on('SIGINT', shutdown);

export async function startScheduler() {
  writeLog('[Scheduler] Starting scheduler...');

  await setupTodaysJobs();

  if (!dailyRefreshJob) {
    dailyRefreshJob = cron.schedule(
      '0 5 * * *',
      async () => {
        writeLog('[Scheduler] 05:00 Berlin refresh started');

        await setupTodaysJobs();
      },
      {
        timezone: TIMEZONE,
      }
    );
  }
setSippyCookie()
  writeLog('[Scheduler] Scheduler started successfully');
}
