import { test as base } from '@playwright/test';
import { IdshieldService } from '../page-objects/marketing-sites/idshield/idshield-service';
import { GroupsAffiliatedService } from '../page-objects/groups-affiliated/groups-affiliated-service';
import { LegalshieldService } from '../page-objects/marketing-sites/legalshield/legalshield.service';
import { LegalshieldAssociateService } from '../page-objects/legalshield-associate/legalshieldassociate.service';
import { PplsiService } from '../page-objects/pplsi/pplsi-service';
import { CommonCheckoutService, CommonLoginService } from '@legalshield/frontend-automation-commons';
import { CheckoutService } from '../page-objects/checkout/checkout-service';
import { ShieldBenefitsService } from '../page-objects/shieldbenefits/shieldbenefits-service';
import { NewCheckoutService } from '../page-objects/new-checkout/new-checkout-service';
import { GlobalFooterComponent } from '../page-objects/global-components/global-footer.component';
import { GlobalHeaderComponent } from '../page-objects/global-components/global-header.component';
import { AssociateOfficeService } from '../page-objects/associate-office/associate-office.service';
import { AccountService } from '../page-objects/account/account.service';
import { PurchaseService } from '../page-objects/purchase/purchase.service';

export type FrontendUIFixture = {
  idshieldService: IdshieldService;
  groupsAffiliatedService: GroupsAffiliatedService;
  legalshieldService: LegalshieldService;
  legalshieldAssociateService: LegalshieldAssociateService;
  pplsiService: PplsiService;
  shieldBenefitsService: ShieldBenefitsService;
  commonCheckoutService: CommonCheckoutService;
  checkoutService: CheckoutService;
  commonHeaderComponent: GlobalHeaderComponent;
  commonFooterComponent: GlobalFooterComponent;
  commonLoginService: CommonLoginService;
  newCheckoutService: NewCheckoutService;
  associateOfficeService: AssociateOfficeService;
  accountService: AccountService;
  purchaseService: PurchaseService;
  isHeadless: boolean;
};

export const test = base.extend<FrontendUIFixture>({
  //addends ?qatester=automation query param to all goto urls, used for analytics filtering
  page: async ({ page }, use) => {
    const goto = page.goto.bind(page);
    async function modifiedGoto(
      url: string,
      options: Parameters<typeof page.goto>[1] = {}
    ) {
      const urlObj = new URL(url);
      urlObj.searchParams.set('qatester', 'automation');
      const updatedOptions: Parameters<typeof page.goto>[1] = {
        waitUntil: 'domcontentloaded',
        ...options,
      };
      return goto(urlObj.href, updatedOptions);
    }
    page.goto = modifiedGoto;
    await use(page);
    page.goto = goto;
  },
  //NOTE -> these classes are only instantiated when they are called
  associateOfficeService: async ({ page }, use) => {
    await use(new AssociateOfficeService(page));
  },
  commonCheckoutService: async ({ page, context }, use) => {
    await use(new CommonCheckoutService(context, page));
  },
  checkoutService: async ({ page }, use) => {
    await use(new CheckoutService(page));
  },
  commonFooterComponent: async ({ page, context }, use) => {
    await use(new GlobalFooterComponent(context, page));
  },
  commonHeaderComponent: async ({ page }, use) => {
    await use(new GlobalHeaderComponent(page));
  },
  commonLoginService: async ({ page }, use) => {
    await use(new CommonLoginService(page));
  },
  groupsAffiliatedService: async ({ page }, use) => {
    await use(new GroupsAffiliatedService(page));
  },
  idshieldService: async ({ page, context }, use) => {
    await use(new IdshieldService(page, context));
  },
  legalshieldService: async ({ page, context }, use) => {
    await use(new LegalshieldService(page, context));
  },
  legalshieldAssociateService: async ({ page, context }, use) => {
    await use(new LegalshieldAssociateService(page, context));
  },
  newCheckoutService: async ({ page, context }, use) => {
    await use(new NewCheckoutService(context, page));
  },
  pplsiService: async ({ page, context }, use) => {
    await use(new PplsiService(page, context));
  },
  shieldBenefitsService: async ({ page }, use) => {
    await use(new ShieldBenefitsService(page));
  },
  accountService: async ({ page }, use) => {
    await use(new AccountService(page));
  },
  purchaseService: async ({ page }, use) => {
    await use(new PurchaseService(page));
  },

  isHeadless: async ({ browser }, use) => {
  const isHeadless = (browser as any)["_options"]?.headless ?? true;
  await use(isHeadless);
},

});

export { expect } from '@playwright/test';
