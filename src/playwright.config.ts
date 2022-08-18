import { PlaywrightTestConfig, devices } from '@playwright/test';
// what is this?
// import { TestOptions } from './my-test';
// const config: PlaywrightTestConfig<TestOptions> = {

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        screenshot: 'on',
        video: 'on',
        trace: 'on',
        viewport: {
          width: 1250,
          height: 1300,
        },
        extraHTTPHeaders: {
          Authorization: 'Basic ',
        },
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], screenshot: 'on', video: 'on', trace: 'on' },
    // },
    // { testMatch: ['tests/*.test.ts'] },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], screenshot: 'on', video: 'on', trace: 'on' },
    // },
    // { testMatch: ['tests/*.test.ts'] },
  ],
  reporter: [['dot'], ['json', { outputFile: 'test-result.json' }], ['html', { open: 'always' }]],
  retries: 1,
  // setting workers to '1' disables parallel running, workers can also be set at runtime in the command line
  workers: 1,
};
export default config;
