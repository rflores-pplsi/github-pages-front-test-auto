import RegionsUtils from '../../../utils/regions.utils';
import UrlsUtils from '../../../utils/urls.utils';
import * as dotenv from 'dotenv';
import { expect } from '@playwright/test';
import { QaMaintenanceListLocatorsPage } from './qa-maintenance-list-locators.page';
dotenv.config();

// ========================== Selectors ==================================
let street: string;
let city: string;
let postalCode: string;

export class WalsPage extends QaMaintenanceListLocatorsPage {
  // ========================== Process Methods ============================

  filloutBankAccountInfo = async (name: string, routingNum: string, accountNumber: string): Promise<void> => {
    console.log(' - EnglishWalsUSPage.filloutBankAccountInfo');
    // Locate an switch to the frame
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(7000);
    // Check Bank Draft name
    await this.paymentPageRdoBankDraft.click();
    // Fill  Name of account holder
    await this.paymentPageTxtNameOfAccountHolder.type(name);
    // Fill Routing number
    await this.paymentPageTxtRoutingNumber.type(routingNum);
    // Fill Account Number
    await this.paymentPageTxtAccountNumber.type(accountNumber);
    // Check Checking Account
    await this.paymentPageRdoCheckingAccount.click();
    // Click purchase button
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
  };

  changeRegion = async (region: string): Promise<void> => {
    await this.associateWebsiteHeaderLocMemberLoginLink.waitFor();
    await this.associateWebsiteLocLnkChange.click();
    await this.associateWebsiteLocSlctRegion.selectOption({ label: region });
    await this.associateWebsiteLocBtnUpdateRegion.click();
    await this.page.waitForLoadState('networkidle');
  };

