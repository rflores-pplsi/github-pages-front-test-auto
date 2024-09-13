import EnvironmentUtil from './env.utils';
import * as dotenv from 'dotenv';
dotenv.config();

const envUrlString = EnvironmentUtil.getEnvUrlString();
const envLaunchUrlString = EnvironmentUtil.getLaunchUrlString();
const envTestHarnessString = EnvironmentUtil.getTestHarnessUrlString();
const envPplsiUrlString = EnvironmentUtil.getPplsiEnvString();

/**
 *
 *
 * @export
 * @class UrlsUtils
 */
export default class UrlsUtils {
  // static readonly marketingSitesUrls = {
  //   url: `https://${envUrlString}legalshield.com`,
  // };
  // static readonly legalshieldCanadaUrl = {
  //   url: `https://${envUrlString}legalshield.ca`,
  // };
  // static readonly idshieldUrl = {
  //   url: `https://${envUrlString}idshield.com`,
  // };
  // static readonly idshieldCanadaUrl = {
  //   url: `https://${envUrlString}idshield.ca`,
  // };

  //TODO: rewrite this file based on this format, with urls associated with services
  static readonly cartService = {
    baseUrl: `https://cart.${envUrlString}legalshield.com`,
  };
  static readonly legalshieldService = {
    baseUrl: `https://${envUrlString}legalshield.com`,
  };
  static readonly legalshieldAssociateService = {
    baseUrl: `https://www.${envUrlString}legalshieldassociate.com`,
    baseUrlNoSubdomain: `${envUrlString}legalshieldassociate.com`,
  };
  static readonly shieldAssociateService = {
    baseUrl: `https://www.${envUrlString}shieldassociate.com`,
    baseUrlNoSubdomain: `${envUrlString}shieldassociate.com`,
  };
  static readonly idShieldService = {
    baseUrl: `https://www.${envUrlString}idshield`,
    baseUrlNoSubdomain: `${envUrlString}idshield.com`,
    baseUrlNoTopLevelDomain: `https://www.${envUrlString}idshield`,
  };

  static readonly legalshieldUrls = {
    accounts: {
      url: `https://accounts.${envUrlString}legalshield.com`,
    },
    activate: {
      url: `https://activate.${envUrlString}legalshield.com`,
    },
    checkout: {
      url: `https://checkoutv3.${envUrlString}legalshield.com`,
    },
    classicShieldAtWork: {
      url: `https://classic.dev-shieldatwork.com/`,
    },
    forms: {
      url: `https://forms.${envUrlString}legalshield.com/`,
    },
    groupEnrollment: {
      url: `https://groupenrollment.${envUrlString}legalshieldinternal.com/`,
    },
    ids: {
      url: `https://ids.${envUrlString}legalshield.com`,
    },
    ids4b: {
      url: `https://ids4b.${envUrlString}legalshield.com/`,
    },
    launch: {
      url: `https://mybusiness.${envUrlString}legalshield.com/`,
    },
    legal: {
      url: `https://legal.${envUrlString}legalshield.com/`,
    },
    login: {
      url: `https://login.${envUrlString}legalshield.com`,
    },
    shieldAtWork: {
      url: `https://groups.${envUrlString}shieldatwork.com/employee`,
    },
    status: {
      url: `https://status.${envUrlString}legalshield.com`,
    },
    typeForm: {
      url: `https://legalshield.typeform.com/to/lJtBMp?typeform-source=classic.dev-shieldatwork.com`,
    },
  };

