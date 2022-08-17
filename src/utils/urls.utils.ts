/* eslint-disable camelcase */
import EnvironmentUtil from './env.utils';
// require('dotenv').config();

const envUrlString = EnvironmentUtil.getEnvUrlString();
const envLaunchUrlString = EnvironmentUtil.getLaunchUrlString();
const envTestHarnessString = EnvironmentUtil.getTestHarnessUrlString();

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
    login: {
      url: `https://login.${envUrlString}legalshield.com`,
    },
    status: {
      url: `https://status.${envUrlString}legalshield.com`,
    },
    activate: {
      url: `https://activate.${envUrlString}legalshield.com`,
    },
    checkout: {
      url: `https://checkoutv3.${envUrlString}legalshield.com`,
    },
    ids: {
      url: `https://ids.${envUrlString}legalshield.com`,
    },
    ids4b: {
      url: `https://ids4b.${envUrlString}legalshield.com/`,
    },
    legal: {
      url: `https://legal.${envUrlString}legalshield.com/`,
    },
    launch: {
      url: `https://mybusiness.${envUrlString}legalshield.com/`,
    },
    forms: {
      url: `https://forms.${envUrlString}legalshield.com/`,
    },
    shieldAtWork: {
      url: `https://groups.${envUrlString}shieldatwork.com/employee`,
    },
    groupEnrollment: {
      url: `https://groupenrollment.${envUrlString}legalshieldinternal.com/`,
    },
    classicShieldAtWork: {
      url: 'https://classic.dev-shieldatwork.com/',
    },
    typeForm: {
      url: 'https://legalshield.typeform.com/to/lJtBMp?typeform-source=classic.dev-shieldatwork.com',
    },
  };

  static readonly testHarnessUrls = {
    legalShield: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com/d2c-lsus/?lsc-current-site=LS_US`,
    },
    legalShieldCanada: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com/d2c-lsca/?lsc-current-site=LS_CA`,
    },
    idShield: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com/d2c-idsus/?lsc-current-site=IDS_US`,
    },
    idShieldCanada: {
      url: `https://wptesttool${envTestHarnessString}.pplsicorp.com/d2c-idsca/?lsc-current-site=IDS_CA`,
    },
  };

  static readonly legalshieldInternalUrls = {
    // TODO - find this url if it is even a thing?
    // status: {
    //   'url': `https://status.${envUrlString}legalshieldinternal.com`,
    // },

    member_search: {
      url: `https://member-search.${envUrlString}legalshieldinternal.com`,
    },
    planalyzer_csr_checkout: {
      url: `https://planalyzer.${envUrlString}legalshieldinternal.com/triage-tool/csr-checkout`,
    },
  };

  static readonly shieldBenefits = {
    home: {
      url: `https://www.${envUrlString}shieldbenefits.com`,
    },
    employee: {
      url: `https://www.${envUrlString}shieldbenefits.com/employee`,
    },
  };

  static readonly pplsiUrls = {
    home: {
      url: 'https://www.pplsi.com',
    },
    termsOfService: {
      url: 'https://www.pplsi.com/terms-service?',
    },
  };

  static readonly memberPerksUrls = {
    login: {
      // url: 'https://legalshield.perkspot.com/login',
      url: 'https://pslogin.perkspot.com/login?communityId=588',
    },
  };

  static readonly launchUrls = {
    prodUrl: {
      url: 'https://legalshield.com/start-a-business/legal-support//',
    },
    devUrl: {
      url: 'https://' + envLaunchUrlString + '.wpengine.com/start-a-business/legal-support/',
    },
    uatUrl: {
      url: 'https://' + envLaunchUrlString + '-legalshield.com/start-a-business/legal-support/',
    },
  };

  static readonly walsUrls = {
    devUrl: {
      url: ' https://lspro.dev.wearelegalshield.com/launch',
    },
    uatUrl: {
      url: 'https://lspro.stage.wearelegalshield.com/launch',
    },
  };

  static readonly channelsUrls = {
    advantage: {
      url: `https://associate-office.${envUrlString}legalshield.com/advantage`,
    },
    businesscard: {
      url: `https://associate-office.${envUrlString}legalshield.com/business-card`,
    },
    login: {
      url: `https://associate-office.${envUrlString}legalshield.com/`,
    },
    perks: {
      url: `https://associate-office.${envUrlString}legalshield.com/perks`,
    },
    reportsbusinessorganizational: {
      url: `https://associate-office.${envUrlString}legalshield.com/reports/business/organizational`,
    },
    reportscommissions: {
      url: `https://associate-office.${envUrlString}legalshield.com/reports/commissions`,
    },
  };
  static readonly groupsUrls = {
    urlBestMoneyMovers: `https://www.shieldbenefits.com/bestmoneymoves/overview`,
    url1UniversalTrucking: `https://w3.legalshield.com/gs/init?grp=1universaltrucking`,
  };
}
