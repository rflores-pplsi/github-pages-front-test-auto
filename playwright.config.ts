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
        launchOptions: {
          args: ['--remote-debugging-port=9222'],
          // slowMo: 500,
        },
        screenshot: 'on',
        trace: 'on',
        video: 'on',
      },
    },
  ],
  reporter: [['dot'], ['html', { open: 'always', outputFolder: 'playwright-report' }], ['allure-playwright'], ['./pplsi-reporter.ts']],
  retries: 2,
  // setting workers to '1' disables parallel running, workers can also be set at runtime in the command line
  workers: 1,
};
export default config;
 
