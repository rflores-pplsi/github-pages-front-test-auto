/* eslint-disable camelcase */
import EnvironmentUtil from './env.utils';
require('dotenv').config();

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
      url: `https://ids.${envUrlString}legalshield.com/?e=9f3299c8-4a2e-4421-aad0-d51c72882430`,
    },
    ids4b: {
      url: `https://ids4b.${envUrlString}legalshield.com/?e=c97e551a-c109-451e-9488-82e0a36962ae`,
    },
    legal: {
      url: `https://legal.${envUrlString}legalshield.com/?e=12cefe8f-af99-4e9f-9efc-9d12d8c92a72`,
    },
    launch: {
      url: `https://mybusiness.${envUrlString}legalshield.com/questionnaire?e=12cefe8f-af99-4e9f-9efc-9d12d8c92a72`,
    },
    forms: {
      url: `https://forms.${envUrlString}legalshield.com/`,
    },
    shieldAtWork: {
      url: `https://login.${envUrlString}shieldatwork.com?app=work`,
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
}
