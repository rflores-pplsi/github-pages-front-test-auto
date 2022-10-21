/* eslint-disable require-jsdoc */
export default class DataUtils {
  // eslint-disable-next-line prettier/prettier
  static readonly data = {
    testingHarness: {
      lineOfBusiness: {
        IDShieldCanada: '0',
        LegalShieldCanada: '1',
        LegalShield: '2',
        IDShield: '3',
        networkShieldAssociate: '0',
        ProfilesOfSuccess: '1',
      },
      plans: {
        ca: {
          LegalPlan: 'CA22',
          LegalPlanBusinessPlusSupplement: 'BPS',
          LegalPlanHomeBusinessSupplement: 'HB3',
          LegalPlanTrialDefenceSupplement: 'TD3',
          LegalPlanRideShareandDeliverySupplement: 'RS2',
          SmallBusinessLegalEssentials: 'ESS',
          SmallBusinessLegalEssentialsBusinessPlusSupplement: 'BPS',
          SmallBusinessLegalPlus: 'PLUS',
          SmallBusinessLegalPlusBusinessPlusSupplement: 'BPS',
          SmallBusinessLegalPlusTrialDefenceforBusiness: 'TDB',
          SmallBusinessLegalPro: 'PRO',
          SmallBusinessLegalProBusinessPlusSupplement: 'BPS',
          SmallBusinessLegalProTrialDefenceforBusiness: 'TDB',
          IDShieldIndividual: 'IDSCI2',
          IDShieldFamily: 'IDSCF2',
        },
        us: {
          LegalPlan: 'LPUS21',
          LegalPlanBusinessPlusSupplement: 'BPS',
          LegalPlanHomeBusinessSupplement: 'HB3',
          LegalPlanTrialDefenceSupplement: 'TD3',
          LegalPlanRideShareandDeliverySupplement: 'RS2',
          SmallBusinessLegalEssentials: 'ESS',
          SmallBusinessLegalEssentialsBusinessPlusSupplement: 'BPS',
          SmallBusinessLegalPlus: 'PLUS',
          SmallBusinessLegalPlusBusinessPlusSupplement: 'BPS',
          SmallBusinessLegalPlusTrialDefenceforBusiness: 'TDB',
          SmallBusinessLegalPro: 'PRO',
          SmallBusinessLegalProBusinessPlusSupplement: 'BPS',
          SmallBusinessLegalProTrialDefenceforBusiness: 'TDB',
          LegalPlanGunOwnersSupplement: 'GO2',
          LaunchLLCFormation: 'LNCHLGL',
          CommercialDriversLegalPlan: 'CDLP',
          SuperCommercialDriversLegalPlan: 'SCDLP',
          IDShieldForBusinessEssentials: 'IDSBUS',
          IDShieldForBusinessPlus: 'IDSBUS2',
          IDShieldIndividual: 'IDSI',
          IDShieldFamily: 'IDSF',
          IDShieldThreeBureauFamily: 'IDSF3',
          IDShieldThreeBureauIndividual: 'IDSI3',
        },
      },
      ca: {
        bd: {
          province: {
            BC: 'British Columbia',
          },
          name: 'Tester',
          Transit: '11242',
          Institution: '260',
          Account: '0000000',
        },
        cc: {
          name: 'Tester',
          cn: '4444333322221111',
          exp: '1 / 23',
          cvv: '111',
        },
      },
      us: {
        city: {
          VA: 'Virginia',
          CA: 'California',
        },
        bd: {
          name: 'Tester',
          Routing: '103000648',
          Account: '000000',
        },
        cc: {
          cn: '4444333322221111',
          exp: '1 / 23',
          cvv: '111',
        },
      },
    },
  };
}
