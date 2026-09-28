// instrumentation.js

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { startScheduler } = await import(
      './lib/scheduler/index.js'
    );

    await startScheduler();
  }
}