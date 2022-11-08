/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import { expect } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { CheckoutPersonalInfoPage } from '../checkout/checkout-personal-info.page';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';

require('dotenv').config;

// ========================== Selectors ==================================

const urlFrenchWalsCaPage = UrlsUtils.wals.urls.urlFrCa;
const btnObtenirUnpLAN = '#block-is-business-builder-plan >> text=OBTENIR UN PLAN';
const btnBecomeAssociate = '//span[contains(text(),"Become an Associate")]';
const lblHomeBusinessSupplement = 'label:has-text("Add Home Business Supplement")';
const btnSuivant = '#builder_modal_checkout_btn_continue';
const btnNextWithForm = '#builder_modal_checkout_btn_withform';
const chkbIndividual = '#individual-bdl';
const chkbNo = '#no-bdl';
const btnContinue = '#builder_modal_checkout_btn';
const btnCheckout = '#minicart_btn_checkout';
const ttlContactInfo = '//h2[contains(text(),"Informations de contact")]';
const txtEmail = '#email-start-form';
const txtFirstName = 'input[name="first-name"]';
const txtLastName = 'input[name="last-name"]';
const txtAddress = '#address';
const txtCity = '#city';
const txtZipCode = '#zipcode-ca';
const lnkChanger = '//a[contains(text(),"Changer")]';
const lnkChangeShoppingRegion = '//a[contains(text(),"Change Shopping Region")]';
const selectRegion = 'select[name="state_select"]';
const btnUpdateState = '#edit-submit--3';
const txtPhoneNumber = '#phone-number';
const selectPhoneType = '//span[contains(text(),"Type de téléphone")]';
const optionPhoneType = '//span[contains(text(),"Mobile")]';
const txtDateOfBirth = '#date-birth';
const txtDependentFirstName = '#first-name-dependant-form';
const txtDependentLastName = '#last-name-dependant-form';
const txtDependentBDay = '#date-birth-dependant-form';
const txtDependentEmail = '#dependant-email-start-form';
const selectFamilyMemberType = '//span[contains(text(),"Type de membre de la famille")]';
const txtSSN = '#s-security';
const btnContactInfoContinue = 'button.shared-button.small';
const rdoButtonUsername = '.mat-radio-container';
const txtPassword = '#password';
const txtConfirmPassword = '#confirm-password';
const btnAssociateAccountContinue = '//button[contains(text()," Continue")]';
const rdoCheckByMail = '//mat-radio-button[@id="mat-radio-13"]/label/div[1]';
const btnCommissionOptionContinue = '//button[contains(text(),"Continue")]';
const txtNameOnCard = '#cardholder_name';
const txtCardNumber = '#card_number';
const txtExpDate = '#expiration_date';
const txtCVV = '#security_code';
const btnPurchase = '#savecc';
const lblWelcome = '//div[@class="confirmation-col col-sm-12 col-tb-12 col-dk-6 confirmation-wrapper wals-content ng-star-inserted"]/h1';
const rdoBankDraft = '//form[@id="cc_form"]/div[2]/div/div/input';
const txtNameOfAccountHolder = '#accountholder_name';
const txtTransitNumber = '#transit_number';
const txtInstitutionNumber = '#institution_number';
const txtAccountNumber = '#account_number';
const rdoCheckingAccount = '//input[ @value="Checking"]';
const txtDependentFamily = 'text=Couverture familiale';
let street: string;
let city: string;
let postalCode: string;

export class FrenchWalsCaPage extends OktaPage {
  // ========================== Process Methods ============================

