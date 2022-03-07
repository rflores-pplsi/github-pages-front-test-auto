import { test, expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { BasePage } from '../base.page';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================
//let url = 'https://login.dev-shieldatwork.com/login?app=work&impact=Low&path=%2f';
let url = urlsUtils.legalshieldUrls.shieldAtWork.url;
let txtEmail = '[placeholder="Email address/Username"]';
let txtPassword = '[placeholder="Password"]';
let btnSignIn = '#root button > span';
let txtSearch = '[placeholder="Search by name or group number"]';
let searchBtn = '[id="searchButton"]';
let groupTxt = '#root  .lsux-container--flex-items-center.mb-2 > h3';



export class LsWorkLoginPage extends LoginPage {


    // ========================== Process Methods ========================== 



    loginWithCredentials = async (): Promise<void> => {
        console.log('Login with credentials')

        await this.page.fill(txtEmail, "testy.g.tester@email.com");
        await this.page.fill(txtPassword, "Password10!");
        await this.page.click(btnSignIn);
        await this.page.waitForTimeout(1000);
    }

    groupSearchByGroupNumber = async (): Promise<void> => {
        console.log('Group search by group number')

        await this.page.fill(txtSearch, '111452');
        await this.page.click(searchBtn);
        await this.page.waitForTimeout(1000);
    }

    // ========================== Navigate Methods ==========================

    navigateToLsAtWork = async (): Promise<void> => {
        console.log("'https://login.dev-shieldatwork.com/login?app=work&impact=Low&path=%2f'")
        await this.page.goto(url);

    }
    // ========================== Click Methods ========================== 


    // ========================== Assertion Methods ========================== 
    // Verify that the group is displayed on the group management page
    assertTextGroup = async (): Promise<void> => {
        console.log('Group name is dispalyed')
        await this.page.waitForSelector(groupTxt);
        const locator = this.page.locator(groupTxt);
        await expect(locator).toContainText('Barry University', { timeout: 10000 });

    }


}