import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const urlAppStore = 'https://apps.apple.com/us/app/legalshield-law-firms-on-call/id924247236';
const urlGroup = 'https://www.dev-shieldbenefits.com/';
const urlMemberPerks = 'https://pslogin.perkspot.com/login?communityId=588';
const txtSearch = '[placeholder="Search"]';
const btnSearchGroup = '.lsux-button--primary';
const btnEdit = '.group-item-controls > div:nth-child(3) > a > div > img';
const btnCopyLink = '.lsux-button:nth-child(3) > .lsux-text--description';
const tabIdentityTheft = '//*[@id="root"]/div/nav/div/div/ul/li[1]/a';
const txtGroupInfo = '[class="group-item-info"]';
const txbNewGroupURLId = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const btnSignIn = '[id="signedout"]';
const lnkAppStore = '.lsux-grid.container a:nth-child(1) > img';
const btnBackToTop = 'main > div > div > button > span';
const btnLanguageDropDown = 'p.dropBtn';
const opcEspanolUS = '.lsux-col.col.four.leftWrapper > div > ul > li.langSwitcher > div > div > ul > li:nth-child(2)';
const lnkMemberPerks = 'section.memberperksWrapper  div:nth-child(1) > div > p > a';

/**
 * @export
 * @class ShieldBenefitsIdentityTheftPage
 * @extends {ShieldBenefitsIdentityTheftPage}
 */
export class ShieldBenefitsIdentityTheftPage extends OktaPage {
  // ========================== Process Methods ============================
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldBenefitsIdentityTheftPage
   */
  searchGroup = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.searchGroup');
    // Type in the search field group 99638
    await this.page.fill(txtSearch, group);
    // Click on Group Search button
    await this.clickOnElement(btnSearchGroup);
    // Confirm search was successful
    await this.page.waitForSelector(txtGroupInfo);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.clickOnElement(btnCopyLink);
    await this.page.waitForTimeout(1000);
  };

  // ========================== Navigate Methods ===========================
  /**
   *
   *
   * @param {string} value
   * @memberof ShieldBenefitsIdentityTheftPage
   */
  navigateToGroupEnrollmentGroupURLPage = async (value: string): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentGroupURLPage');
    // Click on Edit button
    await this.clickBtnEditGroup();
    // Verify after pasting url in another browser tab group is displayed
    const valNewGroupURL = await this.page.getAttribute(txbNewGroupURLId, value);
    await this.page.waitForTimeout(1000);
    await this.page.goto(urlGroup + valNewGroupURL);
  };

  navigateToGroupEnrollmentSearchPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentSearchPage');
    await this.page.goto(url);
    // Login through Okta page to be redirected to Group Enrollment Search Page
    await this.loginThroughOktaGroupEnrollment();
  };
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldBenefitsIdentityTheftPage
   */
  navigateToGroupEnrollmentIdentityTheftPage = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentSmallBusinessPage');
    await this.navigateToGroupEnrollmentSearchPage();
    await this.searchGroup(group);
    await this.navigateToGroupEnrollmentGroupURLPage('value');
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickBtnEditGroup');
    // Click on Edit button
    await this.clickOnElement(btnEdit);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickBtnSignIn');
    // Click on Sign In button
    await this.clickOnElement(btnSignIn);
  };

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickAppStoreLink');
    // Click on AppStore link
    await this.clickOnElement(lnkAppStore);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickAppStoreLink');
    // Click on Back to top button
    await this.clickOnElement(btnBackToTop);
  };

  clickLanguageDropDown = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickLanguageDropdown');
    // Click on Language Dropdown
    await this.clickOnElement(btnLanguageDropDown);
  };

  clickLnkMemberPerks = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickLnkMemberPerks');
    // Click on Member Perks link
    await this.clickOnElement(lnkMemberPerks);
  };

  selectSpanishLanguage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.selectSpanishLanguage');
    // Select Spanish US language from drop down
    await this.clickOnElement(opcEspanolUS);
  };

  // ========================== Assertion Methods ==========================

  assertShieldBenefitsIdentityTheftPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.assertShieldBenefitsIdentityTheftPage');
    // Verify that Identity Theft Page is displayed for 99638 group
    await this.assertElementIsVisible(tabIdentityTheft);
  };

  assertAccountsUrl = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.assertAccountsUrl');
    // Verify after clicking on Sign In button it redirects to Accounts
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.login.url + '/login?app=accounts&impact=Low&path=%2Fsign-in');
  };

  assertAppStoreUrl = async (): Promise<void> => {
    console.log(' -ShieldBenefitsIdentityTheftPage.assertAppStoreUrl');
    // Verify after clicking on App store link it redirects to the store site
    await expect(this.page).toHaveURL(urlAppStore);
  };

  assertIniciarSesionTranslation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage. assertIdentityTheftTabSpanishTranslation');
    // Verify after clicking on Spanish(US) the content is translated to Spanish
    const iniciar = await this.page.waitForSelector(btnSignIn);
    console.log(iniciar.innerText());
    await this.assertElementContainsText(btnSignIn, 'Iniciar Sesión');
  };

  assertMemberPerksUrl = async (): Promise<void> => {
    console.log(' -ShieldBenefitsIdentityTheftPage.assertMemberPerksUrl');
    // Verify after clicking on Member Perks link it redirects to the site
    await expect(this.page).toHaveURL(urlMemberPerks);
    await this.page.waitForLoadState('domcontentloaded');
  };
}
