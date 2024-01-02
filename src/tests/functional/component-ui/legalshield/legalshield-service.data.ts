/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */
import UrlsUtils from '../../../../utils/urls.utils';

export const legalshieldServiceData = [
  {
    disabled: false,
    pageName: 'Home',
    url: `${UrlsUtils.legalshieldService.baseUrl}`,
  },
  {
    disabled: false,
    pageName: 'Personal Plan Coverage and Pricing',
    url: `${UrlsUtils.legalshieldService.baseUrl}/personal-plan/coverage-and-pricing/`,
  },
  {
    disabled: false,
    pageName: 'Personal Plan Plan Details',
    url: `${UrlsUtils.legalshieldService.baseUrl}/personal-plan/plan-details`,
  },
  {
    disabled: false,
    pageName: 'Business Plan Coverage and Pricing',
    url: `${UrlsUtils.legalshieldService.baseUrl}/business-plan/coverage-pricing/`,
  },
  {
    disabled: false,
    pageName: 'Business Plan Plan Summary',
    url: `${UrlsUtils.legalshieldService.baseUrl}/business-plan/plan-summary/`,
  },

  {
    disabled: false,
    pageName: 'Legal Plans Overview',
    url: `${UrlsUtils.legalshieldService.baseUrl}/legal-plans-overview/`,
  },

  {
    disabled: true,
    pageName: 'Business Plan Essentials',
    url: `${UrlsUtils.legalshieldService.baseUrl}/business-plan/coverage-pricing-essentials-v2/`,
  },

  {
    disabled: true,
    pageName: 'Business Plan Plus',
    url: `${UrlsUtils.legalshieldService.baseUrl}/business-plan/coverage-pricing-plus-v2/`,
  },

  {
    disabled: true,
    pageName: 'Business Plan Pro',
    url: `${UrlsUtils.legalshieldService.baseUrl}/business-plan/coverage-pricing-pro-v2/`,
  },
];
