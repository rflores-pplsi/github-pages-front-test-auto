import { LoginPage } from '../login/login.page';

// Selectors  
let imgSmallLogo: string = '#lsdsSmallLogoId';
let imgLargeLogo: string = '#lsdsLargeLogoId';
let btnHelp: string = '#helpButton';
let lnkSignIn: string = '#signedout';
    
export class StatusHeaderPage extends LoginPage {
  
// Click Methods

clickSignIn = async (): Promise<void> => {
  console.log(" - statusHeaderPage.clickSignIn");    
  // Click on Sign In link
  await this.clickOnElement(lnkSignIn);
  // Wait for page to finish loading
  await this.page.waitForLoadState('load');  
}
  
}