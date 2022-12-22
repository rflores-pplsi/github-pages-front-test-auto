import { BrowserContext, Locator, Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class AccountsLocatorsPage
 */
export class AccountsLocatorsPage {
  readonly context: BrowserContext;
  protected page: Page;
  readonly commonAccountsHeader: Locator;
  // base
  readonly baseLocLargeLogo: Locator;
  readonly baseLocHelpButton: Locator;
  readonly baseLocHelpDropDown: Locator;
  readonly baseLocNameDropdown: Locator;
  readonly baseLocNameDropdownMyProductsLink: Locator;
  readonly baseLocNameDropdownMyAccountLink: Locator;
  readonly baseLocNameDropdownSignOutLink: Locator;
  readonly baseLocHomeLink: Locator;
  readonly baseLocProfileLink: Locator;
  readonly baseLocPaymentsLink: Locator;
  readonly baseLocSecurityLink: Locator;
  readonly baseLocMultifactorLink: Locator;
  readonly baseLocResourcesLink: Locator;
  readonly baseLocPreferencesLink: Locator;
  readonly baseLocTermsOfServiceLink: Locator;
  readonly baseLocPrivacyPolicyLink: Locator;
  readonly baseLocLegalLink: Locator;
  // home
  // profile
  readonly profileLocDateOfBirthEditButton: Locator;
  readonly profileLocPhoneNumbersEditButton: Locator;
  readonly profileLocEmailAddressesEditButton: Locator;
  readonly profileLocLanguagePreferencesEditButton: Locator;
  readonly profileLocDateOfBirthInput: Locator;
  readonly profileLocCancelButton: Locator;
  readonly profileLocSaveButton: Locator;
  // profile-preferred-name
  readonly profilePreferredNameLocPreferredNameInput: Locator;
  readonly profilePreferredNameLocCancelButton: Locator;
  readonly profilePreferredNameLocSaveButton: Locator;
  // profile-title
  readonly profileTitleLocTitleInput: Locator;
  readonly profileTitleLocCancelButton: Locator;
  readonly profileTitleLocSaveButton: Locator;
  // profile-pronouns
  readonly profilePronounsLocPronounsInput: Locator;
  readonly profilePronounsLocCancelButton: Locator;
  readonly profilePronounsLocSaveButton: Locator;
  // profile-birth
  readonly profileBirthLocDateOfBirthInput: Locator;
  readonly profileBirthLocCancelButton: Locator;
  readonly profileBirthLocSaveButton: Locator;
  // profile-phone
  readonly profilePhoneLocAddButton: Locator;
  readonly profilePhoneLocDoneButton: Locator;
  readonly profilePhoneLocPhoneNumberInput: Locator;
  readonly profilePhoneLocPhoneTypeSelect: Locator;
  readonly profilePhoneLocPhoneCancelButton: Locator;
  readonly profilePhoneLocPhoneSaveButton: Locator;
  // profile-email
  readonly profileEmailLocAddButton: Locator;
  readonly profileEmailLocEmailAddressInput: Locator;
  readonly profileEmailLocDoneButton: Locator;
  readonly profileEmailLocCancelButton: Locator;
  readonly profileEmailLocSaveButton: Locator;
  // profile-language-preferences
  readonly profileLanguagePreferencesLocLanguagePreferencesSelect: Locator;
  readonly profileLanguagePreferencesLocPreferencesDoneButton: Locator;
  // payments
  // security
  readonly securityLocEditSignInEmailAddressButton: Locator;
  readonly securityLocEditPasswordButton: Locator;
  // security-email
  readonly securityLocEmailDoneButton: Locator;
  // security-password
  readonly securityLocPasswordPasswordInput: Locator;
  readonly securityLocPasswordCancelButton: Locator;
  readonly securityLocPasswordSaveButton: Locator;
  // mfa
  readonly mfaLocExpandMfaHelpChevron: Locator;
  readonly mfaLocCollapseMfaHelpChevron: Locator;
  readonly mfaLocAddSmsButton: Locator;
  readonly mfaLocAddAuthenticatorButton: Locator;
  // resources
  readonly resourcesLocFormsButton: Locator;
  readonly resourcesLocMemberPerksButton: Locator;
  // preferences
  readonly preferencesLocLegalServicesNewsAndProductEducationToggle: Locator;
  readonly preferencesLocIdentityServicesNewAndProductEducationToggle: Locator;
  readonly preferencesLocAccountsSurveyAndFeedbackToggle: Locator;
  readonly preferencesLocAccountsPromotionsToggle: Locator;
  readonly preferencesLocTextMessagesToggle: Locator;

  /**
   * @param {BrowserContext} context
   * @param {Page} page
   * @class CheckoutLocatorsPage
   */
  constructor(context: BrowserContext, page: Page) {
    this.context = context;
    this.page = page;
    this.commonAccountsHeader = this.page.locator('//h2');
    // base
    this.baseLocLargeLogo = this.page.locator('#lsdsLargeLogoId');
    this.baseLocHelpButton = this.page.locator('#helpButton');
    this.baseLocHelpDropDown = this.page.locator('#helpDropdown');
    this.baseLocNameDropdown = this.page.locator('#myButton');
    this.baseLocNameDropdownMyProductsLink = this.page.locator('//a[contains(.,"My Products")]');
    this.baseLocNameDropdownMyAccountLink = this.page.locator('//a[contains(.,"My Account")]');
    this.baseLocNameDropdownSignOutLink = this.page.locator('//a[contains(.,"Sign out")]');
    this.baseLocHomeLink = this.page.locator('//h2');
    this.baseLocProfileLink = this.page.locator('//a[contains(.,"Profile")]');
    this.baseLocPaymentsLink = this.page.locator('//a[contains(.,"Payments")]');
    this.baseLocSecurityLink = this.page.locator('//a[contains(.,"Security")]');
    this.baseLocMultifactorLink = this.page.locator('//a[contains(.,"Multifactor")]');
    this.baseLocResourcesLink = this.page.locator('//a[contains(.,"Resources")]');
    this.baseLocPreferencesLink = this.page.locator('//a[contains(.,"Preferences")]');
    this.baseLocTermsOfServiceLink = this.page.locator('a:has-text("Terms of Service")');
    this.baseLocPrivacyPolicyLink = this.page.locator('a:has-text("Privacy Policy")');
    this.baseLocLegalLink = this.page.locator('a:has-text("Legal")');
    // home
    // profile
    this.profileLocDateOfBirthEditButton = this.page.locator(
      '//div[contains(@class, "lsux-container lsux-container--white        p-5") and contains(.,"Date of birth")]//button'
    );
    this.profileLocPhoneNumbersEditButton = this.page.locator(
      '//div[contains(@class, "lsux-container lsux-container--white        p-5") and contains(.,"Phone numbers")]//button'
    );
    this.profileLocEmailAddressesEditButton = this.page.locator(
      '//div[contains(@class, "lsux-container lsux-container--white        p-5") and contains(.,"Email addresses")]//button'
    );
    this.profileLocLanguagePreferencesEditButton = this.page.locator(
      '//div[contains(@class, "lsux-container lsux-container--white        p-5") and contains(.,"Language preferences")]//button'
    );
    this.profileLocDateOfBirthInput = this.page.locator('#fcbirthDate');
    this.profileLocCancelButton = this.page.locator('button:has-text("Cancel")');
    this.profileLocSaveButton = this.page.locator('button:has-text("Save")');
    // profile-preferred-name
    this.profilePreferredNameLocPreferredNameInput = this.page.locator('#fcbirthDate');
    this.profilePreferredNameLocCancelButton = this.page.locator('button:has-text("Cancel")');
    this.profilePreferredNameLocSaveButton = this.page.locator('button:has-text("Save")');
    // profile-title
    this.profileTitleLocTitleInput = this.page.locator('#fctitle');
    this.profileTitleLocCancelButton = this.page.locator('button:has-text("Cancel")');
    this.profileTitleLocSaveButton = this.page.locator('button:has-text("Save")');
    // profile-pronouns
    this.profilePronounsLocPronounsInput = this.page.locator('#fcpronouns');
    this.profilePronounsLocCancelButton = this.page.locator('button:has-text("Cancel")');
    this.profilePronounsLocSaveButton = this.page.locator('button:has-text("Save")');
    // profile-birth
    this.profileBirthLocDateOfBirthInput = this.page.locator('#fcbirthDate');
    this.profileBirthLocCancelButton = this.page.locator('button:has-text("Cancel")');
    this.profileBirthLocSaveButton = this.page.locator('button:has-text("Save")');
    // profile-phone
    this.profilePhoneLocAddButton = this.page.locator('//button[contains(.,"Add")]');
    this.profilePhoneLocDoneButton = this.page.locator('//button[contains(.,"Done")]');
    this.profilePhoneLocPhoneNumberInput = this.page.locator('#fcphoneNumber');
    this.profilePhoneLocPhoneTypeSelect = this.page.locator('#fcphoneType');
    this.profilePhoneLocPhoneCancelButton = this.page.locator('button:has-text("Cancel")');
    this.profilePhoneLocPhoneSaveButton = this.page.locator('button:has-text("Save")');
    // profile-email
    this.profileEmailLocAddButton = this.page.locator('//button[contains(.,"Add")]');
    this.profileEmailLocEmailAddressInput = this.page.locator('#fcemail');
    this.profileEmailLocDoneButton = this.page.locator('//button[contains(.,"Done")]');
    this.profileEmailLocCancelButton = this.page.locator('button:has-text("Cancel")');
    this.profileEmailLocSaveButton = this.page.locator('button:has-text("Save")');
    // profile-language-preferences
    this.profileLanguagePreferencesLocLanguagePreferencesSelect = this.page.locator('//select[contains(@class,"lsux-select-container__select ")]');
    this.profileLanguagePreferencesLocPreferencesDoneButton = this.page.locator('//button[contains(.,"Done")]');
    // payments
    // security
    this.securityLocEditSignInEmailAddressButton = this.page.locator(
      '//div[contains(@class,"lsux-container lsux-container--white        p-5") and contains(.,"Sign In Email Addresses")]//button'
    );
    this.securityLocEditPasswordButton = this.page.locator(
      '//div[contains(@class,"lsux-container lsux-container--white        p-5") and contains(.,"Password")]//button'
    );
    // security-email
    this.securityLocEmailDoneButton = this.page.locator('//button[contains(.,"Done")]');
    // security-password
    this.securityLocPasswordPasswordInput = this.page.locator('#fcpassword');
    this.securityLocPasswordCancelButton = this.page.locator('button:has-text("Cancel")');
    this.securityLocPasswordSaveButton = this.page.locator('button:has-text("Save")');
    // multifactor
    this.mfaLocExpandMfaHelpChevron = this.page.locator('//img[contains(@alt,"nav_chevron_single_down.")]');
    this.mfaLocCollapseMfaHelpChevron = this.page.locator('//img[contains(@alt,"nav_chevron_single_up."")]');
    this.mfaLocAddSmsButton = this.page.locator('button:has-text("Add SMS")');
    this.mfaLocAddAuthenticatorButton = this.page.locator('button:has-text("Add Authenticator")');
    // resources
    this.resourcesLocFormsButton = this.page.locator('button:has-text("Forms")');
    this.resourcesLocMemberPerksButton = this.page.locator('button:has-text("Member Perks")');
    // preferences
    this.preferencesLocLegalServicesNewsAndProductEducationToggle = this.page.locator(
      '//div[contains(@class,"lsux-card shadow100-bottom ") and contains(.,"Legal services")]//button'
    );
    this.preferencesLocIdentityServicesNewAndProductEducationToggle = this.page.locator(
      '//div[contains(@class,"lsux-card shadow100-bottom ") and contains(.,"Identity services")]'
    );
    this.preferencesLocAccountsSurveyAndFeedbackToggle = this.page.locator(
      '//div[contains(@class,"lsux-card shadow100-bottom ") and contains(.,"Accounts")]//div[contains(@class,"lsux-container lsux-container--white  lsux-container--flexbox   lsux-container--flex-justify-space-between   my-4") and contains(.,"Surveys and feedback")]//button'
    );
    this.preferencesLocAccountsPromotionsToggle = this.page.locator(
      '//div[contains(@class,"lsux-card shadow100-bottom ") and contains(.,"Accounts")]//div[contains(@class,"lsux-container lsux-container--white  lsux-container--flexbox   lsux-container--flex-justify-space-between   my-4") and contains(.,"Promotions")]//button'
    );
    this.preferencesLocTextMessagesToggle = this.page.locator(
      '//div[contains(@class,"lsux-card shadow100-bottom ") and contains(.,"Text Messages")]//div[contains(@class,"lsux-container lsux-container--white  lsux-container--flexbox   lsux-container--flex-justify-space-between   my-4") and contains(.,"Receive text messages from PPLSI")]//button'
    );
  }
}
