import * as faker from 'faker';
import * as zipcodes from 'zipcodes';
import EnvironmentUtil from './env.utils';

const env = EnvironmentUtil.getEnv();

const associateUser = {
  username: process.env[`ASSOCIATE_USERNAME_${env.toUpperCase()}`],
  password: process.env[`ASSOCIATE_PASSWORD_${env.toUpperCase()}`],
};

const basicUser = {
  username: process.env[`LOGIN_USERNAME_${env.toUpperCase()}`],
  email: process.env[`LOGIN_EMAIL_${env.toUpperCase()}`],
  password: process.env[`LOGIN_PASSWORD_${env.toUpperCase()}`],
};

const oktaUser = {
  email: process.env[`OKTA_EMAIL_${env.toUpperCase()}`],
  password: process.env[`OKTA_PASSWORD_${env.toUpperCase()}`],
};

const resetPasswordUser = {
  email: process.env[`RESET_USER_EMAIL_${env.toUpperCase()}`],
};

const associateBasic = {
  username: process.env[`ASSOCIATE_BASIC_USERNAME_${env.toUpperCase()}`],
  password: process.env[`ASSOCIATE_BASIC_PASSWORD_${env.toUpperCase()}`],
};

const associateLegacy = {
  username: process.env[`ASSOCIATE_LEGACY_USERNAME_${env.toUpperCase()}`],
  password: process.env[`ASSOCIATE_LEGACY_PASSWORD_${env.toUpperCase()}`],
};

const associateAdvantagePlus = {
  username: process.env[`ASSOCIATE_ADVANTAGE_PLUS_USERNAME_${env.toUpperCase()}`],
  password: process.env[`ASSOCIATE_ADVANTAGE_PLUS_PASSWORD_${env.toUpperCase()}`],
};

const dependentUser = {
  email: process.env[`DEPENDENT_EMAIL_${env.toUpperCase()}`],
  password: process.env[`DEPENDENT_PASSWORD_${env.toUpperCase()}`],
};

const withUsername = {
  email: process.env[`WITHUSERNAME_EMAIL_${env.toUpperCase()}`],
  password: process.env[`WITHUSERNAME_PASSWORD_${env.toUpperCase()}`],
};

const withoutUsername = {
  email: process.env[`WITHOUTUSERNAME_EMAIL_${env.toUpperCase()}`],
  password: process.env[`WITHOUTUSERNAME_PASSWORD_${env.toUpperCase()}`],
};

const withPlans = {
  email: process.env[`WITHPLANS_EMAIL_${env.toUpperCase()}`],
  password: process.env[`WITHPLANS_PASSWORD_${env.toUpperCase()}`],
};

const associateReportsCommissions = {
  username: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_USERNAME_${env.toUpperCase()}`],
  password: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_PASSWORD_${env.toUpperCase()}`],
};

const canadianUser = {
  email: process.env[`LSCANADAUSER_EMAIL_${env.toUpperCase()}`],
  password: process.env[`LSCANADAUSER_PASSWORD_${env.toUpperCase()}`],
};

const associateReportsCommissions2 = {
  username: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_USERNAME2_${env.toUpperCase()}`],
  password: process.env[`ASSOCIATE_REPORTS_COMMISSIONS_PASSWORD2_${env.toUpperCase()}`],
};

// Needs refactored or rewritten after pulling in from webdriverio project
// const createRandomUser = (userRegion='en_US') => {
  
  // let user = {};

  // const firstName = faker.name.firstName();
  // const lastName = faker.name.lastName();
  // const firstNameShort = firstName.length > 5 ? firstName.substring(0,5) : firstName;
  // const lastNameInitial = lastName.substring(0,1);
  // const randomNumber = faker.datatype.number({ min: 10000, max: 99999});
  // const email = `lsitautomation.${firstNameShort}${lastNameInitial}.${randomNumber}@hsmuauyg.mailosaur.net`;

  // //faker.locale = userRegion;
  // let postalCode, addressFull;
  // let validAddress = false;

  // while (!validAddress) {
  //   postalCode = faker.address.zipCode();
  //   // Regenerate if zip code is in AE or AP (military)
  //   while (
  //     (postalCode >= '09001' && postalCode <= '09910') || // AE zipcodes
  //     (postalCode >= '96212' && postalCode <= '96698') // AP zipcodes
  //   ) {
  //     postalCode = faker.address.zipCode();
  //   }
  //   addressFull = zipcodes.lookup(postalCode);
  //   if (addressFull != undefined) {
  //     validAddress = true;
  //     addressFull.zip = postalCode;
  //   }
  // }

  // addressFull.addressLineOne = faker.address.streetAddress();
  // addressFull.addressLineTwo = faker.address.secondaryAddress();
  
  // user = {
  //   firstName: firstName,
  //   lastName: lastName,
  //   email: email,
  //   employeeId: faker.datatype.number({ min: 100, max: 999999999}),
  //   phoneNumberHome: faker.phone.phoneNumber(),
  //   phoneNumberCell: faker.phone.phoneNumber(),
  //   phoneNumberBusiness: faker.phone.phoneNumber(),
  // };
  
//   Object.assign(user, addressFull);
  
//   return user;
// };

module.exports = {
  associateUser,
  basicUser,
  oktaUser,
  resetPasswordUser,
  associateBasic,
  associateLegacy,
  associateAdvantagePlus,
  // createRandomUser, 
  dependentUser,
  withUsername,
  withoutUsername,
  withPlans,
  associateReportsCommissions,
  canadianUser,
  associateReportsCommissions2
};