import { expect } from '@playwright/test';        
import urlsUtils from '../../utils/urls.utils';   
import { LsWorkLoginPage } from '../shield-at-work/shield-at-work-login.page'; 

// ========================== Selectors ==================================
let url = urlsUtils.legalshieldUrls.shieldAtWork.url;
let txtSearch = '[placeholder="Search by name or group number"]';
let btnSearch = '[id="searchButton"]';
let txtGroup = '#root  .lsux-container--flex-items-center.mb-2 > h3';
let btnViewGroup = '[class="lsux-button  lsux-button--standard      ml-4"]';
let txtAccountTab = '.lsux-content  div.lsux-tab.active  h4';
let txtCompanyInformation = 'div:nth-child(2) > div:nth-child(1) > div.lsux-container.lsux-container--flexbox h3';
let txtAvaiablePlanofferings = '.lsux-col._3xFlevALZd1DdNKVRhaliI > div > h3';
let txtBusinessSolutions = '[id="lsdsTitle"]';




export class ShieldAtWorkAccountTab extends LsWorkLoginPage {

    // ========================== Process Methods ============================
    groupSearchByGroupNumber = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.groupSearchByGroupNumber")
        // Type in the search field the group number
        await this.page.fill(txtSearch, '111452');
        // Click on search button
        await this.page.click(btnSearch);
        // Wait for the group name is displayed
        await this.page.waitForSelector(txtGroup);
    }
    // ========================== Click Methods ============================== 

    clickViewGroup = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.verifyAccountInformation")
        // Click on View Group button 
        await this.page.click(btnViewGroup);
        //await this.page.waitForSelector(txtAccountTab);

    }

    // ========================== Navigate Methods ===========================

    navigateToShieldAtWorkAccountTab = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.navigateToShieldAtWorkAccountTab")
        // Navigate to Url 
        await this.page.goto(url);
        // Login to ShieldAtWork
        await this.loginWithCredentials();

    }

    // ========================== Assertion Methods ==========================

    assertAccountInformation = async (): Promise<void> => {
        console.log(" - accountShieldAtWorkPage.assertAccountInformation")
       // Verify that company information  is displayed
       await this.page.waitForSelector(txtCompanyInformation);
       const information = this.page.locator(txtCompanyInformation);
       await expect(information).toContainText('Company information');
       // Verify that available plan offerings is displayed
       await this.page.waitForSelector(txtAvaiablePlanofferings);
       const locator = this.page.locator(txtAvaiablePlanofferings);
       await expect(locator).toContainText('Available plan offerings');
       //Verify that Business Solutions text is displayed
       await this.page.waitForSelector(txtBusinessSolutions);
       const text = this.page.locator(txtBusinessSolutions);
       await expect(text).toContainText('Business Solutions');
        
        
    }

}
