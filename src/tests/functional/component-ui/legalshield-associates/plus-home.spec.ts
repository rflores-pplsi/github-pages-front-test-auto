import { expect, Page, Response } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { headerTwoLinksData, headerThreeLinksData } from './plusHeaderLinks.data';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('Legalshield Associate - Header Menu:', () => {
  test.fixme(
    'Verify Click on Logo Returns User back to Home Page @legalshieldassociatesplus-component',
    async ({ page, legalshieldAssociateService }) => {
      console.log('Test Case: Verify Click on Logo Returns User back to Home Page ');
      await test.step(`Navigate to Legal Associate Plus page`, async () => {
        await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
      });
      await test.step('Navigate to how it works page', async () => {
        await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/personal-plan/how-it-works?lsaplus=true`);
      });
      await test.step('Click on Logo of Legalshield and IDshield', async () => {
        await legalshieldAssociateService.plusHeaderComponent.locHeaderLogo.click();
      });
      await test.step('Verify user is redirected to Home Page of lsa Plus Page', async () => {
        expect(page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`));
      });
    }
  );

  for (const testCase of headerTwoLinksData.filter((testCase) => testCase.disabled == false)) {
    test.skip(`${testCase.testCaseName} @legalshieldassociatesplus-component`, async ({ page, legalshieldAssociateService }) => {
      console.log(`Test Case: ${testCase.testCaseName}`);
      let response: Response;
      await test.step(`Navigate to lsa plus page`, async () => {
        await page.goto(`https://${testCase.associate}.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
      });
      await test.step(`Click on the ${testCase.secondLevelLink} link`, async () => {
        [response] = await Promise.all([
          page.waitForResponse((response) => response.url().includes(testCase.expectedUrl)),
          await legalshieldAssociateService.plusHeaderComponent.clickMenuLinkWithTwoLevels(testCase.firstLevelLink, testCase.secondLevelLink),
        ]);
      });
      await test.step('Verify URL and Response Status Code', async () => {
        await test.step(`Verify Status: 200`, async () => {
          expect.soft(response.status()).toBe(200);
          await page.goBack();
        });
      });
    });
  }

  for (const testCase of headerThreeLinksData.filter((testCase) => testCase.disabled == false)) {
    test.skip(`${testCase.testCaseName} @legalshieldassociatesplus-component`, async ({ page, legalshieldAssociateService }) => {
      console.log(`Test Case: ${testCase.testCaseName}`);
      let response: Response;
      await test.step(`Navigate to lsa plus page`, async () => {
        await page.goto(`https://${testCase.associate}.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
      });
      await test.step(`Click on the ${testCase.thirdLevelLink} link`, async () => {
        [response] = await Promise.all([
          page.waitForResponse((response) => response.url().includes(testCase.expectedUrl)),
          await legalshieldAssociateService.plusHeaderComponent.clickMenuLinkWithThreeLevels(
            testCase.firstLevelLink,
            testCase.secondLevelLink,
            testCase.thirdLevelLink
          ),
        ]);
      });
      await test.step('Verify URL and Response Status Code', async () => {
        await test.step(`Verify Status: 200`, async () => {
          expect.soft(response.status()).toBe(200);
        });
      });
    });
  }

  test('Verify Logo of Legalshield and IDshield is Displayed  @legalshieldassociatesplus-component', async ({
    page,
    legalshieldAssociateService,
  }) => {
    console.log('Test Case: Verify Logo of Legalshield and IDshield is Displayed ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Logo of Legalshield and IDshield is Displayed in Header', async () => {
      expect(legalshieldAssociateService.plusHeaderComponent.locHeaderLogo).toBeVisible;
    });
  });

  test('Click My Products from dropdown and go to Login Page @legalshieldassociatesplus-component', async ({ page, legalshieldAssociateService }) => {
    console.log('Test Case: Click My Products from dropdown and go to Login Page ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Click on My Products in the User Icon Dropdown Header', async () => {
      await legalshieldAssociateService.plusHeaderComponent.locUserIconDropdown.click();
      await legalshieldAssociateService.plusHeaderComponent.locUserMenuMyProductsLink.click();
    });
    await test.step('Verify user is redirected to Login Page', async () => {
      await expect(page).toHaveURL(new RegExp('login'));
    });
  });
});

