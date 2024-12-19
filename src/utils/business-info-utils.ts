import { IBusinessInfoData } from '../interfaces/checkout-interfaces';
import { getDefaultAccountInfoData } from './account-info-utils';

export function getDefaultBusinessInfoData(customBusinessInfoData?:object): IBusinessInfoData {
  const defaultBusinessInfoData: IBusinessInfoData = {
    businessName: 'Tester Inc',
    businessDOI: '10102008',
    businessTaxID: '444444444',
  };
  const dataObj =  { ...defaultBusinessInfoData, ...customBusinessInfoData };
  return dataObj;
}

export const EMPTY_BUSINESS_INFO = [
  { label: 'emptyBusinessName', data: getDefaultBusinessInfoData({ businessName: '' }), errorMessage: 'Must provide business name' },
  { label: 'emptyBusinessDOI', data: getDefaultBusinessInfoData({ businessDOI: '' }), errorMessage: 'Please enter a valid date in the MM/DD/YYYY format' },
  { label: 'emptyBusinessTaxID', data: getDefaultBusinessInfoData({ businessTaxID: '' }), errorMessage: 'Must provide tax ID' },
];

export const INVALID_BUSINESS_ACCOUNT_INFO = [
  { label: 'invalid home address', data: getDefaultAccountInfoData(
    { homeAddress: '12345AddressExceedsLengthOfThirty' }), errorMessage: 'Address is limited to 30 characters. Please abbreviate or shorten your address.' },
  { label: 'invalid home address 2', data: getDefaultAccountInfoData(
    { homeAddress2: '12345AddressExceedsLengthOfThirty' }), errorMessage: 'Address is limited to 30 characters. Please abbreviate or shorten your address.' },
  { label: 'invalid zip code', data: getDefaultAccountInfoData({ zipCode: '123' }), errorMessage: 'Invalid postal code' },
  { label: 'invalid phone number', data: getDefaultAccountInfoData({ phoneNumber: '888' }), errorMessage: 'Invalid phone number' },
];

export const INVALID_BUSINESS_INFO = [
  { label: 'invalid business DOI', data: getDefaultBusinessInfoData({ businessDOI: '13332029' }), errorMessage: 'Please enter a valid date in the MM/DD/YYYY format' },
  { label: 'invalid business tax ID', data: getDefaultBusinessInfoData({ businessTaxID: '000' }), errorMessage: 'Invalid tax ID' },
];