  getStartedThenPickAPlan = async (): Promise<void> => {
    await this.becomeAssociateLocBtn.click();
    await this.BTN_GET_A_PLAN.click();
    // Click on label Add Home Business Supplement
    if (!(await this.LBL_HOME_BUSINESS_SUPPLEMENT.isHidden())) await this.LBL_HOME_BUSINESS_SUPPLEMENT.click();
    // Click on Next button
    await this.BTN_NEXT.click();
    // Check #individual-bdl
    await this.CHKB_INDIVIDUAL.click();
    // Click on Next button
    await this.BTN_NEXT_WITH_FORM.click();
    // Check No checkbox
    await this.CHKB_NO.click();
    // Click on Add to Cart Button
    await this.BTN_CONTINUE.click();
    // Click on Checkout Button
    await this.BTN_CHECKOUT.click();
  };
  /**
   * @param {string} language
   * @param {string} state
   * @param {string} email
   * @param {string}  firstName
   * @param {string}  lastName
   * @param {string}  phone
   * @param {string}  type
   * @memberof WalsUSPage
   */
  async filloutContactInformationForm(
    language: string,
    state: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    type: string
  ): Promise<void> {
    const Lan = language.toLowerCase();
    if (Lan == 'englishus') {
      for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == state)) {
        street = stte.validAddress.street;
        city = stte.validAddress.city;
        postalCode = stte.validAddress.postalCode;
        // Fill Email
        await this.personalInfoLocTxtEmail.fill(email);
        // Fill first-name text box
        await this.personalInfoLocTxtFirstName.fill(firstName);
        // Fill input[name="last-name"]
        await this.personalInfoLocTxtLastName.fill(lastName);
        // Fill Address
        await this.personalInfoLocTxtAddress.fill(street);
        // Fill City
        await this.personalInfoLocTxtCity.fill(city);
        await this.page.keyboard.press('Tab');
        // Fill Zip Code
        await this.personalInfoLocTxtZipCode.type(postalCode);
        await this.page.keyboard.press('Tab');
        // Fill Phone Number
        // await this.page.waitForSelector(txtPhoneNumber);
        await this.personalInfoLocTxtPhoneNumber.type(phone);
        // Select a phone type
        await this.personalInfoLocSlctPhoneType.click();
        await this.page.click('//span[contains(text(),"' + type + '")]');
      }
    } else if (Lan == 'englishca') {
      for (const stte of RegionsUtils.caProvinces.filter((ste) => ste.name == state)) {
        street = stte.validAddress.street;
        city = stte.validAddress.city;
        postalCode = stte.validAddress.postalCode;
        // Fill Email
        await this.personalInfoLocTxtEmail.fill(email);
        // Fill first-name text box
        await this.personalInfoLocTxtFirstName.fill(firstName);
        // Fill input[name="last-name"]
        await this.personalInfoLocTxtLastName.fill(lastName);
        // Fill Address
        await this.personalInfoLocTxtAddress.fill(street);
        // Fill City
        await this.personalInfoLocTxtCity.fill(city);
        await this.page.keyboard.press('Tab');
        // Fill Zip Code
        await this.personalInfoLocTxtZipCode.type(postalCode);
        await this.page.keyboard.press('Tab');
        // Fill Phone Number
        // await this.page.waitForSelector(txtPhoneNumber);
        await this.personalInfoLocTxtPhoneNumber.type(phone);
        // Select a phone type
        await this.personalInfoLocSlctPhoneType.click();
        await this.page.click('//span[contains(text(),"' + type + '")]');
      }
    } else if (Lan == 'frenchca') {
      for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.name == state)) {
        street = stte.validAddress.street;
        city = stte.validAddress.city;
        postalCode = stte.validAddress.postalCode;
        // Fill Email
        await this.personalInfoLocTxtEmail.fill(email);
        // Fill first-name text box
        await this.personalInfoLocTxtFirstName.fill(firstName);
        // Fill input[name="last-name"]
        await this.personalInfoLocTxtLastName.fill(lastName);
        // Fill Address
        await this.personalInfoLocTxtAddress.fill(street);
        // Fill City
        await this.personalInfoLocTxtCity.fill(city);
        await this.page.keyboard.press('Tab');
        // Fill Zip Code
        await this.personalInfoLocTxtZipCode.type(postalCode);
        await this.page.keyboard.press('Tab');
        // Fill Phone Number
        // await this.page.waitForSelector(txtPhoneNumber);
        await this.personalInfoLocTxtPhoneNumber.type(phone);
        // Select a phone type
        await this.personalInfoLocSlctPhoneType.click();
        await this.page.click('//span[contains(text(),"' + type + '")]');
      }
    } else if (Lan == 'spanishus') {
      for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.name == state)) {
        street = stte.validAddress.street;
        city = stte.validAddress.city;
        postalCode = stte.validAddress.postalCode;
        // Fill Email
        await this.personalInfoLocTxtEmail.fill(email);
        // Fill first-name text box
        await this.personalInfoLocTxtFirstName.fill(firstName);
        // Fill input[name="last-name"]
        await this.personalInfoLocTxtLastName.fill(lastName);
        // Fill Address
        await this.personalInfoLocTxtAddress.fill(street);
        // Fill City
        await this.personalInfoLocTxtCity.fill(city);
        await this.page.keyboard.press('Tab');
        // Fill Zip Code
        await this.personalInfoLocTxtZipCode.type(postalCode);
        await this.page.keyboard.press('Tab');
        // Fill Phone Number
        // await this.page.waitForSelector(txtPhoneNumber);
        await this.personalInfoLocTxtPhoneNumber.type(phone);
        // Select a phone type
        await this.personalInfoLocSlctPhoneType.click();
        await this.page.click('//span[contains(text(),"' + type + '")]');
      }
    }
  }
  filloutSecurityAndFamilyCoverageInfo = async (
    dob: string,
    ssn: string,
    depFirst: string,
    depLast: string,
    depDob: string,
    dependent: string,
    dependentEmail: string
  ): Promise<void> => {
    // Fill date of birth
    await this.personalInfoLocTxtDateOfBirth.type(dob);
    // Fill SSN
    await this.personalInfoLocTxtSSN.type(ssn);
    // Fill Dependent First Name
    await this.personalInfoLocTxtDependentFirstName.type(depFirst);
    // Fill Dependent Last Name
    await this.personalInfoLocTxtDependentLastName.type(depLast);
    // Fill Dependent Date of Birth
    await this.personalInfoLocTxtDependentBDay.type(depDob);
    // Select a Family member type
    await this.personalInfoLocSlctFamilyMemberType.click();
    await this.page.waitForSelector('//span[contains(text()," ' + dependent + ' ")]');
    await this.page.locator('//span[contains(text()," ' + dependent + ' ")]').click();
    if (!(await this.personalInfoLocTxtDependentEmail.isHidden())) {
      await this.personalInfoLocTxtDependentEmail.fill(dependentEmail);
    } else {
      console.log("Dependent's email is not displayed");
    }
    await this.page.waitForLoadState();
    // Click continue Button
    // await this.page.keyboard.press('Tab');
  };
  createAUser = async (pass: string, confirmpass: string): Promise<void> => {
    // Select a username
    await this.createUserRdoButtonUsername.waitFor();
    await this.createUserRdoButtonUsername.click();
    // await this.page.waitForSelector('//div[contains(text(),"test")]');
    await this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]').screenshot({ path: 'screenshot.png' });
    console.log(this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]').innerHTML());
    // Enter a password
    await this.createUserTxtPassword.fill(pass);
    // Confirm Password
    await this.createUserTxtConfirmPassword.fill(confirmpass);
    // click on continue button
    await this.personalInfoLocBtnContactInfoContinue.click();
  };
  commissionOptions = async (): Promise<void> => {
    // Check by mail
    await this.createUserRdoCheckByMail.click();
    // Click on Continue button
    await this.personalInfoLocBtnContactInfoContinue.click();
  };
  filloutCreditCardInfo = async (name: string, cardNum: string, expDate: string, cvv: string): Promise<void> => {
    // Fill name on card
    // Fill  Account Number
    await this.paymentPageTxtNameOnCard.type(name);
    // Fill card number
    await this.paymentPageTxtCardNumber.type(cardNum);
    // Fill Expiration date
    await this.paymentPageTxtExpDate.type(expDate);
    // Fill security code
    await this.paymentPageTxtCVV.type(cvv);
    // Click purchase button
    await this.paymentPageBtnPurchase.click();
  };
  filloutCaBankAccountInfo = async (name: string, routingNum: string, institutionNum: string, accountNumber: string): Promise<void> => {
    console.log(' - EnglishWalsCaPage.filloutBankAccountInfo');
    // Locate an switch to the frame
    await this.page.waitForLoadState();
    // Check Bank Draft name
    await this.paymentPageRdoBankDraft.click();
    // Fill  Name of account holder
    await this.paymentPageTxtNameOfAccountHolder.type(name);
    // Fill Transit number
    await this.paymentPageTxtTransitNumber.type(routingNum);
    // Fill Transit number
    await this.paymentPageTxtInstitutionNumber.type(institutionNum);
    // Fill Account Number
    await this.paymentPageTxtAccountNumber.type(accountNumber);
    // Check Checking Account
    await this.paymentPageRdoCheckingAccount.click();
    // Click purchase button
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
  };
  // ========================== Navigate Methods ===========================
  navigateToWalsPage = async (url: string): Promise<void> => {
    const Lan = url.toLowerCase();
    if (Lan == 'englishus') {
      await this.page.goto(UrlsUtils.wals.urls.urlEnUS);
    }
    if (Lan == 'englishca') {
      await this.page.goto(UrlsUtils.wals.urls.urlEnCa);
    }
    if (Lan == 'frenchca') {
      await this.page.goto(UrlsUtils.wals.urls.urlFrCa);
    }
    if (Lan == 'spanishus') {
      await this.page.goto(UrlsUtils.wals.urls.urlSpUS);
    }
  };

  // ========================== Click Methods ==============================

  clickBecomeAssociateBtn = async (): Promise<void> => {
    // await this.page.mouse.click(220, 800);
    await this.BTN_BECOME_ASSOCIATE.click();
  };

  // ========================== Assertion Methods ==========================

  assertContactInformationTxt = async (language: string): Promise<void> => {
    // Verify that  it takes user to checkout
    await this.personalInfoLocTtlContactInfo.waitFor();
    const Language = language.toLocaleLowerCase();
    if (Language == 'english') {
      expect(this.personalInfoLocTtlContactInfo.innerText()).toEqual('Contact information');
    } else if (Language == 'french') {
      expect(this.personalInfoLocTtlContactInfo.innerText()).toEqual('Informations de contact');
    } else if (Language == 'spanish') {
      expect(this.personalInfoLocTtlContactInfo.innerText()).toEqual('Información del contacto');
    }
  };
  assertWelcomelabel = async (language: string): Promise<void> => {
    console.log(' - EnglishWalsCaPage.assertContactInformationTxt');
    // Verify that the user made the purchase
    this.page.waitForLoadState;
    await this.confirmationPageLblWelcome.waitFor();
    const Language = language.toLocaleLowerCase();
    if (Language == 'english') {
      expect(await this.confirmationPageLblWelcome.innerText()).toEqual('Welcome to the LegalShield Family!');
    } else if (Language == 'french') {
      expect(await this.confirmationPageLblWelcome.innerText()).toEqual('Bienvenue dans la Famille LegalShield!');
    } else if (Language == 'spanish') {
      expect(await this.confirmationPageLblWelcome.innerText()).toEqual('¡Bienvenido a la familia LegalShield!');
    }
  };
}
