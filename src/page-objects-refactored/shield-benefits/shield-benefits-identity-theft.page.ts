import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const btnAppStore: string = '.lsux-grid.container a:nth-child(1) > img';
const urlGroup: string = 'https://www.uat-shieldbenefits.com/nnidstest3';
const txtSearch: string = '[placeholder="Search"]';
const btnSearchGroup: string = '.lsux-button--primary';
const btnEdit: string = '.group-item-controls > div:nth-child(3) > a > div > img';
const btnCopyLink: string = '.lsux-button:nth-child(3) > .lsux-text--description';
const tabIdentityTheft: string = '//*[@id="root"]/div/nav/div/div/ul/li[1]/a';
const txtGroupInfo: string = '[class="group-item-info"]';
const txbNewGroupURLId: string = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const btnSignIn: string = '[id="signedout"]';
const lnkAppStore: string = '.lsux-grid.container  a:nth-child(1) > img';
const btnBackToTop: string = 'main > div > div > button > span';
const btnLanguageDropDown: string = 'p.dropBtn';
const opcEspanolUS: string = '.lsux-col.col.four.leftWrapper > div > ul > li.langSwitcher > div > div > ul > li:nth-child(2)';
const lnkMemberPerks: string = 'section.memberperksWrapper  div:nth-child(1) > div > p > a';

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
    await this.page.goto(urlGroup);
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

  assertSignInButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.assertSignInButtonIsDisplayed');
    // Confirm Sign In button is displayed
    await this.assertElementIsVisible(btnSignIn);
  };

  assertAppStoreButtonISDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.assertAppStoreButtonIsDisplayed');
    // Confirm App store button is displayed
    await this.assertElementIsVisible(btnAppStore);
  };

  assertIniciarSesionTranslation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage. assertIdentityTheftTabSpanishTranslation');
    // Verify after clicking on Spanish(US) the content is translated to Spanish
    const iniciar = await this.page.waitForSelector(btnSignIn);
    console.log(iniciar.innerText());
    await this.assertElementContainsText(btnSignIn, 'Iniciar Sesión');
  };
}
