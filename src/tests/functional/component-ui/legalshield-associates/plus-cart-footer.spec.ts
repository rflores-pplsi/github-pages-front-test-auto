import { expect } from '@playwright/test';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('Legalshield Associate - Cart Footer: ', () => {
  test(`Click continue in cart footer and get redirected to cartbuilder @legalshieldassociatesplus-component`, async ({
    page,
    legalshieldAssociateService,
  }) => {
    console.log(`Test Case: Click Get a Plan button to add plan to cart`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Click Continue Button`, async () => {
      await legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer.click();
    });
    await test.step(`Verify Cart Service reached`, async () => {
      expect(page).toHaveURL(new RegExp('cart'));
    });
  });
});
