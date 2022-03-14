# Table of Contents
- [Table of Contents](#table-of-contents)
- [Typescript](#typescript)
  - [Overview](#overview)
  - [Learning Resources](#learning-resources)
- [Playwright](#playwright)
  - [Overview](#overview-1)
  - [Features:](#features)
  - [Browser/Device Support:](#browserdevice-support)
  - [Learning resources](#learning-resources-1)
- [Command Line](#command-line)
- [Project Setup](#project-setup)
- [Run tests](#run-tests)
- [Generate report](#generate-report)
- [Page Object Model (POM)](#page-object-model-pom)
  - [File Structure](#file-structure)
  - [Naming a Page Object Model file](#naming-a-page-object-model-file)
  - [Anatomy of a Page Object](#anatomy-of-a-page-object)
  - [Template](#template)
  - [Selectors](#selectors)
- [Test Specification Files (spec)](#test-specification-files-spec)
  - [Naming a Test File file](#naming-a-test-file-file)
  - [In which test file (spec) does my test case belong?](#in-which-test-file-spec-does-my-test-case-belong)
  - [Test File Best Practices](#test-file-best-practices)
    - [<ins>Reliability</ins>](#insreliabilityins)
    - [<ins>Readability</ins>](#insreadabilityins)
    - [<ins>Atomicity</ins>](#insatomicityins)
  
# Typescript
## Overview
## Learning Resources

# Playwright

## Overview
The playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web testing.

Playwright by Microsoft started as a fork of Google's Puppeteer. Puppeteer is a node library to automate the chromium browsers with the JavaScript API.

## Features:
- Spans multiple pages, domains, and iframes
- Intercept network activity for stubbing and mocking network requests
- Emulate mobile devices, geolocation, permissions
- Native input events for mouse and keyboard
- Upload & -download support
- Playwright enables fast, reliable, and capable automation across all modern browsers
- Headless and headful
- Fast and reliable execution
- Auto-wait APIs (clicks, types, etc)
- Timeout-free automation
- Lean parallelization with browser contexts
- Wide variety of selectors (locators) & shadow-dom support
- Can handle single page application

## Browser/Device Support:
Browsers: Chromium (google), Firefox, and WebKit (Safari)
Mobile (device emulation)

## Learning resources
Please follow the sequence to enhance your learning! <br>

1. What is Playwright? | Playwright with Typescript & Jest - Part 1: https://www.youtube.com/watch?v=zY-IoTYcbWs
2. Playwright Jest Config & Launch Browser | Playwright - Part 2: https://www.youtube.com/watch?v=DbdqflN3dJ4
3. First Script - Auto Waits | Playwright - Part 3: https://www.youtube.com/watch?v=9xEzNdG4XaQ
4. Codeless Automation With PlayWright | Playwright - Part 4: https://www.youtube.com/watch?v=gb43GiWwQKg
5. Save Test Execution In Video | Playwright - Part 5: https://www.youtube.com/watch?v=0125rwgsBP8
6. How to upload files | Playwright - Part 6: https://www.youtube.com/watch?v=e8jfjV71E6Q
7. Handling different types of inputs | Playwright - Part 7: https://www.youtube.com/watch?v=Slv5fuTrIZg
8. Handling different types of alerts | Playwright - Part 8: https://www.youtube.com/watch?v=RzBlwacFIl0
9. Handling Select/DropDown | Playwright - Part 9: https://www.youtube.com/watch?v=IubdSQFOdiU
10. Window Handling | Playwright - Part 10: https://www.youtube.com/watch?v=DyHQ3G442jY
11. Frames | Playwright - Part 11: https://www.youtube.com/watch?v=Vqm-8G81W8w
12. Find Multiple Elements - part 12: https://www.youtube.com/watch?v=54OwsiRa_eE
13. How To Take Screenshot - part 13: https://www.youtube.com/watch?v=G650JxukN1A
14. How To Run In Local Browser | Playwright - Part 14: https://www.youtube.com/watch?v=5LrRFHI81o4
15. Drag and Drop | Playwright - Part 15: https://www.youtube.com/watch?v=0wFkhkdcT8A
16. Page Object Model | Playwright - Part 16: https://www.youtube.com/watch?v=WSd6-X-n6P8
17. POM Enhancement & JSON | Playwright - Part 17: https://www.youtube.com/watch?v=00xGOpnOzds
18. POM Enhancement & JSON | Playwright - Part 18: https://www.youtube.com/watch?v=w05KGL8G0f4
19. Jest Allure Report | Playwright - Part 19: https://www.youtube.com/watch?v=tjpSkaBq9c0
20. Jest Allure Report | Playwright - Part 20: https://www.youtube.com/watch?v=xffrNccLIso
21. Skip on failure | Playwright - Part 21: https://www.youtube.com/watch?v=4-IBKtbAxlg

# Command Line

```
Create package.json
npm init

Install Playwright TestRunner
npm i -D @playwright/test

Install Playwright Browsers
npx playwright install

Run all test cases
npx playwright test

Run all test cases in headed mode
npx playwright test --headed

Run all test cases in headed mode in Safari
npx playwright test --headed --browser=webkit

Run all test cases in headed mode in Chromium
npx playwright test --headed --browser=chromium

Run all test cases in headed mode in Firefox
npx playwright test --headed --browser=firefox

Run all test cases in a particular project(browser) in config
npx playwright test --headed --project=firefox

If headless:false is declared in config
npx playwright test --project=firefox

Run all test cases in a single file eg. example1.test.ts
npx playwright test parentPath/example1.test.ts --browser=firefox --headed

Run a test case with a particular title
npx playwright test -g "title of test case" --headed --browser=firefox

Run in debug mode
npx playwright test --debug

Open codegen and Playwright Inspector
npx playwright codegen https://www.google.com

Run test case with tag
npx playwright test --grep @tagName --headed --browser=firefox
```
# Project Setup

1. Clone the playwright repo
    - asdfasd
2. 

npm i -D allure-playwright

# Run tests

npx playwright test --reporter=line,allure-playwright

# Generate report

Generate HTML Report:
npx playwright test \tests\login\login-header.spec.ts --reporter=html

Run the HTML report:
npx playwright show-report

# Page Object Model (POM)
## File Structure

Page Object files are organized by service. 

Example File Structure:
- Page Objects
  - Account
    - account-footer.page.ts
    - account-header.page.ts
    - etc.
  - Activate
  - etc.

## Naming a Page Object Model file 

Format:  [service name]-[page name]-[sub pagename (optional)].page.ts <br>
Example: account-profile-phone.page.ts (page object for URL - https://accountsv2.uat-legalshield.com/profile)

## Anatomy of a Page Object 
```TSX
// import Page Objects and other utility classes 
import { expect } from '@playwright/test';        // playwright test library - https://www.npmjs.com/package/@playwright/test
import UrlsUtils from '../../utils/urls.utils';   // helper methods that are outside the scope of a page object
import { BasePage } from '../base.page';          // import the BasePage in order to extend this page and to inherit BasePage methods 

// ========================== Selectors ==========================
/** 
 - declare page selectors as strings
 - selector names should follow the format [element abbreviation][description of element]
 - example: let btnPage: string = 'h2.lsux-heading';

For a list of most element abbreviations - see section Selector Names of this README
**/

// For pages that will do not need to access login service, extend BasePage
// For pages that need access to login service, extend LoginPage which extends BasePage
export class LoginPage extends BasePage{

  // ========================== Page Instances ========================== 
  // new up any instances of other Page Object Models 
  accoutNavigationPage = new AccountNavigationPage(this.page);

  // The follow Method section should be included in each Page Object:

  // ========================== Process Methods ========================== 
  // Process Methods section will house all methods that do not belong in the sections below

  login = async (emailOrUsername: string, password: string):Promise<void> => {
    console.log(" - loginPage.login");
    // If statement exists because dependning on the application you came from, you may be on signup or signin pages
    if (await this.isElementVisible(lnkSignIn) == true) {
      await this.clickOnElement(lnkSignIn);
    }
    // Enter email or username into input
    await this.fillTextBox(txtEmailOrUsername,emailOrUsername);
    // Enter password into input
    await this.fillTextBox(txtPassword,password);
    // Click on Sign In to submit login form
    await this.clickOnElement(btnSignIn);
    // Wait for page to finish loading 
    await this.page.waitForLoadState('networkidle');
  }

  // ========================== Navigate Methods ========================== 
  // - take you to a URL using the BasePage.goTo() method
  // - names should be prefixed with "navigation"

  navigateToLoginPage = async (): Promise<void> => {
    console.log(" - loginPage.navigateToLoginPage");    
    // Navigate to Account Plans Page
    await this.goTo(UrlsUtils.legalshieldUrls.login.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  }

  // ========================== Click Methods ========================== 
  // - click a specific element on this page using the BasePage.clickOnElement
  // - names should be prefixed with "click"

  clickForgotPasswordLink = async (): Promise<void> => {
    console.log(" - loginPage.clickForgotPasswordLink");
    // Click on the Forgot Password Link
    await this.clickOnElement(lnkForgotPassword);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

  // ========================== Assertion Methods ========================== 
  // - used to verify the specific thing that the test case is intended for
  // - should *always* include an 'expect' function
  // - names should be prefixed with the word 'assertion'

  assertProfileNamePageUrl = async (): Promise<void> => {
    console.log(" - accountProfilePage.assertProfileNamePageUrl");
    // Confirm the Profile Name Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/profile/name');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  }

};
```

## Template

Copy this unannotated template to create a new page object. Adjust as necessary, retaining Method section headers to organize future methods 
```TSX
import { expect } from '@playwright/test';        // import expect functionality from playwright
import UrlsUtils from '../../utils/urls.utils';   // import class of Urls
import { LoginPage } from '../login/login.page';  // import the LoginPage for extension

// ========================== Selectors ==================================

export class PageName extends LoginPage {

// ========================== Process Methods ============================

// ========================== Navigate Methods ===========================

// ========================== Click Methods ============================== 

// ========================== Assertion Methods ==========================

}

```
## Selectors
If this list does not include a UI/Control Type that you are implementing, use your best judgement for creating a new abbreviation, using readability and clarity as guidance. Add any new prefix to the list for future use. Organized alphabetically. 

| UI/Control type | Prefix | Example |
| :-------- | :-------- | :--------
| Button | btn | btnExit |
| Check box | chk | chkReadOnly |
| Chevron | chv | chvProtocol |
| Combo box | cbo | cboEnglish |
| Common dialog | dlg | dlgFileOpen |
| Data grid | dgd | dgdTitles |
| Data list | dbl | dblPublisher |
| Date picker | dtp | dtpPublished |
| Directory list box | dir | dirSource |
| Drive list box | drv | drvTarget |
| Dropdown List / Select tag | ddl | ddlCountry |
| File list box | fil | filSource |
| Form | frm | frmEntry |
| Frame | fra | fraLanguage |
| Image | img | imgIcon |
| Label | lbl | lblHelpMessage |
| Links/Anchor Tags | lnk | lnkForgotPwd |
| List box | lst | lstPolicyCodes |
| Menu | mnu | mnuFileOpen |
| Message | msg | msgSuccess |
| Panel/Fieldset | pnl | pnlGroup |
| ProgressBar | prg | prgLoadFile |
| Radio button / group | rdo | rdoGender |
| RichTextBox | rtf | rtfReport |
| Slider | sld | sldScale |
| Spinner | spn | spnPages |
| StatusBar | sta | staDateTime |
| Step | stp | stpEnterCode |
| Table | tbl | tblCustomer |
| TabStrip | tab | tabOptions |
| Text Area | txa | txaDescription |
| Text box | txt | txtLastName |
| Timer | tmr | tmrAlarm |
| Toolbar | tlb | tlbActions |
| TreeView | tre | treOrganization |

# Test Specification Files (spec)
## Naming a Test File file
A test file should be named according to the same format for naming our Page Object files, except that instead of ending the file with ".page.ts" these files will end with ".spec.ts"

Format:  [service name]-[page name]-[sub pagename (optional)].spec.ts <br>
Example: account-profile-phone.spec.ts

## In which test file (spec) does my test case belong?
It is not always straightforward which test file you should put your test case in, as test cases will commonly span multiple pages. Following this one rule should  
```
Rule:
A test case belongs in the spec file that corresponds to the page where the ultimate assertion will be performed. 
``` 
```
Example:
I have a test case that has the intention to confirm that I am on the accounts/plans page after logging in, that test would *not* belong in a test file for the login service (i.e. 'login.spec.ts'), even though the test will navigate through the login flow. It would instead belong in the test file for the account/plans page (account-plans.spec.ts), as that is where I ultimately confirm the behavior that indicates that the test case has passed.
```  

## Test File Best Practices

### <ins>Reliability</ins> 
Unreliable tests are often worse than no tests at all, as it erodes trust in automation and costs time as the team searches for the root cause of false failures. We want to do our best to keep our spec files free of flaky and outdated test, so that tests only fail when they encounter a bug in the application (i.e. a true positive). If a test is failling for other reasons (the application has changed, unforeseen timing issues) then the spec file should be updated to account for any changes as soon as possible. If the test cannot be updated immediatley, you can make use of Playwright Annotations to skip tests in various ways. Manual running of skipped tests should then be considered when performing test plans that include automation. <br> (see -  https://playwright.dev/docs/test-annotations)
### <ins>Readability</ins>
As much as possible, we want our spec file test cases to read as close to english as possible. One way to do this, we will favor method names that clearly describe what the method will do, even as the method names grow in length. 

###  <ins>Atomicity</ins>
Atomic testing refers to the writing tests that have a singular purpose. This is a common philosophy in unit and integration tests, but can also be a guiding principle for UI regression. Whenever possible, we want to avoid writing lenghty end-to-end tests that have multiple assertions. <br>
* additional explanation
https://medium.com/swlh/creating-fast-reliable-focused-ui-automation-with-atomic-tests-582e4318c0bb 
