import { IAccountInfoData } from '../interfaces/checkout-interfaces';

export function getDefaultAccountInfoData(customAccountInfoData?:object): IAccountInfoData {
  const defaultAccountInfoData = {
    firstName: 'Automation',
    lastName: 'Tester',
    homeAddress: '2000 16th St',
    homeAddress2: 'APT 11',
    cityName: 'Denver',
    state: 'Colorado',
    zipCode: '80202',
    phoneNumber: '(555) 555-5555',
    phoneType: 'Mobile',
  };
  const dataObj =  { ...defaultAccountInfoData, ...customAccountInfoData };
  return dataObj;
}

export const EMPTY_ACCOUNT_INFO = [
  { label: 'emptyFirstName', data: getDefaultAccountInfoData({ firstName: '' }), errorMessage: 'Must provide first name' },
  { label: 'emptyLastName', data: getDefaultAccountInfoData({ lastName: '' }), errorMessage: 'Must provide last name' },
  { label: 'emptyHomeAddress', data: getDefaultAccountInfoData({ homeAddress: '' }), errorMessage: 'Must provide home address' },
  { label: 'emptyCityName', data: getDefaultAccountInfoData({ cityName: '' }), errorMessage: 'Must include name of city' },
  { label: 'emptyZipCode', data: getDefaultAccountInfoData({ zipCode: '' }), errorMessage: 'Must provide valid postal code' },
  { label: 'emptyPhoneNumber', data: getDefaultAccountInfoData({ phoneNumber: '' }), errorMessage: 'Must provide phone number' },
];

export const INVALID_PHONE_NUMBER_INFO = [
  { label: 'invalidPhoneNumberStartWithZero', phoneNumber: '(000)000-0000', errorMessage: 'Invalid phone number' },
  { label: 'invalidPhoneNumberStartWithOne', phoneNumber: '(111)111-1111', errorMessage: 'Invalid phone number' }
];