test.describe('Legalshield Associate - Sticky Header: ', () => {
  test('Verify Phone Number in Business Card is in header @legalshieldassociatesplus-component', async ({ page, legalshieldAssociateService }) => {
    console.log('Test Case: Verify Phone Number in Business Card Info is displayed in header ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Associate Phone Number is Displayed ', async () => {
      expect(legalshieldAssociateService.plusStickyHeaderComponent.locAssociatePhoneNumber).toBeVisible;
    });
  });

  test('Verify Associate Name Displayed matches one in URL @legalshieldassociatesplus-component', async ({ page, legalshieldAssociateService }) => {
    console.log('Test Case: Verify Associate Name Displayed matches one in URL ');
    let formattedName: string;
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Get Formatted Display Name', async () => {
      formattedName = await legalshieldAssociateService.plusStickyHeaderComponent.getFormattedDisplayName();
    });
    await test.step('Verify Associate Name Displayed matches one in URL', async () => {
      expect(page.url()).toContain(formattedName);
    });
  });

  test('Verify Associate Image in Business Card Info is in header @legalshieldassociatesplus-component', async ({
    page,
    legalshieldAssociateService,
  }) => {
    console.log('Test Case: Verify Associate Image in Business Card Info is displayed in header ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Associate image is displayed in the header', async () => {
      expect(legalshieldAssociateService.plusStickyHeaderComponent.locAssociateImage).toBeVisible;
    });
  });
});

test.describe('Legalshield Associate - Hero Content: ', () => {
  test('Test Case: Test Case 1 @legalshieldassociatesplus-component', async ({ page, legalshieldAssociateService }) => {
    console.log('Test Case: Test Case 1');
  });

  test('Test Case: Test Case 2 @legalshieldassociatesplus-component', async ({ page, legalshieldAssociateService }) => {
    console.log('Test Case: Test Case 2');
  });
});

