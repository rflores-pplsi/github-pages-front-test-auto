export type LocalStorageSelectedItem = {
  description: string;
  enrollmentFee: string;
  parent: string | null;
  pdp_link: string;
  planType: string;
  productId: string;
  productName: string;
  productPrice: string;
  shortcode: string;
  unlicensed_on_current_region: string;
};

export type ProductDetails = {
  cost: string;
  name: string;
  shortCode: string;
  term: string;
  type: string;
};

export type Supplements = {
  cost: string;
  name: string;
};

export type Tier = {
  cost: string;
  name: string;
};

export type PlanDetails = {
  associateRegistrationType: string;
  cost: string;
  marketingName: string;
  name: string;
  oneTimeFee: string;
  shortCode: string;
  supplements: Supplements[];
  term: string;
  tier: Tier;
  type: string;
};

export type PlanDetailsArray = PlanDetails[];

export type ConsumerFlowData = {
  disabled: boolean;
  market: string;
  paymentMethod: string;
  planDetails: PlanDetails[];
  regions: string[];
  termTotal: string;
  testCaseName: string;
  userType: string;
};

export type PageUrlAndTitleArray = {
  url: string;
  title: string;
}[];

export type PlanNameCostArray = {
  name: string;
  cost: string;
}[];
