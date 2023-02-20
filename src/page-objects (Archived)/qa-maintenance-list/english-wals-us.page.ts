import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';
import * as dotenv from 'dotenv';
dotenv.config();

// ========================== Selectors ==================================

const urlEnglishWalsUSPage = UrlsUtils.wals.urls.urlEnUS;
const BTN_GET_PLAN = '#block-is-business-builder-plan >> text=GET A PLAN';
const BTN_BECOME_ASSOCIATE = '//span[contains(text(),"Become an Associate")]';
const LBL_HOME_BUSINESS_SUPPLEMENT = 'label:has-text("Add Home Business Supplement")';
const BTN_NEXT = '#builder_modal_checkout_btn_continue';
const BTN_NEXT_WITH_FORM = '#builder_modal_checkout_btn_withform';
const CHKB_INDIVIDUAL = '#individual-bdl';
const CHKB_NO = '#no-bdl';
const BTN_CONTINUE = '#builder_modal_checkout_btn';
const BTN_CHECKOUT = '#minicart_btn_checkout';
const TTL_CONTACT_INFO = '//h2[contains(text(),"Contact information")]';
const TXT_EMAIL = '#email-start-form';
const TXT_FIRST_NAME = 'input[name="first-name"]';
const TXT_LAST_NAME = 'input[name="last-name"]';
const TXT_ADDRESS = '#address';
const TXT_CITY = '#city';
const TXT_ZIP_CODE = '[placeholder="Zip Code"]';
const LNK_CHANGE = '//div/a[contains(text(),"Change")]';
const SELECT_REGION = 'select[name="state_select"]';
const BTN_UPDATE_STATE = '#edit-submit--3';
const TXT_PHONE_NUMBER = '#phone-number';
const SELECT_PHONE_TYPES = '//span[contains(text(),"Phone Type")]';
const TXT_DATE_OF_BIRTH = '#date-birth';
const TXT_DEPENDENT_FIRST_NAME = '#first-name-dependant-form';
const TXT_DEPENDENT_LAST_NAME = '#last-name-dependant-form';
const TXT_DEPENDENT_B_DAY = '#date-birth-dependant-form';
const TXT_DEPENDENT_EMAIL = '#dependant-email-start-form';
const SELECT_FAMILY_MEMBER_TYPE = '//span[contains(text(),"Family Member Type")]';
const TXT_SSN = '#s-security';
const BTN_CONTACT_INFO_CONTINUE = 'button.shared-button.small';
const RDO_BUTTON_USER_NAME = '.mat-radio-container';
const TXT_PASSWORD = '#password';
const TXT_CONFIRMATION_PASSWORD = '#confirm-password';
const RDO_CHECK_BY_MAIL = '//mat-radio-button[@id="mat-radio-13"]/label/div[1]';
const BTN_COMMISSION_OPTION_CONTINUE = '//button[contains(text(),"Continue")]';
const TXT_NAME_ON_CARD = '#cardholder_name';
const TXT_CARD_NUMBER = '#card_number';
const TXT_EXP_DATE = '#expiration_date';
const TXT_CVV = '#security_code';
const BTN_PURCHASE = '#savecc';
const LBL_WELCOME = '//div[@class="confirmation-col col-sm-12 col-tb-12 col-dk-6 confirmation-wrapper wals-content ng-star-inserted"]/h1';
const RDO_BANK_DRAFT = '//form[@id="cc_form"]/div[2]/div/div/input';
const TXT_NAME_OF_ACCOUNT_HOLDER = '#accountholder_name';
const TXT_ROUTING_NUMBER = '#routing_number';
const TXT_ACCOUNT_NUMBER = '#account_number';
const RDO_CHECKING_ACCOUNT = '//input[ @value="Checking"]';
let street: string;
let city: string;
let postalCode: string;

export class EnglishWalsUSPage extends OktaPage {
  // ========================== Process Methods ============================

