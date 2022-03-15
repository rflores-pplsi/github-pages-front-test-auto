//To get this page: 
//Okta login, V3 login, Checkout Personal Info Page, Payment Page, Confirmation Page
import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation-page';

// create instance of Page
let checkoutConfirmationPage:CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({page}) => {
    checkoutConfirmationPage = new CheckoutConfirmationPage(page);
    await checkoutConfirmationPage.navigateToPlanalyzerOktaLogin();
})

//Purchase Legal Plan for Oklahoma
test.only('Purchase Legal Plan for Oklahoma',async ({page}) =>{

await checkoutConfirmationPage.loginThroughOkta();  

})