  filloutContactInformationForm = async (
    state: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> => {
    console.log(' - FrenchWalsCaPage.FilloutContactInformationForm');
    for (const stte of RegionsUtils.caProvinces.filter((ste) => ste.name == state)) {
      street = stte.validAddress.street;
      city = stte.validAddress.city;
      postalCode = stte.validAddress.postalCode;
      // Fill Email
      await this.fillTextBox(txtEmail, email);
      // Fill first-name text box
      await this.fillTextBox(txtFirstName, firstName);
      // Fill input[name="last-name"]
      await this.fillTextBox(txtLastName, lastName);
      // Fill Address
      await this.fillTextBox(txtAddress, street);
      // Fill City
      await this.fillTextBox(txtCity, city);
      await this.page.keyboard.press('Tab');
      // Fill Zip Code
      await this.fillTextBox(txtZipCode, postalCode);
      await this.page.keyboard.press('Tab');
      // Fill Phone Number
      // await this.page.waitForSelector(txtPhoneNumber);
      await this.typeTextBox(txtPhoneNumber, phone);
      // Select a phone type
      await this.clickOnElement(selectPhoneType);
      await this.page.click('//span[contains(text(),"' + type + '")]');
    }
  };
  changeStateinformation = async (state: string): Promise<void> => {
    console.log(' - FrenchWalsCaPage.ChangeStateinformation');
    // Click on change state
    await this.page.waitForTimeout(1000);
    await this.page.waitForSelector(lnkChangeShoppingRegion);
    await this.page.locator(lnkChangeShoppingRegion).click({ force: true });
    // if (!(await this.page.locator(lnkChangeShoppingRegion).isVisible())) {
    //   await this.page.locator(lnkChanger).click({ force: true });
    // }
    // Select a state
    await this.page.waitForSelector(selectRegion);
    await this.selectFromDropDownMenu(selectRegion, state);
    // Click the Update State button
    await this.clickOnElement(btnUpdateState);
  };

  getStartedThenPickAPlan = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.getStartedThenPickAPlan');
    if (!(this.page.url() == 'https://lspro.noussommeslegalshield.ca/')) {
      await this.clickOnElement('//a[@class="subscriber-ASSOCSTP"]');
      // Check No checkbox
      await this.clickOnElement('#no');
      // Click on Add to Cart Button
      await this.clickOnElement('#associate-startup_modal_checkout_btn');
    } else {
      await this.clickConsigueUnPlanBtn();
      // Click on Next button
      await this.clickPRÓXIMOBtn();
      // Check #individual-bdl
      await this.clickIndividualChkBox();
      // Click on Next button
      await this.clickNextWithFormBtn();
      // Check No checkbox
      await this.page.waitForSelector(chkbNo);
      await this.clickOnElement(chkbNo);
      // Click on Add to Cart Button
      await this.clickContinueBtn();
    }
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
    console.log(' - FrenchWalsCaPage.filloutSecurityInfo');
    // Fill date of birth
    await this.typeTextBox(txtDateOfBirth, dob);
    // Fill SSN
    await this.typeTextBox(txtSSN, ssn);
    if (await this.page.locator(txtDependentFamily).isVisible()) {
      // Fill Dependent First Name
      await this.typeTextBox(txtDependentFirstName, depFirst);
      // Fill Dependent Last Name
      await this.typeTextBox(txtDependentLastName, depLast);
      // Fill Dependent Date of Birth
      await this.typeTextBox(txtDependentBDay, depDob);
      // Select a Family member type
      await this.clickOnElement(selectFamilyMemberType);
      await this.page.waitForSelector('//span[contains(text()," ' + dependent + ' ")]');
      await this.clickOnElement('//span[contains(text()," ' + dependent + ' ")]');
      if (!this.page.$(txtDependentEmail)) {
        await this.fillTextBox(txtDependentEmail, dependentEmail);
      } else {
        console.log("Dependent's email is not displayed");
      }
    }

    // Click continue Button
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.page.waitForSelector(btnAssociateAccountContinue);
    await this.clickOnElement(btnAssociateAccountContinue);
  };
  createAUser = async (pass: string, confirmpass: string): Promise<void> => {
    console.log(' - FrenchWalsCaPage.createAUser');
    // Select a username
    await this.page.waitForSelector(rdoButtonUsername);
    const radioUsernames = await this.page.$$(rdoButtonUsername);
    radioUsernames[0].click();
    await this.page.waitForSelector('//div[contains(text(),"test")]');
    const usernames = await this.page.$$('//div[contains(text(),"test")]');
    await this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]').screenshot({ path: 'screenshot.png' });
    console.log(this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]').innerHTML());
    // Enter a password
    await this.fillTextBox(txtPassword, pass);
    // Confirm Password
    await this.fillTextBox(txtConfirmPassword, confirmpass);
    // click on continue button
    await this.clickOnElement(btnContactInfoContinue);
  };
  commissionOptions = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.commissionOptions');
    // Check by mail
    await this.clickOnElement(rdoCheckByMail);
    // Click on Continue button
    await this.clickOnElement(btnCommissionOptionContinue);
  };
  filloutCreditCardInfo = async (name: string, cardNum: string, expDate: string, cvv: string): Promise<void> => {
    console.log(' - FrenchWalsCaPage.filloutCreditCardInfo');
    // Locate an switch to the frame
    const frmParent = this.page.frameLocator('#payment-method');
    const frmPayment = frmParent.frameLocator('#paymentMethodFramePsx');
    // Fill name on card
    // Fill  Account Number
    const NameOnCard = frmPayment.locator(txtNameOnCard);
    await NameOnCard.type(name);
    // Fill card number
    const CardNumber = frmPayment.locator(txtCardNumber);
    await CardNumber.type(cardNum);
    // Fill Expiration date
    const ExpDate = frmPayment.locator(txtExpDate);
    await ExpDate.type(expDate);
    // Fill security code
    const Cvv = frmPayment.locator(txtCVV);
    await Cvv.type(cvv);
    // Click purchase button
    const btnPur = frmPayment.locator(btnPurchase);
    await btnPur.click();
  };
  filloutBankAccountInfo = async (name: string, routingNum: string, institutionNum: string, accountNumber: string): Promise<void> => {
    console.log(' - EnglishWalsCaPage.filloutBankAccountInfo');
    // Locate an switch to the frame
    await this.page.waitForLoadState();
    const frmParent = this.page.frameLocator('#payment-method');
    const frmPayment = frmParent.frameLocator('#paymentMethodFramePsx');
    // Check Bank Draft name
    const bankDraft = frmPayment.locator(rdoBankDraft);
    await bankDraft.click();
    // Fill  Name of account holder
    const NameOfAccountHolder = frmPayment.locator(txtNameOfAccountHolder);
    await NameOfAccountHolder.type(name);
    // Fill Transit number
    const RoutingNumber = frmPayment.locator(txtTransitNumber);
    await RoutingNumber.type(routingNum);
    // Fill Transit number
    const InstitutionNumber = frmPayment.locator(txtInstitutionNumber);
    await InstitutionNumber.type(institutionNum);
    // Fill Account Number
    const AccountNumber = frmPayment.locator(txtAccountNumber);
    await AccountNumber.type(accountNumber);
    // Check Checking Account
    const CheckingAccount = frmPayment.locator(rdoCheckingAccount);
    await CheckingAccount.click();
    // Click purchase button
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
    const btnPur = frmPayment.locator(btnPurchase);
    // await btnPur.click();
  };
  // ========================== Navigate Methods ===========================
  navigateToFrenchWalsCaPage = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.navigateToSpanishWalsUSPage');
    // navigate to URL
    await this.page.goto(urlFrenchWalsCaPage);
  };

  // ========================== Click Methods ==============================

  clickBecomeAssociateBtn = async (): Promise<void> => {
    console.log(this.page.locator(btnBecomeAssociate));
    // await this.page.mouse.click(220, 800);
    await this.page.locator(btnBecomeAssociate).click();
  };
  clickConsigueUnPlanBtn = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.clickGetStartedBtn');
    await this.page.locator(btnObtenirUnpLAN).click();
  };
  selectHomeBusinessSupplement = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.selectHomeBusinessSupplement');
    // Click Select your plan Link
    await this.clickOnElement(lblHomeBusinessSupplement);
  };
  clickPRÓXIMOBtn = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.clickNextBtn');
    // Click on Next button
    await this.clickOnElement(btnSuivant);
  };
  clickIndividualChkBox = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.clickIndividualChkBox');
    // Check individual checkbox
    await this.clickOnElement(chkbIndividual);
  };
  clickNextWithFormBtn = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.clickNextWithFormBtn');
    // Click on Next button
    await this.clickOnElement(btnNextWithForm);
  };
  clickNoChkBox = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.clickNoChkBox');
    // Check No checkbox
    await this.clickOnElement(chkbNo);
  };
  clickContinueBtn = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.clickContinueBtn');
    // Click on Continue button
    await this.clickOnElement(btnContinue);
  };
  clickCheckoutBtn = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.clickCheckoutBtn');
    // Click on Checkout button
    await this.clickOnElement(btnCheckout);
  };
  // ========================== Assertion Methods ==========================

  assertContactInformationTxt = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.assertContactInformationTxt');
    // Verify that  it takes user to checkout
    await this.page.waitForSelector(ttlContactInfo);
    await this.assertElementContainsText(ttlContactInfo, 'Informations de contact');
    console.log('Landed on checkout page');
  };
  assertWelcomelabel = async (): Promise<void> => {
    console.log(' - FrenchWalsCaPage.assertContactInformationTxt');
    // Verify that the user made the purchase
    await this.page.waitForLoadState();
    await this.page.waitForSelector(lblWelcome);
    await this.assertElementContainsText(lblWelcome, 'Bienvenue dans la Famille LegalShield!');
    console.log('Bienvenue dans la Famille LegalShield!');
  };
}