  filloutContactInformationForm = async (
    state: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> => {
    console.log(' - EnglishWalsUSPage.FilloutContactInformationForm');
    for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
      // Fill Email
      await this.fillTextBox(TXT_EMAIL, email);
      // Fill first-name text box
      await this.fillTextBox(TXT_FIRST_NAME, firstName);
      // Fill input[name="last-name"]
      await this.fillTextBox(TXT_LAST_NAME, lastName);
      // Fill Address
      await this.fillTextBox(TXT_ADDRESS, street);
      // Fill City
      await this.fillTextBox(TXT_CITY, city);
      await this.page.keyboard.press('Tab');
      // Fill Zip Code
      await this.fillTextBox(TXT_ZIP_CODE, postalCode);
      await this.page.keyboard.press('Tab');
      // Fill Phone Number
      // await this.page.waitForSelector(txtPhoneNumber);
      await this.typeTextBox(TXT_PHONE_NUMBER, phone);
      // Select a phone type
      await this.clickOnElement(SELECT_PHONE_TYPES);
      await this.page.click('//span[contains(text(),"' + type + '")]');
    }
  };
  changeStateinformation = async (state: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.ChangeStateinformation');
    // Click on change state
    this.page.waitForLoadState;
    this.page.locator(LNK_CHANGE).isVisible;
    await this.page.locator(LNK_CHANGE).click({ force: true });
    // Select a state
    await this.page.waitForSelector(SELECT_REGION);
    await this.selectFromDropDownMenu(SELECT_REGION, state);
    // Click the Update State button
    await this.clickOnElement(BTN_UPDATE_STATE);
  };

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
    await this.typeTextBox(TXT_DATE_OF_BIRTH, dob);
    // Fill SSN
    await this.typeTextBox(TXT_SSN, ssn);
    // Fill Dependent First Name
    await this.typeTextBox(TXT_DEPENDENT_FIRST_NAME, depFirst);
    // Fill Dependent Last Name
    await this.typeTextBox(TXT_DEPENDENT_LAST_NAME, depLast);
    // Fill Dependent Date of Birth
    await this.typeTextBox(TXT_DEPENDENT_B_DAY, depDob);
    // Select a Family member type
    await this.clickOnElement(SELECT_FAMILY_MEMBER_TYPE);
    await this.page.waitForSelector('//span[contains(text()," ' + dependent + ' ")]');
    await this.clickOnElement('//span[contains(text()," ' + dependent + ' ")]');
    if (!(await this.page.locator(TXT_DEPENDENT_EMAIL).isHidden)) {
      await this.fillTextBox(TXT_DEPENDENT_EMAIL, dependentEmail);
    } else {
      console.log("Dependent's email is not displayed");
    }

