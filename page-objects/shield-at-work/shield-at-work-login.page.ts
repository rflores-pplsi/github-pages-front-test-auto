import { test, expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================

let url = urlsUtils.legalshieldUrls.shieldAtWork.url;
let txtEmail = '[placeholder="Email address/Username"]';
let txtPassword = '[placeholder="Password"]';
let btnSignIn = '#root button > span';
let txtGroup = '#root  .lsux-container--flex-items-center.mb-2 > h3';
let txtGroupManagment = 'h2:has-text("Group management")';



export class LsWorkLoginPage extends LoginPage {

    // ========================== Process Methods ========================== 

    loginWithCredentials = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.loginWithCredentials")
        await this.page.fill(txtEmail, "testy.g.tester@email.com");
        await this.page.fill(txtPassword, "Password10!");
        await this.page.click(btnSignIn);
        await this.page.waitForTimeout(1000);
    }



    // ========================== Navigate Methods ==========================

    navigateToShieldAtWork = async (): Promise<void> => {

        console.log(" - accountShieldAtWorkPage.navigateToShieldAtWork")
        await this.page.goto(url);

    }
    // ========================== Click Methods ========================== 


    // ========================== Assertion Methods ========================== 
    // Verify that the group is displayed on the group management page
    assertTextGroup = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.assertTextGroup")
        await this.page.waitForSelector(txtGroupManagment);
        const locator = this.page.locator(txtGroupManagment);
        await expect(locator).toContainText('Group management');
        

    }
     