test.describe('Legalshield Associate - Membership Menu: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
  });
  test(`Click on All Memberships Button and verify the expected product cards @legalshieldassociatesplus-component`, async ({
    legalshieldAssociateService,
  }) => {
    console.log(`Test Case: Click on All Memberships Button and verify the expected product cards`);
    await test.step(`Click on All Memberships Button`, async () => {
      await legalshieldAssociateService.plusExplorerMembershipMenuComponent.clickMenuButton('All Memberships');
    });
    await test.step(`Verify expected product cards`, async () => {
      await legalshieldAssociateService.plusHomePage.assertDisplayedPlanNamesIncludeExpectedNames([
        'Business Builder',
        'Legal Plan Family',
        'IDShield Family',
        'IDShield Individual',
        'Small Business',
        'Associate',
        'Commercial Drivers Legal Plan',
        'Super Commercial Drivers Legal Plan',
      ]);
    });
  });

  test(`Click on LegalShield Plan Button and verify the expected product cards @legalshieldassociatesplus-component`, async ({
    legalshieldAssociateService,
  }) => {
    console.log(`Test Case: Click on LegalShield Plan Button and verify the expected product cards`);
    await test.step(`Click on LegalShield Plan Button`, async () => {
      await legalshieldAssociateService.plusExplorerMembershipMenuComponent.clickMenuButton('LegalShield');
    });
    await test.step(`Verify expected product cards`, async () => {
      await legalshieldAssociateService.plusHomePage.assertDisplayedPlanNamesIncludeExpectedNames(['Legal Plan Family']);
    });
  });

  test(`Click on IDShield Plan Button and verify the expected product cards @legalshieldassociatesplus-component`, async ({
    legalshieldAssociateService,
  }) => {
    console.log(`Test Case: Click on IDShield Plan Button and verify the expected product cards`);
    await test.step(`Click on IDShield Plan Button`, async () => {
      await legalshieldAssociateService.plusExplorerMembershipMenuComponent.clickMenuButton('IDShield');
    });
    await test.step(`Verify expected product cards`, async () => {
      await legalshieldAssociateService.plusHomePage.assertDisplayedPlanNamesIncludeExpectedNames(['IDShield Family', 'IDShield Individual']);
    });
  });

  test(`Click on Small Business Plan Button and verify the expected product cards @legalshieldassociatesplus-component`, async ({
    legalshieldAssociateService,
  }) => {
    console.log(`Test Case: Click on Small Business Plan Button and verify the expected product cards`);
    await test.step(`Click on Small Business Plan Button`, async () => {
      await legalshieldAssociateService.plusExplorerMembershipMenuComponent.clickMenuButton('Small Business');
    });
    await test.step(`Verify expected product cards`, async () => {
      await legalshieldAssociateService.plusHomePage.assertDisplayedPlanNamesIncludeExpectedNames(['Small Business']);
    });
  });

  test(`Click on Become an Associate Plan Button and verify the expected product cards @legalshieldassociatesplus-component`, async ({
    legalshieldAssociateService,
  }) => {
    console.log(`Test Case: Click on Become an Associate Plan Button and verify the expected product cards`);
    await test.step(`Click on Become an Associate Plan Button`, async () => {
      await legalshieldAssociateService.plusExplorerMembershipMenuComponent.clickMenuButton('Become an Associate');
    });
    await test.step(`Verify expected product cards`, async () => {
      await legalshieldAssociateService.plusHomePage.assertDisplayedPlanNamesIncludeExpectedNames(['Associate']);
    });
  });

  test(`Click on Commercial Drivers Plan Button and verify the expected product cards @legalshieldassociatesplus-component`, async ({
    legalshieldAssociateService,
  }) => {
    console.log(`Test Case: Click on Commercial Drivers Plan Button and verify the expected product cards`);
    await test.step(`Click on Commercial Drivers Plan Button`, async () => {
      await legalshieldAssociateService.plusExplorerMembershipMenuComponent.clickMenuButton('Commerical Drivers');
    });
    await test.step(`Verify expected product cards`, async () => {
      await legalshieldAssociateService.plusHomePage.assertDisplayedPlanNamesIncludeExpectedNames(['Commercial Drivers Legal Plan']);
    });
  });
});