    // Click continue Button
    // await this.page.keyboard.press('Tab');
    await this.page.waitForSelector(BTN_CONTACT_INFO_CONTINUE);
    await this.clickOnElement(BTN_CONTACT_INFO_CONTINUE);
  };
  createAUser = async (pass: string, confirmpass: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.createAUser');
    // Select a username
    await this.page.waitForSelector(RDO_BUTTON_USER_NAME);
    const radioUsernames = await this.page.$$(RDO_BUTTON_USER_NAME);
    radioUsernames[0].click();
    await this.page.waitForSelector('//div[contains(text(),"test")]');
    await this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]').screenshot({ path: 'screenshot.png' });
    console.log(this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]').innerHTML());
    // Enter a password
    await this.page.waitForSelector(TXT_PASSWORD);
    await this.page.fill(TXT_PASSWORD, pass);
    // Confirm Password
    await this.page.waitForSelector(TXT_CONFIRMATION_PASSWORD);
    await this.fillTextBox(TXT_CONFIRMATION_PASSWORD, confirmpass);
    // click on continue button
    await this.clickOnElement(BTN_CONTACT_INFO_CONTINUE);
  };
  commissionOptions = async (): Promise<void> => {
    console.log(' - EnglishWalsUSPage.commissionOptions');
    // Check by mail
    await this.clickOnElement(RDO_CHECK_BY_MAIL);
    // Click on Continue button
    await this.clickOnElement(BTN_COMMISSION_OPTION_CONTINUE);
  };
  filloutCreditCardInfo = async (name: string, cardNum: string, expDate: string, cvv: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.filloutCreditCardInfo');
    // Locate an switch to the frame
    const frmParent = this.page.frameLocator('#payment-method');
    const frmPayment = frmParent.frameLocator('#paymentMethodFramePsx');
    // Fill name on card
    // Fill  Account Number
    const NameOnCard = frmPayment.locator(TXT_NAME_ON_CARD);
    await NameOnCard.type(name);
    // Fill card number
    const CardNumber = frmPayment.locator(TXT_CARD_NUMBER);
    await CardNumber.type(cardNum);
    // Fill Expiration date
    const ExpDate = frmPayment.locator(TXT_EXP_DATE);
    await ExpDate.type(expDate);
    // Fill security code
    const Cvv = frmPayment.locator(TXT_CVV);
    await Cvv.type(cvv);
    // Click purchase button
    const btnPur = frmPayment.locator(BTN_PURCHASE);
    await btnPur.click();
  };
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
    const bankDraft = frmPayment.locator(RDO_BANK_DRAFT);
    await bankDraft.click();
    // Fill  Name of account holder
    const NameOfAccountHolder = frmPayment.locator(TXT_NAME_OF_ACCOUNT_HOLDER);
    await NameOfAccountHolder.type(name);
    // Fill Routing number
    const RoutingNumber = frmPayment.locator(TXT_ROUTING_NUMBER);
    await RoutingNumber.type(routingNum);
    // Fill Account Number
    const AccountNumber = frmPayment.locator(TXT_ACCOUNT_NUMBER);
    await AccountNumber.type(accountNumber);
    // Check Checking Account
    const CheckingAccount = frmPayment.locator(RDO_CHECKING_ACCOUNT);
    await CheckingAccount.click();
    // Click purchase button
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
  };
  // ========================== Navigate Methods ===========================
  navigateToEnglishWalsUSPage = async (): Promise<void> => {
    console.log(' - EnglishWalsUSPage.navigateToEnglishWalsUSPage');
    // navigate to URL
    await this.page.goto(urlEnglishWalsUSPage);
  };

  // ========================== Click Methods ==============================

  clickBecomeAssociateBtn = async (): Promise<void> => {
    console.log(this.page.locator(BTN_BECOME_ASSOCIATE));
    // await this.page.mouse.click(220, 800);
    await this.page.locator(BTN_BECOME_ASSOCIATE).click();
  };
  clickGetStartedBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickGetStartedBtn');
    await this.page.locator(BTN_GET_PLAN).click();
  };
  selectHomeBusinessSupplement = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.selectHomeBusinessSupplement');
    // Click Select your plan Link
    await this.clickOnElement(LBL_HOME_BUSINESS_SUPPLEMENT);
  };
  clickNextBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickNextBtn');
    // Click on Next button
    await this.clickOnElement(BTN_NEXT);
  };
  clickIndividualChkBox = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickIndividualChkBox');
    // Check individual checkbox
    await this.clickOnElement(CHKB_INDIVIDUAL);
  };
  clickNextWithFormBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickNextWithFormBtn');
    // Click on Next button
    await this.clickOnElement(BTN_NEXT_WITH_FORM);
  };
  clickNoChkBox = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickNoChkBox');
    // Check No checkbox
    await this.clickOnElement(CHKB_NO);
  };
  clickContinueBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickContinueBtn');
    // Click on Continue button
    await this.clickOnElement(BTN_CONTINUE);
  };
  clickCheckoutBtn = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.clickCheckoutBtn');
    // Click on Checkout button
    await this.clickOnElement(BTN_CHECKOUT);
  };
  // ========================== Assertion Methods ==========================

  assertContactInformationTxt = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.assertContactInformationTxt');
    // Verify that  it takes user to checkout
    await this.page.waitForSelector(TTL_CONTACT_INFO);
    await this.assertElementContainsText(TTL_CONTACT_INFO, 'Contact information');
    console.log('Landed on checkout page');
  };
  assertWelcomelabel = async (): Promise<void> => {
    console.log(' - PrimericaGroupPage.assertContactInformationTxt');
    // Verify that the user made the purchase
    this.page.waitForLoadState;
    await this.page.waitForSelector(LBL_WELCOME);
    await this.assertElementContainsText(LBL_WELCOME, 'Welcome to the LegalShield Family!');
    console.log('Welcome to the LegalShield Family!');
  };
}
