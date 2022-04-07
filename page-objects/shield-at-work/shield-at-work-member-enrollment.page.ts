import { expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { LsWorkLoginPage } from '../shield-at-work/shield-at-work-login.page';

// ========================== Selectors ==================================

let url = urlsUtils.legalshieldUrls.shieldAtWork.url;
let btnEnrollNewMember = '.lsux-content  div:nth-child(3) .lsux-button--tertiary > span';
let txtFirstName = '[placeholder="First name"]';
let txtLastName = '[placeholder="Last name"]';
let txtHomePhone = '#homePhoneInput';
let txtEmailAddress = '[placeholder="Email address"]';
let txtAddress1 = '[placeholder="Address 1"]';
let txtCity = '[placeholder="City"]';
let txtState = '[id="state"]';
let txtZipCode = '[placeholder="Zip code"]';
let btnContinueContactInfo = '.lsux-content  form:nth-child(1) button > span';
let btnEdit = '.lsux-content  .TZykF7nc8qs6i9k03RlmT > button > span';

// comment




export class ShieldAtWorkMemberEnrollment extends LsWorkLoginPage {

    // ========================== Process Methods ============================

    fillOutContactInformation = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.fillOutContactInformation")
        // Type in the fist name field Test 
        await this.page.fill(txtFirstName, 'Test');
        // Type in the last name field Tester
        await this.page.fill(txtLastName, 'Tester');
        // Type in the home phone field 5555555555
        await this.page.fill(txtHomePhone, '5555555555');
        // Type in the email address field tester93@gmail.com
        await this.page.fill(txtEmailAddress, 'tester93@gmail.com');
        //Type in the address 1 field 1666 Raleigh
        await this.page.fill(txtAddress1, '1666 Raleigh');
        //Type in the city field Dallas 
        await this.page.fill(txtCity, 'Dallas');
        // Select TX state from drop down 
        await this.page.selectOption(txtState, { label: 'TX' });
        //Type in the zip code field 77494
        await this.page.fill(txtZipCode, '77494');

    }


    // ========================== Navigate Methods ===========================

    navigateToShieldAtWorkMemberEnrollment = async (): Promise<void> => {

        console.log(" - accountShieldAtWorkPage.navigateToShieldAtWorkMemberEnrollment")
        // Navigate to Url 
        await this.page.goto(url);
        // Login to ShieldAtWork
        await this.loginWithCredentials();

    }
    // ========================== Click Methods ============================== 

    clickEnrollNewMember = async (): Promise<void> => {
        // Click on Enroll new member button
        console.log(" - navigateToShieldAtWorkMemberEnrollement.clickEnrollNewMember")
        await this.page.click(btnEnrollNewMember);

    }

    clickContinueButtonContactInfo = async (): Promise<void> => {
        // Click on Continue button
        console.log(" - navigateToShieldAtWorkMemberEnrollement.clickContinueButtonContactInfo")
        await this.page.click(btnContinueContactInfo);

    }




    // ========================== Assertion Methods ==========================

    assertEditButton = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.assertEditButton")
        // Verify that Edit button is enabled
        await this.page.waitForSelector(btnEdit);
        const locator = this.page.locator(btnEdit);
        await expect(locator).toBeEnabled();

    }

}
