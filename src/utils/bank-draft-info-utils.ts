import { IBankDraftDataForUS } from '../interfaces/checkout-interfaces';

export function getDefaultBankDraftData(customBankDraftData?:object): IBankDraftDataForUS {
  const defaultBankDraftData: IBankDraftDataForUS = {
    accountNumber: '00000011',
    routingNumber: '103000648',
    accountHolderName: 'Test User',
  };
  const dataObj =  { ...defaultBankDraftData, ...customBankDraftData };
  return dataObj;
}
