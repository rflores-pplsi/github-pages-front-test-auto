/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */
import { test as base } from '@playwright/test';
import { IdshieldService } from '../page-objects/marketing-sites/idshield/idshield-service';
import { GroupsAffiliatedService } from '../page-objects/groups-affiliated/groups-affiliated-service';
import { LegalshieldService } from '../page-objects/marketing-sites/legalshield/legalshield-service';
import { LegalshieldAssociateService } from '../page-objects/legalshield-associate/legalshieldassociate-service';
import { PplsiService } from '../page-objects/pplsi/pplsi-service';
import { CommonCheckoutService, CommonLoginService, CommonAssociateOfficeService } from '@legalshield/frontend-automation-commons';
import { ShieldBenefitsService } from '../page-objects/shieldbenefits/shieldbenefits-service';
import { NewCheckoutService } from '../page-objects/new-checkout/new-checkout-service';
import { WalsService } from '../page-objects/wals/wals-service';
import { GlobalFooterComponent } from '../page-objects/global-components/global-footer.component';
import { GlobalHeaderComponent } from '../page-objects/global-components/global-header.component';

export type MyFirstFixture = {
  idshieldService: IdshieldService;
  groupsAffiliatedService: GroupsAffiliatedService;
  legalshieldService: LegalshieldService;
  legalshieldAssociateService: LegalshieldAssociateService;
  pplsiService: PplsiService;
  shieldBenefitsService: ShieldBenefitsService;
  commonCheckoutService: CommonCheckoutService;
  commonHeaderComponent: GlobalHeaderComponent;
  commonFooterComponent: GlobalFooterComponent;
  commonLoginService: CommonLoginService;
  commonAssociateOfficeService: CommonAssociateOfficeService;
  newCheckoutService: NewCheckoutService;
  walsService: WalsService;
};

export const test = base.extend<MyFirstFixture>({
  //NOTE -> these classes are only instantiated when they are called
  commonAssociateOfficeService: async ({ page }, use) => {
    await use(new CommonAssociateOfficeService(page));
  },
  commonCheckoutService: async ({ page, context }, use) => {
    await use(new CommonCheckoutService(context, page));
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
  walsService: async ({ page }, use) => {
    await use(new WalsService(page));
  },
});

export { expect } from '@playwright/test';
