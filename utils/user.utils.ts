/* eslint-disable require-jsdoc */
import EnvironmentUtil from "./env.utils";

const env = EnvironmentUtil.getEnv();

export default class UsersUtils {
  static readonly associateUser = {
    username: process.env[`ASSOCIATE_USERNAME_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly basicUser = {
    username: process.env[`LOGIN_USERNAME_${env.toUpperCase()}`],
    email: process.env[`LOGIN_EMAIL_${env.toUpperCase()}`],
    password: process.env[`LOGIN_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly oktaUser = {
    email: process.env[`OKTA_EMAIL_${env.toUpperCase()}`],
    password: process.env[`OKTA_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly resetPasswordUser = {
    email: process.env[`RESET_USER_EMAIL_${env.toUpperCase()}`],
  };

  static readonly associateBasic = {
    username: process.env[`ASSOCIATE_BASIC_USERNAME_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_BASIC_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly associateLegacy = {
    username: process.env[`ASSOCIATE_LEGACY_USERNAME_${env.toUpperCase()}`],
    password: process.env[`ASSOCIATE_LEGACY_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly associateAdvantagePlus = {
    username:
      process.env[`ASSOCIATE_ADVANTAGE_PLUS_USERNAME_${env.toUpperCase()}`],
    password:
      process.env[`ASSOCIATE_ADVANTAGE_PLUS_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly dependentUser = {
    email: process.env[`DEPENDENT_EMAIL_${env.toUpperCase()}`],
    password: process.env[`DEPENDENT_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly withUsername = {
    email: process.env[`WITHUSERNAME_EMAIL_${env.toUpperCase()}`],
    password: process.env[`WITHUSERNAME_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly withoutUsername = {
    email: process.env[`WITHOUTUSERNAME_EMAIL_${env.toUpperCase()}`],
    password: process.env[`WITHOUTUSERNAME_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly withPlans = {
    email: process.env[`WITHPLANS_EMAIL_${env.toUpperCase()}`],
    password: process.env[`WITHPLANS_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly associateReportsCommissions = {
    username:
      process.env[
        `ASSOCIATE_REPORTS_COMMISSIONS_USERNAME_${env.toUpperCase()}`
      ],
    password:
      process.env[
        `ASSOCIATE_REPORTS_COMMISSIONS_PASSWORD_${env.toUpperCase()}`
      ],
  };

  static readonly canadianUser = {
    email: process.env[`LSCANADAUSER_EMAIL_${env.toUpperCase()}`],
    password: process.env[`LSCANADAUSER_PASSWORD_${env.toUpperCase()}`],
  };

  static readonly associateReportsCommissions2 = {
    username:
      process.env[
        `ASSOCIATE_REPORTS_COMMISSIONS_USERNAME2_${env.toUpperCase()}`
      ],
    password:
      process.env[
        `ASSOCIATE_REPORTS_COMMISSIONS_PASSWORD2_${env.toUpperCase()}`
      ],
  };
}
