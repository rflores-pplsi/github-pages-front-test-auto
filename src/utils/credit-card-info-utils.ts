import { ICreditCardData } from '../interfaces/checkout-interfaces';

export function getDefaultCreditCardData(customCreditCardData?:object): ICreditCardData {
  const defaultCreditCardData: ICreditCardData = {
    cardNumber: '4444333322221111',
    expirationDate: '12/25',
    cvv: '123',
    cardHolderName: 'Test User',
    zipCode: '80202',
  };
  const dataObj =  { ...defaultCreditCardData, ...customCreditCardData };
  return dataObj;
}
