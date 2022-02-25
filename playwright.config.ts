import { PlaywrightTestConfig, devices } from '@playwright/test';
// what is this?
// import { TestOptions } from './my-test';
// const config: PlaywrightTestConfig<TestOptions> = {

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI, 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        screenshot: 'on',
        video: 'on' ,  
        trace: 'on', 
      },     
    },
  {testMatch : ["tests/*.test.ts"]},
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'],
    //   screenshot: 'on',    
    //   trace: 'on', 
    // },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'],
    //   screenshot: 'on',    
    //   trace: 'on', 
    // },
    // },
  ],
  reporter: [["dot"], ["json", { outputFile: "test-result.json" }],['html',{ open: "always"}]
  ],
};
export default config;