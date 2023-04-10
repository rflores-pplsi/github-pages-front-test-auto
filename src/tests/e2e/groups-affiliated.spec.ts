import { expect, test } from '@playwright/test';
import { GroupsAffiliatedPage } from '../../page-objects-refactored/groups-affiliated.page';
import { GroupsAffiliatedAgentPage } from '../../page-objects-refactored/groups-affiliated-agent.page';

let groupsAffiliatedPage: GroupsAffiliatedPage;
let groupsAffiliatedAgentPage: GroupsAffiliatedAgentPage;

test.beforeEach(async ({ page }) => {
  groupsAffiliatedPage = new GroupsAffiliatedPage(page);
  groupsAffiliatedAgentPage = new GroupsAffiliatedAgentPage(page);
  test.slow();
});
test('Can reach checkout service from the Primerica affiliated groups page (market=en-US) @smoke', async ({ page }) => {
  console.log('Can reach checkout service from the Primerica affiliated groups page (market=en-US)');
  await test.step(`Navigate to primerica affiliated groups page`, async () => {
    await groupsAffiliatedPage.navigateToGroupsAffiliatedPage('primerica');
  });
  await test.step(`Select language and market`, async () => {
    await groupsAffiliatedPage.selectLanguageAndMarket('English (US)');
  });
  await test.step(`Enter Agent ID`, async () => {
    await groupsAffiliatedPage.fillAgentId('12345');
  });
  await test.step(`Click Submit button`, async () => {
    await groupsAffiliatedPage.locSubmitButton.click();
  });
  await test.step(`Navigate to idshield pricing and coverage page`, async () => {
    await groupsAffiliatedAgentPage.selectStateOrProvince('New York');
  });
  await test.step(`Assert navigation to classic checkout`, async () => {
    await expect(page).toHaveURL(new RegExp('checkout.legalshield'));
  });
});
