/* eslint-disable camelcase */
import EnvironmentUtil from './env.utils';
// require('dotenv').config();

const envUrlString = EnvironmentUtil.getEnvUrlString();
const envLaunchUrlString = EnvironmentUtil.getLaunchUrlString();

/**
 *
 *
 * @export
 * @class UrlsUtils
 */
export default class UrlsUtils {
  static readonly legalshieldUrls = {
    account: {
      url: `https://accountsv2.${envUrlString}legalshield.com`,
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
      url: `https://ids.${envUrlString}legalshield.com/`,
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
      url: `https://login.${envUrlString}shieldatwork.com/`,
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
  };

  static readonly pplsiUrls = {
    home: {
      url: 'https://www.pplsi.com',
    },
    termsOfService: {
      url: 'https://www.legalshield.com/terms-service?',
    },
  };

  static readonly memberPerksUrls = {
    login: {
      url: 'https://legalshield.perkspot.com/login',
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
    businesscard: {
      url: `https://associate-office.${envUrlString}legalshield.com/business-card`,
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
