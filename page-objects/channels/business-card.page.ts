
import { ChannelsHeaderPage } from '../../page-objects/channels/channels-header.page';
import UrlsUtils from '../../utils/urls.utils';
import { expect,Locator, Page } from '@playwright/test';
// ========================== Selectors ==================================

/**
 *
 *
 * @export
 * @class BusinessCard
 * @extends {ChannelsHeaderPage}
 */
export class BusinessCard extends ChannelsHeaderPage {
    // ========================== Process Methods ============================
    // ========================== Navigate Methods ===========================
    navigateToBusinessCardPage = async (): Promise<void> => {
        console.log(' - BusinessCard.navigateToBusinessCardPage');
        // Navigate to Business Solution  Page
        await this.navigateToPage(UrlsUtils.channelsUrls.businesscard.url);
        
      };
    // ========================== Click Methods ==============================
    // ========================== Assertion Methods ==========================
    assertPageTitle = async (): Promise<void> => {
        console.log(' - BusinessCard.assertPageTitle');
        const strTitle = 'Marketing Site Preferences';
        //expect.stringMatching( strTitle.match(this.page.title.toString()) );
        console.log(this.page.title())
      };
    
}
     