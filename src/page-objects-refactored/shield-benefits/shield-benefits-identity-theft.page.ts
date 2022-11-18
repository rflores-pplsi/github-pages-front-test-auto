import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const BTN_APP_STORE = '.lsux-grid.container a:nth-child(1) > img';
const URL_GROUP = 'https://www.uat-shieldbenefits.com/nnidstest3';
const TXT_SEARCH = '[placeholder="Search"]';
const BTN_SEARCH_GROUP = '.lsux-button--primary';
const BTN_EDIT = '.group-item-controls > div:nth-child(3) > a > div > img';
const BTN_COPY_LINK = '.lsux-button:nth-child(3) > .lsux-text--description';
const TAB_IDENTITY_THEFT = '//*[@id="root"]/div/nav/div/div/ul/li[1]/a';
const TXT_GROUP_INFO = '[class="group-item-info"]';
const TXB_NEW_GROUP_URL_ID = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const BTN_SIGN_IN = '[id="signedout"]';
const LNK_APP_STORE = '.lsux-grid.container  a:nth-child(1) > img';
const BTN_BACK_TO_TOP = 'main > div > div > button > span';
const BTN_LANGUAGE_DROP_DOWN = 'p.dropBtn';
const OPC_ESPANOL_US = '.lsux-col.col.four.leftWrapper > div > ul > li.langSwitcher > div > div > ul > li:nth-child(2)';
const LNK_MEMBER_PERKS = 'section.memberperksWrapper  div:nth-child(1) > div > p > a';

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
    await this.page.fill(TXT_SEARCH, group);
    // Click on Group Search button
    await this.clickOnElement(BTN_SEARCH_GROUP);
    // Confirm search was successful
    await this.page.waitForSelector(TXT_GROUP_INFO);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.clickOnElement(BTN_COPY_LINK);
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
    const valNewGroupURL = await this.page.getAttribute(TXB_NEW_GROUP_URL_ID, value);
    await this.page.waitForTimeout(1000);
    await this.page.goto(URL_GROUP + valNewGroupURL);
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
   * @memberof ShieldBenefitsIdentityTheftPage
   */
  navigateToGroupEnrollmentIdentityTheftPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.navigateToGroupEnrollmentSmallBusinessPage');
    await this.page.goto(URL_GROUP);
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickBtnEditGroup');
    // Click on Edit button
    await this.clickOnElement(BTN_EDIT);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickBtnSignIn');
    // Click on Sign In button
    await this.clickOnElement(BTN_SIGN_IN);
  };

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickAppStoreLink');
    // Click on AppStore link
    await this.clickOnElement(LNK_APP_STORE);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickAppStoreLink');
    // Click on Back to top button
    await this.clickOnElement(BTN_BACK_TO_TOP);
  };

  clickLanguageDropDown = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickLanguageDropdown');
    // Click on Language Dropdown
    await this.clickOnElement(BTN_LANGUAGE_DROP_DOWN);
  };

  clickLnkMemberPerks = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.clickLnkMemberPerks');
    // Click on Member Perks link
    await this.clickOnElement(LNK_MEMBER_PERKS);
  };

  selectSpanishLanguage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.selectSpanishLanguage');
    // Select Spanish US language from drop down
    await this.clickOnElement(OPC_ESPANOL_US);
  };

  // ========================== Assertion Methods ==========================

  assertShieldBenefitsIdentityTheftPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.assertShieldBenefitsIdentityTheftPage');
    // Verify that Identity Theft Page is displayed for 99638 group
    await this.assertElementIsVisible(TAB_IDENTITY_THEFT);
  };

  assertSignInButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.assertSignInButtonIsDisplayed');
    // Confirm Sign In button is displayed
    await this.assertElementIsVisible(BTN_SIGN_IN);
  };

  assertAppStoreButtonISDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage.assertAppStoreButtonIsDisplayed');
    // Confirm App store button is displayed
    await this.assertElementIsVisible(BTN_APP_STORE);
  };

  assertIniciarSesionTranslation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdentityTheftPage. assertIdentityTheftTabSpanishTranslation');
    // Verify after clicking on Spanish(US) the content is translated to Spanish
    const iniciar = await this.page.waitForSelector(BTN_SIGN_IN);
    console.log(iniciar.innerText());
    await this.assertElementContainsText(BTN_SIGN_IN, 'Iniciar Sesión');
  };
}
