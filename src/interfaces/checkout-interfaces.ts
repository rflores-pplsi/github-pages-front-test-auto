export interface IAccountInfoData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  phoneType?: string;
  homeAddress: string;
  homeAddress2: string;
  cityName: string;
  state: string;
  zipCode: string;
}

export interface ISecurityInfoData {
  dob: string;
  ssn: string;
}

export interface IBusinessInfoData {
  businessName: string;
  businessDOI: string;
  businessTaxID: string;
}

export interface ICreditCardData {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cardHolderName: string;
  zipCode: string;
}

export interface IBankDraftDataForUS {
  accountNumber: string;
  routingNumber: string;
  accountHolderName: string;
}

export interface IBankDraftDataForCanada {
  institutionNumber: string;
  transitNumber: string;
  accountNumber: string;
  accountHolderName: string;
}