test.describe('Legalshield Associate - Product Cards: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
  });

  test(`Plan Name Displays @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Verify Plan Name is Displayed for each card`);
    await test.step(`Verify Plan Name is Displayed for each card`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyProductCardsDisplayHeading();
    });
  });

  test(`Verify Cost Displayed for each card @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Verify Cost Displayed for each card`);
    await test.step(`Verify Cost Displayed for each card`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyProductCardsDisplayCosts();
    });
  });

  test(`Click play button to open movie modal @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click play button to open movie modal`);
    await test.step(`Click the Play button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Verify the movie modal displays`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
      expect(legalshieldAssociateService.plusMovieModalComponent.locMovieModalContainer).toBeVisible();
    });
  });

  test(`Click more details to open Plans page in new tab @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click more details to open Products and Benefits page in new tab`);
    let newPage: Page;
    await test.step(`Click more Details link to open plans page`, async () => {
      newPage = await legalshieldAssociateService.plusProductCardComponent.clickMoreDetailsLink('Legal Plan Family');
    });
    await test.step(`Verify Plans page opens in new tab`, async () => {
      await expect(newPage).toHaveURL(new RegExp('plans/legal'));
    });
  });

  test(`Click Get a Plan button to add plan to cart @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click Get a Plan button to add plan to cart`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Verify Button Text Changes and cart appears`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toBeVisible();
    });
  });

  test(`Click Added button to remove plan from cart @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click Added button to remove plan from art cart`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Click Added button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickAddedButton('Legal Plan Family');
    });

    await test.step(`Verify Button Text Changes and cart disappears`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyGetAPlanButtonIsVisible('Legal Plan Family');
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toBeHidden();
    });
  });

  test(`Click in card not on a link or button to add plan to cart @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click Hero Image to add plan to cart`);
    await test.step(`Click Hero Image`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickProductCardHeroImage('Legal Plan Family');
    });
    await test.step(`Verify Button Text Changes and cart appears`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toBeVisible();
    });
  });

  test(`Features available text displays @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Features available text displays`);
    await test.step(`VERIFY Features available text displays`, async () => {
      const featuresAvailableText = await legalshieldAssociateService.plusProductCardComponent.locFeaturesAvailableContainer.allInnerTexts();
      expect(featuresAvailableText).not.toBe('');
    });
  });

  test(`Add multiple plans and verify price-container @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Add multiple plans and verify price-container`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('IDShield Family');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('IDShield Individual');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Small Business');
    });
    await test.step(`Verify Button Text Changes and Verify Cart info`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toBeVisible();
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toContainText('4');
    });
  });
});

test.describe('Legalshield Associate - Testimonial Content: ', () => {
  test('Test Case: Verify Testimonial is Present on the Home Page  @legalshieldassociatesplus-component', async ({
    page,
    legalshieldAssociateService,
  }) => {
    console.log('Test Case: Verify Testimonial is Present on the Home Page ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Testimonial image is displayed on home page', async () => {
      expect(legalshieldAssociateService.plusTestimonialComponent.locTestimonialContainer).toBeVisible;
    });
  });
});

test.describe('Legalshield Associate - Movie Modal: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
  });

  test.fixme(`Clicking play on movie modal plays movie @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Clicking play on movie modal plays movie`);
    // video player broken on lsaplus at the moment
    await test.step(`Click the Play button to open modal`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Wait for movie modal to display`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
    });
    await test.step(`Click the video player play button to play video`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalPlayButton.click();
    });
    await test.step(`Verify movie has played some`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locVideoPlayerTimeCode1Second.waitFor();
      await legalshieldAssociateService.plusMovieModalComponent.assertVideoPlayerHasPlayed();
    });
  });

  test(`Click close on movie modal closes modal @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click play button to open movie modal`);
    await test.step(`Click the Play button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Wait for movie modal to display`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
    });
    await test.step(`Click movie modal close button`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalCloseButton.click();
    });
    await test.step(`Verify the movie modal disappears`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalCloseButton.waitFor({ state: 'hidden' });
      expect(legalshieldAssociateService.plusMovieModalComponent.locMovieModalCloseButton).toBeHidden();
    });
  });
});

test.describe('Legalshield Associate - Cart Footer: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
  });

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

test.describe('Legalshield Associate - Cart Footer: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
  });

  test(`Click Terms of Service link in global footer and open a new tab @legalshieldassociatesplus-component`, async ({ commonFooterComponent }) => {
    console.log(`Test Case: Click Terms of Service link in global footer and open a new tab`);
    let newTab: Page;
    await test.step(`Click Terms of Service link`, async () => {
      newTab = await commonFooterComponent.clickTermsOfServiceLink();
    });
    await test.step(`Verify new tab`, async () => {
      expect(newTab.url()).toContain('pplsi.com/terms-service');
    });
  });

  test(`Click Privacy Policy link in global footer and open a new tab @legalshieldassociatesplus-component`, async ({ commonFooterComponent }) => {
    console.log(`Test Case: Click Privacy Policy link in global footer and open a new tab`);
    let newTab: Page;
    await test.step(`Click Privacy Policy link`, async () => {
      newTab = await commonFooterComponent.clickPrivacyPolicyLink();
    });
    await test.step(`Verify new tab`, async () => {
      expect(newTab.url()).toContain('pplsi.com/privacy-policy');
    });
  });

  test(`Click Legal link in global footer and open a new tab @legalshieldassociatesplus-component`, async ({ commonFooterComponent }) => {
    console.log(`Test Case: Click Legal link in global footer and open a new tab`);
    let newTab: Page;
    await test.step(`Click Legal link`, async () => {
      newTab = await commonFooterComponent.clickLegalLink();
    });
    await test.step(`Verify new tab`, async () => {
      expect(newTab.url()).toContain('pplsi.com/disclaimer');
    });
  });
});
