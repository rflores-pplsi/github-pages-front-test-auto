import EnvironmentUtil from './env.utils';
import * as dotenv from 'dotenv';
dotenv.config();

const envUrlString = EnvironmentUtil.getEnvUrlString();
const envLaunchUrlString = EnvironmentUtil.getLaunchUrlString();
const envTestHarnessString = EnvironmentUtil.getTestHarnessUrlString();
const envWalsUrlString = EnvironmentUtil.getWalsEnvUrlString();

/**
 *
 *
 * @export
 * @class UrlsUtils
 */
export default class UrlsUtils {
  static readonly legalshieldUrls = {
    account: {
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
    // TODO - find this url if it is even a thing?
    // status: {
    //   `url`: `https://status.${envUrlString}legalshieldinternal.com`,
    // },

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
      url: `https://www.pplsi.com`,
    },
    termsOfService: {
      url: `https://www.pplsi.com/terms-service?`,
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

  static readonly wals = {
    urls: {
      ddev: `http://lspro.${envWalsUrlString}wearelegalshield.com`,
      urlAppTestUserDamesDeJusticeCa: `https://apptestuser.${envWalsUrlString}damesdejustice.ca`,
      urlAppTestUserEnCa: `https://lspro.${envWalsUrlString}wearelegalshield.ca`,
      urlAppTestUserFrCa: `https://apptestuser.${envWalsUrlString}noussommeslegalshield.ca`,
      urlAppTestUserLadiesCa: `https://apptestuser.${envWalsUrlString}ladiesofjustice.ca`,
      urlAppTestUserLadiesUs: `https://apptestuser.${envWalsUrlString}ladiesofjustice.com`,
      urlAppTestUserSpUS: `https://apptestuser.${envWalsUrlString}somoslegalshield.com`,
      urlAssociate: `https://www.${envWalsUrlString}wearelegalshield.com`,
      urlBenefits: `https://apptestuser.${envWalsUrlString}wearelegalshield.com`,
      urlDamesOfJustice: `https://www.${envWalsUrlString}damesdejustice.ca`,
      urlEnCa: `https://lspro.${envWalsUrlString}wearelegalshield.ca`,
      urlEnCanada: `https://www.${envWalsUrlString}wearelegalshield.ca`,
      urlEnUS: `https://lspro.${envWalsUrlString}wearelegalshield.com`,
      urlFrCa: `https://lspro.${envWalsUrlString}noussommeslegalshield.ca`,
      urlLadies: `https://www.${envWalsUrlString}ladiesofjustice.com`,
      urlLadiesCa: `https://www.${envWalsUrlString}ladiesofjustice.ca`,
      urlNous: `https://www.${envWalsUrlString}noussommeslegalshield.ca`,
      urlSomos: `https://www.${envWalsUrlString}somoslegalshield.com`,
      urlSpUS: `https://lspro.${envWalsUrlString}somoslegalshield.com`,
    },

    // uatUrl: {
    //   url: `https://lspro.stage.wearelegalshield.com/launch`,
    // },
    // prodUrl: {
    //   url: `https://lspro.wearelegalshield.com/launch`,
    // },
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
}
