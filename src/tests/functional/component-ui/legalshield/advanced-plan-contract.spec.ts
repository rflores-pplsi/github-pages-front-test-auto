import { test, expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import RegionsUtils from '../../../../utils/regions.utils';

RegionsUtils.usStates
  .filter((region) => region.name)
  .forEach((regionUnderTestObject) => {
    // Functional test for LegalShield Advanced Plan contract PDF
    test(`Advanced plan contract PDF opens and is readable for ${regionUnderTestObject.name} @regression`, async ({ page, context }) => {
      // 1. Navigate to the coverage and pricing page
      await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/personal-plan/coverage-and-pricing?regionChange=true`);

      test.step(`Select region ${regionUnderTestObject.abbrv} from popup selector and reload page`, async () => {
        const regionSelector = page.locator('select[name="locationModalRegion"]');
        await regionSelector.selectOption(regionUnderTestObject.abbrv);
        // click button with Update Region text
        await page.getByRole('button', { name: 'Update Region' }).click();
      });

      // 2. Dismiss privacy banner if present
      const privacyBanner = page.locator('#ketch-consent-banner');
      await privacyBanner.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {
        // If the privacy banner is not visible, we can continue
      }); 
      // get the continue button from inside privacy banner container
      const privacyContinue = privacyBanner.locator('button', { hasText: 'Continue' });
      if (await privacyContinue.isVisible()) {
        await privacyContinue.click();
      }

      // // 2. Dismiss chat widget if present
      // const chatWidget = page.getByRole('button', { name: /open-chat-widget/i });
      // if (await chatWidget.isVisible()) {
      //   await chatWidget.click();
      //   const minimizeChat = page.getByRole('button', { name: /minimize-chat-widget/i });
      //   if (await minimizeChat.isVisible()) {
      //     await minimizeChat.click();
      //   }
      // } // TODO: Pull out and create single test. QAOPS-1264

      // 3. Add Advanced product to the cart
      await page.locator('div').filter({ hasText: /^\$39\.95\/mo\.Add to cart$/ }).getByLabel('Add to cart Advanced plan').click();
      const page1Promise = page.waitForEvent('popup');

      // 4. Locate the Advanced product in the cart drawer
      // Drilldown: Find the cart drawer by navigating from the nav[role="navigation"] to the product title
      const cartDrawer = page.locator('.EZDrawer__container .CartOrderSummary #container .flex-1 > p:text("ADVANCED LEGAL PLAN")');
      await expect(cartDrawer).toBeVisible({ timeout: 10000 });

      // 5. Click on View Contract
      // This will open the contract PDF in a new tab and
      // Wait for the new tab to open
      const [pdfPage] = await Promise.all([context.waitForEvent('page'), page.getByRole('link', { name: /View Contract/i }).click()]);

      // 6. Ensure a readable PDF is opened in another tab
      await pdfPage.waitForTimeout(2000); // wait for navigation
      // Switch to the new tab and check for the words '404' in the content
      const pdfContent = await pdfPage.content();
      expect(pdfContent).not.toMatch(/404/i);

      // Close the PDF tab
      await pdfPage.close();
    });
  });

  /** <nav role="navigation" id="EZDrawer__container9nu2ef" class="EZDrawer__container DrawerCart" style="z-index: 300; transition-duration: 500ms; top: 0px; right: 0px; transform: translate3d(100%, 0px, 0px); width: 50%; height: 100vh;"><div class=""><div class=""><div class="flex flex-col h-dvh"><div class="border-b-[1px] border-b-gray-300 border-0 border-solid px-[20px] pt-[24px] pb-[16px] md:px-[32px]  "><div class="flex justify-between items-start align-top"><div class="text-xl leading-6 md:text-[25px] md:leading-7 font-bold ">Cart</div><div class="text-xl leading-6 md:text-[25px] md:leading-7 hover:cursor-pointer mt-[-5px]"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.00002 5.5858L12.2929 0.292893C12.6835 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0977 0.683417 14.0977 1.31658 13.7071 1.70711L8.41423 7.00002L13.7071 12.2929C14.0976 12.6834 14.0976 13.3165 13.7071 13.7071C13.3165 14.0976 12.6834 14.0976 12.2929 13.7071L7.00002 8.41423L1.70711 13.7071C1.31658 14.0977 0.683417 14.0977 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6835 0.292893 12.2929L5.5858 7.00002L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#0A0A0A"></path></svg></div></div></div><div class="grow" style="overflow: auto scroll;"><div class="p-[20px] md:p-[32px] pb-[40px] "><div class="CartOrderSummary fade-in"><div id="container"><div class="space-y-4 mb-6"><div><div class="flex justify-between items-start"><div class="flex-1 mr-3"><p class="text-sm font-normal uppercase">ADVANCED LEGAL PLAN</p><div class="whitespace-nowrap"><a class="no-underline text-xs text-[8px] text-[#737373] mt-1 hover:underline" href="#">View details</a><span class="text-xs text-[8px] text-[#737373]"> | </span><a class="no-underline text-xs text-[8px] text-[#737373] mt-1 hover:underline" href="http://contracts.legalshield.com/contracts/LSKSALP24.pdf" target="_blank" rel="noopener noreferrer">View contract</a></div></div><div class="flex items-start"><div class="text-right mr-3"><p class="text-base font-semibold">$39.95</p></div><span class="cursor-pointer hover:opacity-70" data-product-shortcode="LP24D2" data-product-id="4267002"><div class="w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><title>Remove item</title><path fill-rule="evenodd" clip-rule="evenodd" d="M10.968 2H13.032C13.4706 1.99999 13.8491 1.99998 14.1624 2.02135C14.4922 2.04386 14.8221 2.09336 15.1481 2.22836C15.8832 2.53288 16.4671 3.11693 16.7715 3.85194C16.9065 4.1778 16.9561 4.50766 16.9786 4.83752C16.9822 4.88987 16.9851 4.94404 16.9876 5H20C20.5523 5 21 5.44772 21 6C21 6.55229 20.5523 7 20 7H19L19 17.8411C19 18.3671 19 18.821 18.9696 19.1949C18.9373 19.5902 18.8661 19.9835 18.6732 20.362C18.3854 20.927 17.9257 21.3856 17.3618 21.673C16.9835 21.8657 16.5904 21.9371 16.1951 21.9694C15.8205 22 15.3657 22 14.8384 22H9.16208C8.63472 22 8.17973 22 7.80496 21.9694C7.40959 21.9371 7.01623 21.8658 6.63781 21.673C6.07317 21.3853 5.61452 20.9264 5.32698 20.362C5.13418 19.9836 5.06287 19.5904 5.03057 19.1951C4.99997 18.8205 4.99998 18.3657 5 17.8385L5 7H4C3.44772 7 3 6.55229 3 6C3 5.44772 3.44772 5 4 5H7.01233C7.01481 4.94407 7.01778 4.88993 7.02135 4.83761C7.04385 4.50778 7.09336 4.17787 7.22836 3.85194C7.53275 3.11707 8.11639 2.53294 8.85169 2.22836C9.17766 2.09334 9.50766 2.04385 9.8375 2.02135C10.1508 1.99998 10.5294 1.99999 10.968 2ZM9.015 5H14.985C14.9844 4.99118 14.9838 4.98247 14.9832 4.97385C14.9677 4.74587 14.941 4.65898 14.9238 4.6173C14.8222 4.37219 14.6276 4.17758 14.3827 4.07612C14.3411 4.05888 14.2542 4.03227 14.0262 4.01671C13.7893 4.00054 13.4796 4 13 4H11C10.5204 4 10.2107 4.00054 9.97362 4.01671C9.7455 4.03227 9.65864 4.0589 9.61706 4.07612C9.37225 4.17752 9.17771 4.37205 9.07612 4.6173C9.05888 4.65892 9.03227 4.74575 9.01671 4.97375C9.01612 4.9824 9.01555 4.99115 9.015 5ZM7 7V17.8C7 18.3766 7.00078 18.7488 7.02393 19.0322C7.04612 19.3039 7.0838 19.4046 7.10899 19.454C7.20494 19.6424 7.35778 19.7952 7.54579 19.891C7.59519 19.9161 7.69598 19.9538 7.96782 19.9761C8.25127 19.9992 8.62367 20 9.2002 20H14.8002C15.3767 20 15.7489 19.9992 16.0321 19.9761C16.3036 19.9539 16.4043 19.9162 16.4538 19.891C16.6425 19.7948 16.7956 19.6417 16.8912 19.454C16.9164 19.4047 16.954 19.3041 16.9762 19.0324C16.9993 18.7489 17 18.3767 17 17.8V7H7ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z" fill="#0A0A0A"></path></svg></div></span></div></div></div><div class="border-t-[0.5px] border border-gray-300 mb-6 border-solid"></div><div class="space-y-3"><div class="flex justify-between items-baseline text-sm"><p>Monthly total</p><p class="font-semibold">$39.95/mo</p></div><div class="flex justify-between items-baseline text-base font-bold"><p>Total due today</p><p>$39.95</p></div></div></div></div></div></div></div><div class="border-t border-solid border-gray-300 border-0"><div class="flex flex-col gap-8 w-100 items-center px-[20px] pb-[24px] pt-[16px] md:px-[0px] md:pt-[24px] md:pb-[32px]  bg-[#FFFFFF]"><button class="px-[20px] py-[10px] rounded-lg text-white font-semibold min-w-[60%] text-center bg-purple-600" aria-disabled="false" data-testid="drawer-button"><div class="flex justify-center gap-3">Checkout</div></button><div class="text-purple-600 font-semibold cursor-pointer">Continue shopping</div></div></div></div></div></div></nav> */
