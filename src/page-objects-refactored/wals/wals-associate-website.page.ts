import RegionsUtils from '../../utils/regions.utils';
import * as dotenv from 'dotenv';
import { expect, Locator } from '@playwright/test';
import { WalsLocatorPage } from './wals-locators.page';
dotenv.config();

// ========================== Selectors ==================================

let street: string;
let city: string;
let postalCode: string;

export class WalsAssociateWebsitePage extends WalsLocatorPage {
  // ========================== Process Methods ============================
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
   * @param {string} state
   * @memberof WalsAssociateWebsitePage
   */
  changeStateinformation = async (state: string): Promise<void> => {
    await this.page.waitForTimeout(5000);
    await this.associateWebsiteLocLnkChange.waitFor();
    await this.associateWebsiteLocLnkChange.click({ force: true });
    await this.associateWebsiteLocSlctRegion.waitFor();
    await this.associateWebsiteLocSlctRegion.selectOption({ label: state });
    await this.associateWebsiteLocBtnUpdateState.click();
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
    await this.page.waitForLoadState();
    await this.page.locator(`//span[contains(text(),"${tab}")]`).click();
    await this.page.waitForLoadState();
    await this.page.locator(`//*[contains(text(),"${subTab}")] >> nth=0`).click();
    // if ((menuTab = 'memberships')) {
    //   console.log(menuTab);
    //   await this.page.waitForLoadState();
    //   this.page.locator(`span.dropdown-toggle.tb-megamenu-no-link >> nth=0`).click();
    // }
    // if ((menuTab = 'become an associate')) {
    //   console.log(menuTab);
    //   await this.page.waitForLoadState();
    //   this.page.locator(`span.dropdown-toggle.tb-megamenu-no-link >> nth=1`).click();
    // }
    // if ((menuTab = 'resources')) {
    //   console.log(menuTab);
    //   await this.page.waitForLoadState();
    //   this.page.locator(`span.dropdown-toggle.tb-megamenu-no-link >> nth=2`).click();
    // }
    // if ((menuTab = 'about us')) {
    //   console.log(menuTab);
    //   await this.page.waitForLoadState();
    //   await this.page.locator(`//span[contains(text(),"${tab}")]`).click();
    //   await this.page.waitForLoadState();
    //   await this.page.locator(`//a[contains(text(),"${tab}")] >> nth=0`).click();
    // }
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
  navigateToEnglishWalsUSPage = async (url: string): Promise<void> => {
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
   * @memberof WalsAssociateCTAPage
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
}