  static readonly testHarnessUrls = {
    d2c: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com`,
    },
    idShield: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com/d2c-idsus/?lsc-current-site=IDS_US`,
    },
    idShieldCanada: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com/d2c-idsca/?lsc-current-site=IDS_CA`,
    },
    legalShield: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com/d2c-lsus/?lsc-current-site=LS_US`,
    },
    legalShieldCanada: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com/d2c-lsca/?lsc-current-site=LS_CA`,
    },
  };

  static readonly legalshieldInternalUrls = {
    memberSearch: {
      url: `https://member-search.${envUrlString}legalshieldinternal.com`,
    },
    planalyzerCSRCheckout: {
      url: `https://planalyzer.${envUrlString}legalshieldinternal.com/triage-tool/csr-checkout`,
    },
  };

  static readonly shieldBenefits = {
    employee: {
      url: `https://www.${envUrlString}shieldbenefits.com/employee`,
    },
    home: {
      url: `https://www.${envUrlString}shieldbenefits.com`,
    },
  };

  static readonly pplsiUrls = {
    home: {
      url: `https://pplsi${envPplsiUrlString}.com`,
    },
    termsOfService: {
      url: `https://www.pplsi${envPplsiUrlString}.com/terms-service?`,
    },
  };

  static readonly memberPerksUrls = {
    login: {
      // url: `https://legalshield.perkspot.com/login`,
      url: `https://pslogin.perkspot.com/login?communityId=588`,
    },
  };

  static readonly launchUrls = {
    devUrl: {
      url: `https://` + envLaunchUrlString + `.wpengine.com/start-a-business/legal-support/`,
    },
    prodUrl: {
      url: `https://legalshield.com/start-a-business/legal-support//`,
    },
    uatUrl: {
      url: `https://` + envLaunchUrlString + `-legalshield.com/start-a-business/legal-support/`,
    },
  };

  static readonly channelsUrls = {
    advantage: {
      url: `https://associate-office.${envUrlString}legalshield.com/advantage`,
    },
    businessCard: {
      url: `https://associate-office.${envUrlString}legalshield.com/business-card`,
    },
    login: {
      url: `https://associate-office.${envUrlString}legalshield.com/`,
    },
    perks: {
      url: `https://associate-office.${envUrlString}legalshield.com/perks`,
    },
    pplsiProspect: {
      url: `https://associate-office.${envUrlString}legalshield.com/?vendor=nowapp`,
    },
    reportsBusinessOrganizational: {
      url: `https://associate-office.${envUrlString}legalshield.com/reports/business/organizational`,
    },
    reportsBusinessPersonal: {
      url: `https://associate-office.${envUrlString}legalshield.com/reports/business/personal`,
    },
    reportsCommissions: {
      url: `https://associate-office.${envUrlString}legalshield.com/reports/commissions`,
    },
    taxForm: {
      url: `https://associate-office.${envUrlString}legalshield.com/reports/tax-forms`,
    },
  };
  static readonly groupsUrls = {
    affiliateGroupPage: `http://groups.legalshield.com/?group=`,
    url1UniversalTrucking: `http://www.legalshield.com/info/1universaltrucking`,
    urlBestMoneyMovers: `https://www.shieldbenefits.com/bestmoneymoves/overview`,
    urlPrimericaGroup: `http://groups.legalshield.com/?group=primerica`,
  };
  static readonly miscellaneousUrls = {
    businessRedirectUrl: `https://www.legalshield.com/business-plan/plan-summary/`,
    businessUrl: `https://business.legalshield.com`,
    launchRedirectUrl: `https://www.legalshield.com/start-a-business/`,
    launchUrl: `http://launchbylegalshield.com`,
    opportunityRedirectUrl: `http://wearelegalshield.com/income-disclosure`,
    opportunityUrl: `http://www.opportunity.legalshield.com`,
  };
  static readonly marketingSitesUrls = {
    idShieldCAUrl: `https://www.${envUrlString}idshield.ca`,
    idShieldUSUrl: `https://www.${envUrlString}idshield.com`,
    legalShieldCAUrl: `https://www.${envUrlString}legalshield.ca`,
    legalShieldUSUrl: `https://www.${envUrlString}legalshield.com`,
  };

  revertCheckoutURLToBypassOnePage = async (url: string) => {
    const urlObj = new URL(url);
    const baseUrl = `${urlObj.origin}/`;
    const newOrderId = `?id=67d78c01-78a1-49bc-83ea-35a09ee34cd4`;
    return `${baseUrl}${newOrderId}`;
  };
}
