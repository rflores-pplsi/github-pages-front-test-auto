/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { expect, test } from '@playwright/test';

test.only('api post test', async ({ request }) => {
  const _response = await request.get('https://payments.staging.legalshield.com/scripts/checkout_v3_validations.js', {});
  console.log(_response);
});
test('api response test', async ({ request }) => {
  const _response = await request.post('https://payments.staging.legalshield.com/scripts/checkout_v3_validations.js', {
    data: {
      bank_draft: `Bank Draft`,
      account_number: `000000`,
      routing_number: `103000648`,
      account_holder_name: `Abdel`,
    },
  });
  expect(_response.status()).toBe(201);
});
