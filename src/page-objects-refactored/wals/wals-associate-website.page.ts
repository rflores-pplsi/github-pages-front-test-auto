import RegionsUtils from '../../utils/regions.utils';
import * as dotenv from 'dotenv';
import { expect } from '@playwright/test';
import { WalsLocatorPage } from './wals-locators.page';
dotenv.config();

// ========================== Selectors ==================================

let street: string;
let city: string;
let postalCode: string;

export class WalsAssociateWebsitePage extends WalsLocatorPage {
  // ========================== Process Methods ============================
  /**
   * @param {string} state
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phone
   * @param {string} type
   * @memberof WalsAssociateWebsitePage
   */
  filloutContactInformationForm = async (
    state: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> => {
    for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
      // Fill Email
      await this.associateWebsiteLocTxtEmail.fill(email);
      // Fill first-name text box
      await this.associateWebsiteLocTxtFirstName.fill(firstName);
      // Fill input[name="last-name"]
      await this.associateWebsiteLocTxtLastName.fill(lastName);
      // Fill Address
      await this.associateWebsiteLocTxtAddress.fill(street);
      // Fill City
      await this.associateWebsiteLocTxtCity.fill(city);
      await this.page.keyboard.press('Tab');
      // Fill Zip Code
      await this.associateWebsiteLocTxtZipCode.fill(postalCode);
      await this.page.keyboard.press('Tab');
      // Fill Phone Number
      // await this.page.waitForSelector(txtPhoneNumber);
      await this.associateWebsiteLocTxtPhoneNumber.type(phone);
      // Select a phone type
      await this.associateWebsiteLocSlctPhoneType.click();
      await this.page.click('#mat-option-' + type);
    }
  };
  /**
   * @param {string} state
   * @memberof WalsAssociateWebsitePage
   */
  changeStateinformation = async (state: string): Promise<void> => {
    // Click on change state
    await this.page.waitForTimeout(3000);
    await this.associateWebsiteLocLnkChange.waitFor();
    await this.associateWebsiteLocLnkChange.click({ force: true });
    // Select a state
    await this.associateWebsiteLocSlctRegion.waitFor();
    await this.associateWebsiteLocSlctRegion.selectOption({ label: state });
    // Click the Update State button
    await this.associateWebsiteLocBtnUpdateState.click();
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  getStartedThenPickAPlan = async (): Promise<void> => {
    console.log(' - EnglishWalsUSPage.getStartedThenPickAPlan');
    await this.clickGetStartedBtn();
    // Click on label Add Home Business Supplement
    await this.selectHomeBusinessSupplement();
    // Click on Next button
    await this.clickNextBtn();
    // Check #individual-bdl
    await this.clickIndividualChkBox();
    // Click on Next button
    await this.clickNextWithFormBtn();
    // Check No checkbox
    await this.clickNoChkBox();
    // Click on Add to Cart Button
    await this.clickContinueBtn();
    // Click on Checkout Button
    await this.clickCheckoutBtn();
  };
  /**
   * @param {string} dob
   * @param {string} ssn
   * @memberof WalsAssociateWebsitePage
   */
  filloutSecurityInfo = async (dob: string, ssn: string): Promise<void> => {
    // Fill date of birth
    await this.associateWebsiteLocTxtDateOfBirth.type(dob);
    // Fill SSN
    await this.associateWebsiteLocTxtSSN.type(ssn);
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  becomeAssociate = async (): Promise<void> => {
    await this.page.waitForLoadState();
    await this.associateWebsiteLocBtnBecomeAssociate.click();
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
    console.log(' - EnglishWalsUSPage.filloutSecurityInfo');
    // Fill date of birth
    await this.associateWebsiteLocTxtDateOfBirth.type(dob);
    // Fill SSN
    await this.associateWebsiteLocTxtSSN.type(ssn);
    // Fill Dependent First Name
    await this.associateWebsiteLocTxtDependentFirstName.type(depFirst);
    // Fill Dependent Last Name
    await this.associateWebsiteLocTxtDependentLastName.type(depLast);
    // Fill Dependent Date of Birth
    await this.associateWebsiteLocTxtDependentBDay.type(depDob);
    // Select a Family member type
    await this.associateWebsiteLocSlctFamilyMemberType.click();
    await this.page.waitForSelector('//span[contains(text()," ' + dependent + ' ")]');
    await this.page.locator('//span[contains(text()," ' + dependent + ' ")]').click();
    if (await this.associateWebsiteLocTxtDependentEmail.isDisabled()) {
      await this.associateWebsiteLocTxtDependentEmail.fill(dependentEmail);
    } else {
      console.log("Dependent's email is not displayed");
    }

    // Click continue Button
    // await this.page.keyboard.press('Tab');
    await this.associateWebsiteLocBtnContactInfoContinue.waitFor();
    await this.associateWebsiteLocBtnContactInfoContinue.click();
  };
  /**
   * @param {string} pass
   * @param {string} confirmpass
   * @memberof WalsAssociateWebsitePage
   */
  createAUser = async (pass: string, confirmpass: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.createAUser');
    // Select a username
    await this.page.waitForSelector('div.component-wrapper');
    await this.page.locator('div.mat-radio-container >> nth=0').click();
    await this.page.waitForSelector('//div[contains(text(),"test")]');
    await this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]').screenshot({ path: 'screenshot.png' });
    console.log(this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]').innerHTML());
    // Enter a password
    await this.associateWebsiteLocTxtPassword.waitFor();
    await this.associateWebsiteLocTxtPassword.fill(pass);
    // Confirm Password
    await this.associateWebsiteLocTxtConfirmPassword.waitFor();
    await this.associateWebsiteLocTxtConfirmPassword.fill(confirmpass);
    // click on continue button
    await this.associateWebsiteLocBtnContactInfoContinue.click();
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  commissionOptions = async (): Promise<void> => {
    console.log(' - EnglishWalsUSPage.commissionOptions');
    // Check by mail
    await this.associateWebsiteLocRdoCheckByMail.click();
    // Click on Continue button
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
    console.log(' - EnglishWalsUSPage.filloutCreditCardInfo');
    // Locate an switch to the frame
    const frmParent = this.page.frameLocator('#payment-method');
    const frmPayment = frmParent.frameLocator('#paymentMethodFramePsx');
    // Fill name on card
    // Fill  Account Number
    const NameOnCard = frmPayment.locator('#cardholder_name');
    await NameOnCard.type(name);
    // Fill card number
    const CardNumber = frmPayment.locator('#card_number');
    await CardNumber.type(cardNum);
    // Fill Expiration date
    const ExpDate = frmPayment.locator('#expiration_date');
    await ExpDate.type(expDate);
    // Fill security code
    const Cvv = frmPayment.locator('#security_code');
    await Cvv.type(cvv);
    // Click purchase button
    const btnPur = frmPayment.locator('#savecc');
    await btnPur.click();
  };
  /**
   * @param {string} name
   * @param {string} routingNum
   * @param {string} accountNumber
   * @memberof WalsAssociateWebsitePage
   */
  filloutBankAccountInfo = async (name: string, routingNum: string, accountNumber: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.filloutBankAccountInfo');
    // Locate an switch to the frame
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(7000);
    this.page.frameLocator('#payment-method');
    const frmParent = this.page.frameLocator('#payment-method');
    this.page.frameLocator('#paymentMethodFramePsx');
    const frmPayment = frmParent.frameLocator('#paymentMethodFramePsx');
    // Check Bank Draft name
    const bankDraft = frmPayment.locator('//form[@id="cc_form"]/div[2]/div/div/input');
    await bankDraft.click();
    // Fill  Name of account holder
    const NameOfAccountHolder = frmPayment.locator('#accountholder_name');
    await NameOfAccountHolder.type(name);
    // Fill Routing number
    const RoutingNumber = frmPayment.locator('#routing_number');
    await RoutingNumber.type(routingNum);
    // Fill Account Number
    const AccountNumber = frmPayment.locator('#account_number');
    await AccountNumber.type(accountNumber);
    // Check Checking Account
    const CheckingAccount = frmPayment.locator('//input[ @value="Checking"]');
    await CheckingAccount.click();
    // Click purchase button
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
  };
  // ========================== Navigate Methods ===========================
  /**
   * @param {string} url
   * @memberof WalsAssociateWebsitePage
   */
  navigateToEnglishWalsUSPage = async (url: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.navigateToEnglishWalsUSPage');
    // navigate to URL
    await this.page.goto(url);
  };

  // ========================== Click Methods ==============================
  /**
   * @memberof WalsAssociateWebsitePage
   */
  clickBecomeAssociateBtn = async (): Promise<void> => {
    // await this.page.mouse.click(220, 800);
    await this.associateWebsiteLocBtnBecomeAssociate.click();
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  clickGetStartedBtn = async (): Promise<void> => {
    await this.associateWebsiteLocBtnGetAPlan.click();
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  selectHomeBusinessSupplement = async (): Promise<void> => {
    // Click Select your plan Link
    await this.associateWebsiteLocLblHomeBusinessSupplement.click();
  };
  /**
   * @memberof WalsAssociateWebsitePage
   */
  clickNextBtn = async (): Promise<void> => {
    // Click on Next button
    await this.associateWebsiteLocBtnNext.click();
  };
  clickIndividualChkBox = async (): Promise<void> => {
    // Check individual checkbox
    await this.associateWebsiteLocChkBIndividual.click();
  };
  clickNextWithFormBtn = async (): Promise<void> => {
    // Click on Next button
    await this.associateWebsiteLocBtnNextWithForm.click();
  };
  clickNoChkBox = async (): Promise<void> => {
    // Check No checkbox
    await this.associateWebsiteLocChkBNo.click();
  };
  clickContinueBtn = async (): Promise<void> => {
    // Click on Continue button
    await this.associateWebsiteLocBtnContinue.click();
  };
  clickCheckoutBtn = async (): Promise<void> => {
    // Click on Checkout button
    await this.associateWebsiteLocBtnCheckout.click();
  };
  // ========================== Assertion Methods ==========================

  assertContactInformationTxt = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.assertContactInformationTxt');
    // Verify that  it takes user to checkout
    await this.associateWebsiteLocTtlContactInfo.waitFor();
    await expect(this.associateWebsiteLocTtlContactInfo).toContainText('Contact information');
    console.log('Landed on checkout page');
  };
  assertWelcomelabel = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.assertContactInformationTxt');
    // Verify that the user made the purchase
    await this.associateWebsiteLocLblWelcome.waitFor();
    await expect(this.associateWebsiteLocLblWelcome).toContainText('Welcome to the LegalShield Family!');
  };
}
