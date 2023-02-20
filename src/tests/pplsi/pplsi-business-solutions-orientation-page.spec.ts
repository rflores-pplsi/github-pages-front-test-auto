import { expect, test } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { PplsiFooterComponent } from '../../page-objects/pplsi/pplsi-footer.component';

let pplsiFooterComponent: PplsiFooterComponent;

test.beforeEach(async ({ page }) => {
  await test.step(`Navigate to PPLSI Page`, async () => {
    page.goto(UrlsUtils.pplsiUrls.home.url);
    pplsiFooterComponent = new PplsiFooterComponent(page);
  });
});

test('User can navigate to Business Solutions Orientation page by clicking the Business Opportunity link in the PPLSI footer', async ({ page }) => {
  await test.step(`Click on the Business Opportunity link`, async () => {
    await pplsiFooterComponent.locBusinessOpportunityLink.click();
  });
  await test.step(`Assert the Business Solutions Orientation page URL`, async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/'));
  });
});
