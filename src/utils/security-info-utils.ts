import { ISecurityInfoData } from '../interfaces/checkout-interfaces';

export function getDefaultSecurityInfoData(customSecurityInfoData?: object): ISecurityInfoData {
  const defaultSecurityInfoData: ISecurityInfoData = {
    dob: '10102001',
    ssn: '3333',
  };
  const dataObj = { ...defaultSecurityInfoData, ...customSecurityInfoData };
  return dataObj;
}

export const EMPTY_SECURITY_INFO = [
  { label: 'emptyDob', data: getDefaultSecurityInfoData({ dob: '' }), errorMessage: 'Must provide date of birth' },
  { label: 'emptySsn', data: getDefaultSecurityInfoData({ ssn: '' }), errorMessage: 'Must provide SSN or SIN' },
];

export const INVALID_SECURITY_INFO = [
  { label: 'invalidDobSsn', data: { dob: '12311900', ssn: '1234' }, errorMessage: 'Invalid date' },
  { label: 'invalidDob', data: { dob: '10102028', ssn: '1234' }, errorMessage: 'Please enter a valid date in the MM/DD/YYYY format' },
  { label: 'dobUnder18', data: { dob: '10102022', ssn: '1234' }, errorMessage: 'Must be over 18' },
  { label: 'invalidSsn', data: { dob: '10102001', ssn: '123' }, errorMessage: 'Invalid SSN / SIN' },
];
