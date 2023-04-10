import EnvironmentUtil from './env.utils';
import * as dotenv from 'dotenv';
dotenv.config();
const env = EnvironmentUtil.getEnv();
export const associateUser = {
  password: process.env[`ASSOCIATE_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`ASSOCIATE_USERNAME_${env.toUpperCase()}`],
};
export const basicUser = {
  email: process.env[`LOGIN_EMAIL_${env.toUpperCase()}`] as string,
  password: process.env[`LOGIN_PASSWORD_${env.toUpperCase()}`] as string,
  username: process.env[`LOGIN_USERNAME_${env.toUpperCase()}`] as string,
};
export const oktaUser = {
  email: process.env[`OKTA_EMAIL_${env.toUpperCase()}`],
  password: process.env[`OKTA_PASSWORD_${env.toUpperCase()}`],
};
export const resetPasswordUser = {
  email: process.env[`RESET_USER_EMAIL_${env.toUpperCase()}`],
};
export const associateBasic = {
  password: process.env[`ASSOCIATE_BASIC_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`ASSOCIATE_BASIC_USERNAME_${env.toUpperCase()}`],
};
export const associateLegacy = {
  password: process.env[`ASSOCIATE_LEGACY_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`ASSOCIATE_LEGACY_USERNAME_${env.toUpperCase()}`],
};
export const associateAdvantagePlus = {
  password: process.env[`ASSOCIATE_ADVANTAGE_PLUS_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`ASSOCIATE_ADVANTAGE_PLUS_USERNAME_${env.toUpperCase()}`],
};
export const dependentUser = {
  email: process.env[`DEPENDENT_EMAIL_${env.toUpperCase()}`],
  password: process.env[`DEPENDENT_PASSWORD_${env.toUpperCase()}`],
};
export const withUsername = {
  password: process.env[`WITHUSERNAME_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`WITHUSERNAME_USERNAME_${env.toUpperCase()}`],
};
export const withoutUsername = {
  email: process.env[`WITHOUTUSERNAME_EMAIL_${env.toUpperCase()}`],
  password: process.env[`WITHOUTUSERNAME_PASSWORD_${env.toUpperCase()}`],
};
export const withPlans = {
  email: process.env[`WITHPLANS_EMAIL_${env.toUpperCase()}`],
  password: process.env[`WITHPLANS_PASSWORD_${env.toUpperCase()}`],
};
export const associateReportsCommissions = {
  password: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_USERNAME_${env.toUpperCase()}`],
};
export const canadianUser = {
  email: process.env[`LSCANADAUSER_EMAIL_${env.toUpperCase()}`],
  password: process.env[`LSCANADAUSER_PASSWORD_${env.toUpperCase()}`],
};
export const associateReportsCommissions2 = {
  password: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_PASSWORD2_${env.toUpperCase()}`],
  username: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_USERNAME2_${env.toUpperCase()}`],
};
export const associateReportsCommissions3 = {
  password: process.env[`RC_PENDING_STATEMENTS_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`RC_PENDING_STATEMENTS_USERNAME_${env.toUpperCase()}`],
};
export const revenueReports = {
  password: process.env[`REVENUE_REPORTS_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`REVENUE_REPORTS_USERNAME_${env.toUpperCase()}`],
};
export const businessReports = {
  password: process.env[`ASSOCIATE_REPORTS_BUSINESS_PASSWORD_${env.toUpperCase()}`],
  username: process.env[`ASSOCIATE_REPORTS_BUSINESS_USERNAME_${env.toUpperCase()}`],
};
export const profilePicker = {
  password: process.env[`PROFILE_PICKER_PASSWORD_ML_AC_${env.toUpperCase()}`],
  username: process.env[`PROFILE_PICKER_USERNAME_ML_AC_${env.toUpperCase()}`],
};
