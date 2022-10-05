import { PlaywrightTestConfig, devices } from '@playwright/test';
// what is this?
// import { TestOptions } from './my-test';
// const config: PlaywrightTestConfig<TestOptions> = {

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chromium'], screenshot: 'on', video: 'on', trace: 'on' },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], screenshot: 'on', video: 'on', trace: 'on' },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], screenshot: 'on', video: 'on', trace: 'on' },
    },
    { testMatch: ['tests/*.test.ts'] },
  ],
  reporter: [['dot'], ['json', { outputFile: 'test-result.json' }], ['html', { open: 'always' }]],
  retries: 0,
  // setting workers to '1' disables parallel running, workers can also be set at runtime in the command line
  workers: 1,
};
export default config;
