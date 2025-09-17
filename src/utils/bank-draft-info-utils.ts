import { IBankDraftDataForUS, IBankDraftDataForCanada } from '../interfaces/checkout-interfaces';

export function getDefaultBankDraftData(customBankDraftData?:object): IBankDraftDataForUS {
  const defaultBankDraftData: IBankDraftDataForUS = {
    accountNumber: '00000011',
    routingNumber: '103000648',
    accountHolderName: 'Test User',
  };
  const dataObj =  { ...defaultBankDraftData, ...customBankDraftData };
  return dataObj;
}

export function getDefaultBankDraftDataCanada(customBankDraftData?:object): IBankDraftDataForCanada {
  const defaultBankDraftData: IBankDraftDataForCanada = {
    accountNumber: '0000011',
    transitNumber: '11242',
    institutionNumber: '260',
    accountHolderName: 'Tester',
  };
  const dataObj =  { ...defaultBankDraftData, ...customBankDraftData };
  return dataObj;
}
