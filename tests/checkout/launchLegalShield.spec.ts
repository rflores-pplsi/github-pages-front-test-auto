import { test } from '@playwright/test';
import { LaunchLegalShieldPage } from '../../page-objects/checkout/launchLegalShield.page';

// create instance of Page
let launchLegalShield:LaunchLegalShieldPage;

// Setup environment before each test
test.beforeEach(async ({page}) => {
launchLegalShield = new LaunchLegalShieldPage(page)

await launchLegalShield.goTo();


})
// Start your business test
test('Start your business button',async ({page}) =>{

await launchLegalShield.checkoutLegalShieldLoginPage();   

})