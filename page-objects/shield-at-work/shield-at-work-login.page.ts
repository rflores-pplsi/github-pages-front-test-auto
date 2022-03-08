import { test, expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================

let url = urlsUtils.legalshieldUrls.shieldAtWork.url;
let txtEmail = '[placeholder="Email address/Username"]';
let txtPassword = '[placeholder="Password"]';
let btnSignIn = '#root button > span';
let txtSearch = '[placeholder="Search by name or group number"]';
let searchBtn = '[id="searchButton"]';
let groupTxt = '#root  .lsux-container--flex-items-center.mb-2 > h3';
let groupManagmentTxt = 'h2:has-text("Group management")';


export class LsWorkLoginPage extends LoginPage {

    // ========================== Process Methods ========================== 

    loginWithCredentials = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.loginWithCredentials")
        await this.page.fill(txtEmail, "testy.g.tester@email.com");
        await this.page.fill(txtPassword, "Password10!");
        await this.page.click(btnSignIn);
        await this.page.waitForTimeout(1000);
    }

    groupSearchByGroupNumber = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.groupSearchByGroupNumber")
        await this.page.fill(txtSearch, '111452');
        await this.page.click(searchBtn);
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
        await this.page.waitForSelector(groupTxt);
        const locator = this.page.locator(groupTxt);
        await expect(locator).toContainText('Barry University');

    }
        // Verify that the login was successful
        assertTextGroupManagment = async (): Promise<void> => {
            console.log(" - accountShieldAtWorkPage.assertTextGroup")
            await this.page.waitForSelector(groupManagmentTxt);
            const locator = this.page.locator(groupManagmentTxt);
            await expect(locator).toContainText('Group management');
    
        }


}