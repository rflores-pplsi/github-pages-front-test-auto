import { expect } from '@playwright/test';
import { LoginPage } from './login.page';

// ========================== Selectors ==========================
const LNK_CUSTOMER_SERVICE = '#root :text("1-800-654-7757")';
const LNK_ASSOCIATE_SUPPORT = '#root :text("580-436-7424")';

/**
 * @export
 * @class LoginForgotEmailUsernamePage
 * @extends {LoginPage}
 */
export class LoginForgotEmailUsernamePage extends LoginPage {
  // ========================== Process Methods ==========================

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================

  assertSupportNumbers = async (): Promise<void> => {
    console.log(' - loginForgotEmailUsernamePage.assertSupportNumbers_LoginForgotEmailOrUsernamePage');
    // Confirm that the Customer Service phone number is displayed
    expect(await this.page.isVisible(LNK_CUSTOMER_SERVICE)).toBeTruthy();
    // Confirm that the Associate Support phone number is displayed
    expect(await this.page.isVisible(LNK_ASSOCIATE_SUPPORT)).toBeTruthy();
  };
}
