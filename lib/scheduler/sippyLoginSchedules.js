import schedule from 'node-schedule';
import fs from 'fs';
import path from 'path';

import { scheduledJobs } from './scheduledJobs';
import { setSippyCookie } from './setSippyCookie';

const LOG_DIR = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'sippy.txt');
const SCHEDULE_LOG_FILE = path.join(LOG_DIR, 'schedule.txt');

const sippyScheduledJobs = new Map();
const SIPPY_OFFSET_MINUTES = 1;
// -------------------------------------------------------
// LOG SETUP
// -------------------------------------------------------

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, {
    recursive: true,
  });
}

function resetLogFile() {
  fs.writeFileSync(LOG_FILE, `========== Scheduler Started: ${new Date().toISOString()} ==========\n`, 'utf8');
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

  const line = `[${new Date().toISOString()}] ${message}\n`;

  fs.appendFileSync(LOG_FILE, line, 'utf8');
  fs.appendFileSync(SCHEDULE_LOG_FILE, line, 'utf8');
}

function writeError(...args) {
  const message = formatLogMessage(args);

  const line = `[${new Date().toISOString()}] [ERROR] ${message}\n`;

  fs.appendFileSync(LOG_FILE, line, 'utf8');
  fs.appendFileSync(SCHEDULE_LOG_FILE, line, 'utf8');
}

// -------------------------------------------------------
// SIPPY SCHEDULES
// -------------------------------------------------------

export const setSippyLoginSchedules = () => {
  const executionDates = [
    ...new Set(
      [...scheduledJobs.values()]
        .map((job) => job.nextInvocation())
        .filter(Boolean)
        .map((date) => new Date(date).toISOString())
    ),
  ];
  resetLogFile();
  writeLog('[Sippy] Execution dates:', executionDates);

  for (const executionDate of executionDates) {
    // -----------------------------------------------
    // Prevent duplicate schedules
    // -----------------------------------------------

    if (sippyScheduledJobs.has(executionDate)) {
      writeLog(`[Sippy] Already scheduled: ${executionDate}`);

      continue;
    }

    const runAt = new Date(executionDate);

    // -----------------------------------------------
    // Don't schedule past executions
    // -----------------------------------------------

    if (runAt <= new Date()) {
      writeLog(`[Sippy] Skipping past execution: ${executionDate}`);

      continue;
    }

    // -----------------------------------------------
    // Create node-schedule job
    // -----------------------------------------------
    const sippyRunAt = new Date(runAt.getTime() - SIPPY_OFFSET_MINUTES * 60 * 1000);
    const sippyJob = schedule.scheduleJob(sippyRunAt, async () => {
      try {
        writeLog(`[Sippy] Running login schedule at ${new Date().toISOString()}`);

        // -----------------------------------------
        // YOUR SIPPY LOGIN LOGIC
        // -----------------------------------------

        // await loginToSippy();
        await setSippyCookie();
      } catch (error) {
        writeError(`[Sippy] Failed at ${executionDate}:`, error);
      } finally {
        // -----------------------------------------
        // Remove completed Sippy schedule
        // -----------------------------------------

        sippyScheduledJobs.delete(executionDate);

        writeLog(`[Sippy] Removed completed schedule: ${executionDate}`);
      }
    });

    // -----------------------------------------------
    // Check schedule creation
    // -----------------------------------------------

    if (!sippyJob) {
      writeError(`[Sippy] Failed to schedule: ${executionDate}`);

      continue;
    }

    // -----------------------------------------------
    // Store Sippy schedule
    // -----------------------------------------------

    sippyScheduledJobs.set(executionDate, sippyJob);

    writeLog(`[Sippy] Scheduled login at ${executionDate}`);
  }

  writeLog(`[Sippy] Active Sippy Login schedules: ${sippyScheduledJobs.size}`);

  return sippyScheduledJobs;
};
