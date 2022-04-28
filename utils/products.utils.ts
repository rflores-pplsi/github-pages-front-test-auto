/* eslint-disable no-unused-vars */
import request from 'then-request';
import { Page } from '@playwright/test';
import RegionsUtils from './regions.utils';

// Needs refactored or rewritten after pulling in from webdriverio project
// export default class ProductsUtils {
//   private page: Page;
//   private baseURL: string;
//   constructor(page: Page, baseURL: string) {
//     this.page = page;
//     this.baseURL = baseURL;
//   }

//   async getProvinceIDByName(provinceName: string): Promise<string> {
//     return RegionsUtils.caProvinces.find((obj) => {
//       return obj.name === provinceName;
//     }).abbrv;
//   }

//   async getProductIdByLongName(provinceName: string, productLongName: string): Promise<string> {
//     const regionID = await this.getProvinceIDByName(provinceName);
//     const res = await request('GET', this.baseURL + 'wp-json/lsc/v1/available_products/?region=' + regionID, { retry: true });
//     const responseJSON = await JSON.parse(res.getBody('utf8'));
//     return await responseJSON?.find((obj) => {
//       return obj.long_name === productLongName;
//     }).product_id;
//   }

//   async getProductPriceByLongName(provinceName: string, productLongName: string): Promise<string> {
//     const regionID = await this.getProvinceIDByName(provinceName);
//     const res = await request('GET', this.baseURL + 'wp-json/lsc/v1/available_products/?region=' + regionID, { retry: true });
//     const responseJSON = await JSON.parse(res.getBody('utf8'));
//     return await responseJSON?.find((obj) => {
//       return obj.long_name === productLongName;
//     }).price;
//   }

//   async getSupplementIDByName(provinceName: string, productLongName: string, supplementName: string): Promise<string> {
//     const regionID = await this.getProvinceIDByName(provinceName);
//     const res = await request('GET', this.baseURL + 'wp-json/lsc/v1/available_products/?region=' + regionID, { retry: true });
//     const responseJSON = await JSON.parse(res.getBody('utf8'));
//     const riders = await responseJSON?.find((obj) => {
//       return obj.long_name === productLongName;
//     }).riders;
//     return await riders?.find((obj) => {
//       return obj.name === supplementName;
//     }).id;
//   }

//   async getSupplementPriceByName(provinceName: string, productLongName, supplementName): Promise<string> {
//     const regionID = await this.getProvinceIDByName(provinceName);
//     const res = await request('GET', this.baseURL + 'wp-json/lsc/v1/available_products/?region=' + regionID, { retry: true });
//     const responseJSON = await JSON.parse(res.getBody('utf8'));
//     const riders = await responseJSON?.find((obj) => {
//       return obj.long_name === productLongName;
//     }).riders;
//     return await riders?.find((obj) => {
//       return obj.name === supplementName;
//     }).price;
//   }
// }
