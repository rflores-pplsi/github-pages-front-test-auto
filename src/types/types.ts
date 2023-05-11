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
