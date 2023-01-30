import RegionsUtils from '../../utils/regions.utils';
import * as dotenv from 'dotenv';
import { expect, Locator } from '@playwright/test';
import { WalsLocatorPage } from './wals-locators.page';
dotenv.config();

// ========================== Selectors ==================================

let street: string;
let city: string;
let postalCode: string;
let PlanList: Array<string>;
let ctaList: Array<string>;
export class WalsAssociateWebsitePage extends WalsLocatorPage {
  /**
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phone
   * @param {string} bestTime
   * @param {string} email
   * @param {string} msg
   * @memberof WalsAssociateWebsitePage
   */
  filloutMessageMeForm = async (firstName: string, lastName: string, phone: string, bestTime: string, email: string, msg: string): Promise<void> => {
    await this.associateWebsiteLocTxtMessageFormFirstName.fill(firstName);
    await this.associateWebsiteLocTxtMessageFormLastName.fill(lastName);
    await this.associateWebsiteLocTxtMessageFormPhone.type(phone);
    await this.associateWebsiteLocSlctMessageFormBestTime.click();
    await this.associateWebsiteLocSlctMessageFormBestTime.selectOption(bestTime);
    await this.associateWebsiteLocTxtMessageFormEmail.fill(email);
    await this.associateWebsiteLocTxtMessageFormMessage.fill(msg);
    await this.associateWebsiteLocBtnMessageMeSubmit.click();
  };
  /**
   * @param {string} state
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phone
   * @param {string} type
   * @memberof WalsAssociateWebsitePage
   */
  filloutCaContactInformationForm = async (
    state: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> => {
    for (const stte of RegionsUtils.caProvinces.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
      await this.associateWebsiteLocTxtEmail.fill(email);
      await this.associateWebsiteLocTxtFirstName.fill(firstName);
      await this.associateWebsiteLocTxtLastName.fill(lastName);
      await this.associateWebsiteLocTxtAddress.fill(street);
      await this.associateWebsiteLocTxtCity.fill(city);
      await this.page.keyboard.press('Tab');
      await this.associateWebsiteLocTxtZipCode.type(postalCode);
      await this.page.keyboard.press('Tab');
      await this.associateWebsiteLocTxtPhoneNumber.type(phone);
      await this.associateWebsiteLocSlctPhoneType.click();
      await this.page.click('#mat-option-' + type);
    }
  };
  /**
   * @param {string} state
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phone
   * @param {string} type
   * @memberof WalsAssociateWebsitePage
   */
  filloutFrenchCaContactInformationForm = async (
    state: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> => {
    for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
      await this.associateWebsiteLocTxtEmail.fill(email);
      await this.associateWebsiteLocTxtFirstName.fill(firstName);
      await this.associateWebsiteLocTxtLastName.fill(lastName);
      await this.associateWebsiteLocTxtAddress.fill(street);
      await this.associateWebsiteLocTxtCity.fill(city);
      await this.page.keyboard.press('Tab');
      await this.associateWebsiteLocTxtZipCode.type(postalCode);
      await this.page.keyboard.press('Tab');
      await this.associateWebsiteLocTxtPhoneNumber.type(phone);
      await this.associateWebsiteLocSlctPhoneType.click();
      await this.page.click('#mat-option-' + type);
    }
  };
  /**
   * @param {string} state
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phone
   * @param {string} type
   * @memberof WalsAssociateWebsitePage
   */
  filloutUsContactInformationForm = async (
    state: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> => {
    await this.page.waitForLoadState();
    for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
      await this.associateWebsiteLocTxtEmail.fill(email);
      await this.associateWebsiteLocTxtFirstName.fill(firstName);
      await this.associateWebsiteLocTxtLastName.fill(lastName);
      await this.associateWebsiteLocTxtAddress.fill(street);
      await this.associateWebsiteLocTxtCity.fill(city);
      await this.page.keyboard.press('Tab');
      if (!expect(this.associateWebsiteLocTxtZipCode).toBeHidden) {
        await this.associateWebsiteLocTxtZipCode.type(postalCode);
      } else {
        const locator = await this.WeAreLegalShieldLocContainsText(postalCode);
        await locator.click();
      }
      await this.page.keyboard.press('Tab');
      await this.associateWebsiteLocTxtPhoneNumber.type(phone);
      await this.page.keyboard.press('Tab');
      await this.associateWebsiteLocSlctPhoneType.click();
      await this.page.click(`mat-option#mat-option-${type}`);
    }
  };
  /**
   * @param {string} state
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phone
   * @param {string} type
   * @memberof WalsAssociateWebsitePage
   */
  filloutSpanishUsContactInformationForm = async (
    state: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> => {
    for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
      await this.associateWebsiteLocTxtEmail.fill(email);
      await this.associateWebsiteLocTxtFirstName.fill(firstName);
      await this.associateWebsiteLocTxtLastName.fill(lastName);
      await this.associateWebsiteLocTxtAddress.fill(street);
      await this.associateWebsiteLocTxtCity.fill(city);
      await this.page.keyboard.press('Tab');
      if (!expect(this.associateWebsiteLocTxtZipCode).toBeHidden) {
        await this.associateWebsiteLocTxtZipCode.type(postalCode);
      } else {
        const locator = await this.WeAreLegalShieldLocContainsText(postalCode);
        await locator.click();
      }
      await this.page.keyboard.press('Tab');
      await this.associateWebsiteLocTxtPhoneNumber.type(phone);
      await this.associateWebsiteLocSlctPhoneType.click();
      await this.page.click('#mat-option-' + type);
    }
  };
  /**
   * @param {string} region
   * @memberof WalsAssociateWebsitePage
   */
  changeRegion = async (region: string): Promise<void> => {
    await this.page.waitForTimeout(5000);
    await this.associateWebsiteLocLnkChange.waitFor();
    await this.associateWebsiteLocLnkChange.click({ force: true });
    await this.associateWebsiteLocSlctRegion.waitFor();
    await this.associateWebsiteLocSlctRegion.selectOption({ label: region });
    await this.associateWebsiteLocBtnUpdateRegion.click();
  };
  /**
   * @param {number} yesNoIndex
   * @memberof WalsAssociateWebsitePage
   */
  walsAssociateWebsitePickAPlan = async (yesNoIndex: number): Promise<void> => {
    await this.associateWebsiteLocRdoBBusiness.click();
    (await this.associateWebsiteRdBtn(yesNoIndex)).click();
    await this.associateWebsiteLocBtnContinue.click();
    await this.associateWebsiteLocBtnCheckout.click();
  };
  /**
   * @param {string} dob
   * @param {string} ssn
   * @memberof WalsAssociateWebsitePage
   */
  filloutSecurityInfo = async (dob: string, ssn: string): Promise<void> => {
    await this.associateWebsiteLocTxtDateOfBirth.type(dob);
    if (await this.associateWebsiteLocTxtSSN.isVisible()) {
      await this.associateWebsiteLocTxtSSN.type(ssn);
    } else {
      console.log('No SSN text box');
    }
  };

  /**
   * @memberof WalsAssociateWebsitePage
   */
  captureProductArray = async (): Promise<Array<string>> => {
    const planNames: string[] = [];
    await this.page.waitForSelector('//div[contains(@class,"plan-head-info")]/h3');
    const numberOfPlans = (await this.page.$$('//div[contains(@class,"plan-head-info")]/h3')).length;
    for (let i = 0; i < numberOfPlans; i++) {
      const planText = await this.page.locator('//div[contains(@class,"plan-head-info")]/h3').nth(i).innerText();
      planNames.push(planText);
    }
    return planNames;
  };
  /**
   *
   *
   * @param {string[]} displayedProductNames
   * @param {string[]} expectedProductNames
   * @memberof WalsAssociateWebsitePage
   */
  assertTwoArraysOfStringsHaveSameValues = async (displayedProductNames: string[], expectedProductNames: string[]): Promise<void> => {
    let arraysAreEqual = false;

    const sortedArray1 = displayedProductNames.concat().sort();
    const sortedArray2 = expectedProductNames.concat().sort();

    if (displayedProductNames.length !== expectedProductNames.length) {
      arraysAreEqual = false;
      console.log('Number of Plans DOES NOT Equal Expected Number' + '\n' + 'Displayed Products:', displayedProductNames);
      console.log('Expected Products:', expectedProductNames);
    } else {
      for (let i = 0; i < sortedArray1.length; i++) {
        if (sortedArray1[i] !== sortedArray2[i]) {
          arraysAreEqual = false;
          console.log('Displayed Products not what is expected.' + '\n' + 'Displayed Products:', displayedProductNames);
          console.log('Expected Products:', expectedProductNames);
          break;
        } else {
          arraysAreEqual = true;
        }
      }
    }
    expect(arraysAreEqual).toBe(true);
  };

  /**
   * @param {string} depFirst
   * @param {string} depLast
   * @param {string} depDob
   * @param {string} dependent
   * @param {string} dependentEmail
   * @memberof WalsAssociateWebsitePage
   */
  filloutFamilyCoverageInfo = async (depFirst: string, depLast: string, depDob: string, dependent: string, dependentEmail: string): Promise<void> => {
    await this.associateWebsiteLocTxtDependentFirstName.type(depFirst);
    await this.associateWebsiteLocTxtDependentLastName.type(depLast);
    await this.associateWebsiteLocTxtDependentBDay.type(depDob);
    await this.associateWebsiteLocSlctFamilyMemberType.click();
    await this.page.waitForSelector('//span[contains(text()," ' + dependent + ' ")]');
    await this.page.locator('//span[contains(text()," ' + dependent + ' ")]').click();
    if (!(await this.associateWebsiteLocTxtDependentEmail.isHidden())) {
      await this.associateWebsiteLocTxtDependentEmail.fill(dependentEmail);
    } else {
      console.log("Dependent's email is not displayed");
    }
  };
  /**
   * @param {string} CorporationName
   * @param {string} CorporationTaxId
   * @memberof WalsAssociateWebsitePage
   */
  filloutAssociateCompanyDetailsInfo = async (CorporationName: string, CorporationTaxId: string): Promise<void> => {
    await this.associateWebsiteLocTxtCorporationName.type(CorporationName);
    await this.associateWebsiteLocTxtCorporationTaxId.type(CorporationTaxId);
  };
  /**
   * @param {string} tab
   * @param {string} subTab
   * @memberof WalsAssociateWebsitePage
   */
  menuItems = async (tab: string, subTab: string): Promise<void> => {
    const Tab = tab.toLowerCase();
    if (Tab == 'resources' || Tab == 'ressources' || Tab == 'recursos') {
      console.log(`The menu tab clicked on is: "${Tab}"`);
      await this.page.locator(`ul.tb-megamenu-nav.nav.level-0.items-5 li[data-label="Resources"] `).click();
    } else {
      await this.page.waitForLoadState();
      await this.page.locator(`//span[contains(text(),"${tab}")]`).click();
    }
    await this.page.waitForLoadState();
    if (subTab == 'Plans') {
      await this.page.locator(`//*[contains(text(),"${subTab}")] >> nth=2`).click();
    } else if (subTab == 'Petite Entreprise') {
      await this.page.locator(`//*[contains(text(),"${subTab}")] >> nth=1`).click();
    } else {
      await this.page.locator(`//*[contains(text(),"${subTab}")] >> nth=0`).click();
    }
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  becomeAssociate = async (): Promise<void> => {
    await this.page.waitForLoadState();
    await this.associateWebsiteLocBtnBecomeAssociate.click();
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  listPans = async (): Promise<void> => {
    PlanList = [];
    const planList = await this.page.$$('div.plan-head-info h3');
    console.log(planList.length);
    for (const plan of planList) {
      const planText = await plan.innerHTML();
      PlanList.push(planText.trim());
    }
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  listCta = async (): Promise<void> => {
    ctaList = [];
    const ctList = await this.page.$$('//ul[@class="plans-menu-filters menu-dropdown dropdown"]/li/a');
    console.log(ctList.length);
    for (const plan of ctList) {
      const planText = await plan.innerHTML();
      ctaList.push(planText.trim());
    }
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  businessBuilder = async (): Promise<void> => {
    await this.page.waitForLoadState();
    await this.associateWebsiteLocBtnBusinessBuilder.click();
  };
  /**
   * @param {string} dob
   * @param {string} ssn
   * @param {string} depFirst
   * @param {string} depLast
   * @param {string} depDob
   * @param {string} dependent
   * @param {string} dependentEmail
   * @memberof WalsAssociateWebsitePage
   */
  filloutSecurityAndFamilyCoverageInfo = async (
    dob: string,
    ssn: string,
    depFirst: string,
    depLast: string,
    depDob: string,
    dependent: string,
    dependentEmail: string
  ): Promise<void> => {
    await this.associateWebsiteLocTxtDateOfBirth.type(dob);
    await this.associateWebsiteLocTxtSSN.type(ssn);
    await this.associateWebsiteLocTxtDependentFirstName.type(depFirst);
    await this.associateWebsiteLocTxtDependentLastName.type(depLast);
    await this.associateWebsiteLocTxtDependentBDay.type(depDob);
    await this.associateWebsiteLocSlctFamilyMemberType.click();
    await this.page.waitForSelector('//span[contains(text()," ' + dependent + ' ")]');
    await this.page.locator('//span[contains(text()," ' + dependent + ' ")]').click();
    if (await this.associateWebsiteLocTxtDependentEmail.isDisabled()) {
      await this.associateWebsiteLocTxtDependentEmail.fill(dependentEmail);
    } else {
      console.log("Dependent's email is not displayed");
    }
    await this.associateWebsiteLocBtnContactInfoContinue.waitFor();
    await this.associateWebsiteLocBtnContactInfoContinue.click();
  };
  /**
   * @param {string} pass
   * @param {string} confirmpass
   * @memberof WalsAssociateWebsitePage
   */
  createAUser = async (pass: string, confirmpass: string): Promise<void> => {
    this.page.waitForLoadState();
    await this.associateWebsiteCreateUserLocWrapper.waitFor();
    await this.associateWebsiteCreateUserLocRdoBtnUsername.click();
    await this.associateWebsiteCreateUserLocTxtUsername.waitFor();
    await this.associateWebsiteCreateUserLocLblUsername.screenshot({ path: 'screenshot.png' });
    console.log(this.associateWebsiteCreateUserLocLblUsername.innerHTML());
    await this.associateWebsiteLocTxtPassword.waitFor();
    await this.associateWebsiteLocTxtPassword.fill(pass);
    await this.associateWebsiteLocTxtConfirmPassword.waitFor();
    await this.associateWebsiteLocTxtConfirmPassword.fill(confirmpass);
    if (await this.associateWebsiteLocTxtCorporationName.isVisible()) {
      this.filloutAssociateCompanyDetailsInfo('pplsiTestCompany', '111234444');
    }
    await this.associateWebsiteLocBtnContactInfoContinue.click();
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  commissionOptions = async (): Promise<void> => {
    await this.associateWebsiteLocRdoCheckByMail.click();
    await this.associateWebsiteLocBtnContinuePersonalInfoForm.click();
  };
  /**
   * @param {string} name
   * @param {string} cardNum
   * @param {string} expDate
   * @param {string} cvv
   * @memberof WalsAssociateWebsitePage
   */
  filloutCreditCardInfo = async (name: string, cardNum: string, expDate: string, cvv: string): Promise<void> => {
    await this.associateWebsiteLocTxtNameOnCard.type(name);
    await this.associateWebsiteLocTxtCardNumber.type(cardNum);
    await this.associateWebsiteLocTxtExpDate.type(expDate);
    await this.associateWebsiteLocTxtCVV.type(cvv);
    await this.associateWebsiteLocBtnPurchase.click();
  };
  /**
   * @param {string} name
   * @param {string} routingNum
   * @param {string} accountNumber
   * @memberof WalsAssociateWebsitePage
   */
  filloutBankAccountInfo = async (name: string, routingNum: string, accountNumber: string): Promise<void> => {
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(7000);
    await this.associateWebsiteLocRdoBankDraft.click();
    await this.associateWebsiteLocTxtNameOfAccountHolder.type(name);
    await this.associateWebsiteLocTxtRoutingNumber.type(routingNum);
    await this.associateWebsiteLocTxtAccountNumber.type(accountNumber);
    await this.associateWebsiteLocRdoCheckingAccount.click();
    // Click purchase button
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
  };
  /**
   * @param {string} name
   * @param {string} transNum
   * @param {string} institutionNum
   * @param {string} accountNumber
   * @memberof WalsAssociateWebsitePage
   */
  filloutCABankAccountInfo = async (name: string, transNum: string, institutionNum: string, accountNumber: string): Promise<void> => {
    // Locate an switch to the frame
    await this.page.waitForLoadState();
    await this.associateWebsiteLocRdoBankDraft.click();
    const NameOfAccountHolder = this.associateWebsiteLocfrmPayments.locator('#accountholder_name');
    await NameOfAccountHolder.type(name);
    const transitNumber = this.associateWebsiteLocfrmPayments.locator('#transit_number');
    await transitNumber.type(transNum);
    const InstitutionNumber = this.associateWebsiteLocfrmPayments.locator('#institution_number');
    await InstitutionNumber.type(institutionNum);
    const AccountNumber = this.associateWebsiteLocfrmPayments.locator('#account_number');
    await AccountNumber.type(accountNumber);
    await this.associateWebsiteLocRdoCheckingAccount.click();
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
  };
  // ========================== Navigate Methods ===========================
  /**
   * @param {string} url
   * @memberof WalsAssociateWebsitePage
   */
  navigateToUrl = async (url: string): Promise<void> => {
    await this.page.goto(url);
  };

  // ========================== Click Methods ==============================

  /**
   * @memberof WalsAssociateCTAPage
   */
  clickOnLogo = async (): Promise<void> => {
    await this.associateWebsiteLocLogo.click();
  };

  /**
   * @param {string} buttonName
   * @param {number} index
   * @memberof WalsAssociateWebsitePage
   */
  clickOnCTAButton = async (buttonName: string, index: number): Promise<void> => {
    await this.page.waitForLoadState();
    await (await this.associateWebsiteLocCTAButton(buttonName, index)).click();
  };

  // ========================== Assertion Methods ==========================

  assertCartSummary = async (fees: string, total: string): Promise<void> => {
    // Verify that  it takes user to checkout
    await expect(this.associateWebsiteCartSummaryLocOneTimeFees).toContainText(fees);
    await expect(this.associateWebsiteCartSummaryLocTotalDueToday).toContainText(total);
  };
  /**
   * @param {string} txt
   * @memberof WalsAssociateWebsitePage
   */
  assertWelcomelabel = async (txt: string): Promise<void> => {
    // Verify that the user made the purchase
    await this.associateWebsiteLocLblWelcome.waitFor();
    await expect(this.associateWebsiteLocLblWelcome).toContainText(txt);
  };
  /**
   * @param {Locator} ele
   * @param {string} txt
   * @memberof WalsAssociateWebsitePage
   */
  assertContainTextLabel = async (ele: Locator, txt: string): Promise<void> => {
    // Verify that the user made the purchase
    await ele.waitFor();
    await expect(ele).toContainText(txt);
  };
  /**
   * @param {string} plan
   * @memberof WalsAssociateWebsitePage
   */
  assertPlan = async (plan: string): Promise<void> => {
    await this.listPans();
    if (PlanList.indexOf(plan) === -1) {
      console.log(plan + ' is not provided in this region');
    } else {
      console.log(plan + ' is provided in this region');
    }
  };
  /**
   * @param {string} cta
   * @memberof WalsAssociateWebsitePage
   */
  assertCta = async (cta: string): Promise<void> => {
    await this.listCta();
    if (ctaList.indexOf(cta) === -1) {
      console.log(cta + ' button is not visible in this region');
    } else {
      console.log(cta + ' button is visible in this region');
    }
  };
  assertPlanIsProvided = async (plan: string): Promise<void> => {
    await this.listPans();
    expect(PlanList.indexOf(plan)).toBeGreaterThan(-1);
  };
  assertPlanIsNotProvided = async (plan: string): Promise<void> => {
    await this.listPans();
    expect(PlanList.indexOf(plan)).toEqual(-1);
  };
}
