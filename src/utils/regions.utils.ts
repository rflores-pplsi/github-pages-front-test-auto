/* eslint-disable camelcase */
import { Locator, Page } from '@playwright/test';

/**
 * @export
 * @class RegionsUtils
 */
export default class RegionsUtils {
  static readonly usStates = [
    {
      name: 'Alabama',
      abbrv: 'AL',
      validAddress: {
        street: '2021 Park Pl',
        city: 'Birmingham',
        postalCode: '35203',
      },
      priority: false,
    },
    {
      name: 'Alaska',
      abbrv: 'AK',
      validAddress: {
        street: '1110 John Kalinas Rd',
        city: 'Fairbanks',
        postalCode: '99712',
      },
      priority: false,
    },
    {
      name: 'Arizona',
      abbrv: 'AZ',
      validAddress: {
        street: '4400 S Rural Rd',
        city: 'Tempe',
        postalCode: '85282',
      },
      priority: false,
    },
    {
      name: 'Arkansas',
      abbrv: 'AR',
      validAddress: {
        street: '2630 W Clark Rd',
        city: 'Clarksville',
        postalCode: '72830',
      },
      priority: false,
    },
    {
      name: 'California',
      abbrv: 'CA',
      validAddress: {
        street: '750 Kearny St',
        city: 'San Francisco',
        postalCode: '94108',
      },
      priority: true,
    },
    {
      name: 'Colorado',
      abbrv: 'CO',
      validAddress: {
        street: ' 1050 Plaza Dr',
        city: 'Highlands Ranch',
        postalCode: '80126',
      },
      priority: false,
    },
    {
      name: 'Connecticut',
      abbrv: 'CT',
      validAddress: {
        street: '351 Pitkin St',
        city: 'East Hartford',
        postalCode: '06108',
      },
      priority: false,
    },
    {
      name: 'Delaware',
      abbrv: 'DE',
      validAddress: {
        street: '22871 Sussex Hwy',
        city: 'Seaford',
        postalCode: '19973',
      },
      priority: false,
    },
    {
      name: 'District of Columbia',
      abbrv: 'DC',
      validAddress: {
        street: '1525 15th St NW',
        city: 'Washington',
        postalCode: '20005',
      },
      priority: false,
    },
    {
      name: 'Florida',
      abbrv: 'FL',
      validAddress: {
        street: '3550 NW 74th Ave',
        city: 'Miami',
        postalCode: '33122',
      },
      priority: true,
    },
    {
      name: 'Georgia',
      abbrv: 'GA',
      validAddress: {
        street: '251 Avalon Ct',
        city: 'McDonough',
        postalCode: '30253',
      },
      priority: true,
    },
    {
      name: 'Hawaii',
      abbrv: 'HI',
      validAddress: {
        street: '3900 Wailea Alanui Dr',
        city: 'Kihei',
        postalCode: '96753',
      },
      priority: false,
    },
    {
      name: 'Idaho',
      abbrv: 'ID',
      validAddress: {
        street: '5750 E Franklin Rd',
        city: 'Nampa',
        postalCode: '83687',
      },
      priority: false,
    },
    {
      name: 'Illinois',
      abbrv: 'IL',
      validAddress: {
        street: '370 Eastgate Dr',
        city: 'Danville',
        postalCode: '61834',
      },
      priority: false,
    },
    {
      name: 'Indiana',
      abbrv: 'IN',
      validAddress: {
        street: ' 200 Prosperity Dr',
        city: 'Warsaw',
        postalCode: '46580',
      },
      priority: false,
    },
    {
      name: 'Iowa',
      abbrv: 'IA',
      validAddress: {
        street: '255 E Court St',
        city: 'Iowa City',
        postalCode: '52240',
      },
      priority: false,
    },
    {
      name: 'Kansas',
      abbrv: 'KS',
      validAddress: {
        street: '17250 Midland Dr',
        city: 'Shawnee',
        postalCode: '66217',
      },
      priority: false,
    },
    {
      name: 'Kentucky',
      abbrv: 'KY',
      validAddress: {
        street: '120 W 2nd St',
        city: 'Lexington',
        postalCode: '40507',
      },
      priority: false,
    },
    {
      name: 'Louisiana',
      abbrv: 'LA',
      validAddress: {
        street: '555 Canal St',
        city: 'New Orleans',
        postalCode: '70130',
      },
      priority: false,
    },
    {
      name: 'Maine',
      abbrv: 'ME',
      validAddress: {
        street: '1050 Westbrook St',
        city: 'Portland',
        postalCode: '04102',
      },
      priority: false,
    },
    {
      name: 'Maryland',
      abbrv: 'MD',
      validAddress: {
        street: '6600 Coastal Hwy',
        city: 'Ocean City',
        postalCode: '21842',
      },
      priority: false,
    },
    {
      name: 'Massachusetts',
      abbrv: 'MA',
      validAddress: {
        street: '40 Berkeley St',
        city: 'Boston',
        postalCode: '02116',
      },
      priority: false,
    },
    {
      name: 'Michigan',
      abbrv: 'MI',
      validAddress: {
        street: '3600 Village Harbor Dr',
        city: 'Bay Harbor',
        postalCode: '49770',
      },
      priority: false,
    },
    {
      name: 'Minnesota',
      abbrv: 'MN',
      validAddress: {
        street: '19 N 8th St',
        city: 'Minneapolis',
        postalCode: '55403',
      },
      priority: false,
    },
    {
      name: 'Mississippi',
      abbrv: 'MS',
      validAddress: {
        street: '493 Springridge Rd',
        city: 'Clinton',
        postalCode: '39056',
      },
      priority: false,
    },
    {
      name: 'Missouri',
      abbrv: 'MO',
      validAddress: {
        street: '315 Chestnut St',
        city: 'St. Louis',
        postalCode: '63102',
      },
      priority: false,
    },
    {
      name: 'Montana',
      abbrv: 'MT',
      validAddress: {
        street: '1380 Wisconsin Ave',
        city: 'Whitefish',
        postalCode: '59937',
      },
      priority: false,
    },
    {
      name: 'Nebraska',
      abbrv: 'NE',
      validAddress: {
        street: '10220 Regency Cir',
        city: 'Omaha',
        postalCode: '68114',
      },
      priority: false,
    },
    {
      name: 'Nevada',
      abbrv: 'NV',
      validAddress: {
        street: '3900 S Las Vegas Blvd',
        city: 'Las Vegas',
        postalCode: '89119',
      },
      priority: false,
    },
    {
      name: 'New Hampshire',
      abbrv: 'NH',
      validAddress: {
        street: '72 Common Ct',
        city: 'North Conway',
        postalCode: '03860',
      },
      priority: false,
    },
    {
      name: 'New Jersey',
      abbrv: 'NJ',
      validAddress: {
        street: '2831 Boardwalk',
        city: 'Atlantic City',
        postalCode: '08401',
      },
      priority: false,
    },
    {
      name: 'New Mexico',
      abbrv: 'NM',
      validAddress: {
        street: '6150 Iliff Rd NW',
        city: 'Albuquerque',
        postalCode: '87121',
      },
      priority: false,
    },
    {
      name: 'New York',
      abbrv: 'NY',
      validAddress: {
        street: '234 W 48th St',
        city: 'New York',
        postalCode: '10036',
      },
      priority: true,
    },
    {
      name: 'North Carolina',
      abbrv: 'NC',
      validAddress: {
        street: '3415 Wake Forest Rd',
        city: 'Raleigh',
        postalCode: '27609',
      },
      priority: false,
    },
    {
      name: 'North Dakota',
      abbrv: 'ND',
      validAddress: {
        street: '3316 13th Ave S',
        city: 'Fargo',
        postalCode: '58103',
      },
      priority: false,
    },
    {
      name: 'Ohio',
      abbrv: 'OH',
      validAddress: {
        street: '631 S Main St',
        city: 'Findlay',
        postalCode: '45840',
      },
      priority: false,
    },
    {
      name: 'Oklahoma',
      abbrv: 'OK',
      validAddress: {
        street: '741 N Phillips Ave',
        city: 'Oklahoma City',
        postalCode: '73104',
      },
      priority: false,
    },
    {
      name: 'Oregon',
      abbrv: 'OR',
      validAddress: {
        street: '203 NW 3rd Ave',
        city: 'Portland',
        postalCode: '97209',
      },
      priority: false,
    },
    {
      name: 'Pennsylvania',
      abbrv: 'PA',
      validAddress: {
        street: '8000 Jonestown Rd',
        city: 'Harrisburg',
        postalCode: '17112',
      },
      priority: false,
    },
    {
      name: 'Rhode Island',
      abbrv: 'RI',
      validAddress: {
        street: '1 Wave Ave',
        city: 'Middletown',
        postalCode: '02842',
      },
      priority: false,
    },
    {
      name: 'South Carolina',
      abbrv: 'SC',
      validAddress: {
        street: '1735 Stokes Rd',
        city: 'Florence',
        postalCode: '29501',
      },
      priority: false,
    },
    {
      name: 'South Dakota',
      abbrv: 'SD',
      validAddress: {
        street: '1314 N Elk Vale Rd',
        city: 'Rapid City',
        postalCode: '57703',
      },
      priority: false,
    },
    {
      name: 'Tennessee',
      abbrv: 'TN',
      validAddress: {
        street: '2800 Opryland Dr',
        city: 'Nashville',
        postalCode: '37214',
      },
      priority: false,
    },
    {
      name: 'Texas',
      abbrv: 'TX',
      validAddress: {
        street: '3000 Gulf Fwy',
        city: 'Texas City',
        postalCode: '77591',
      },
      priority: true,
    },
    {
      name: 'Utah',
      abbrv: 'UT',
      validAddress: {
        street: '30 N 100 E',
        city: 'Bryce Canyon City',
        postalCode: '84764',
      },
      priority: false,
    },
    {
      name: 'Vermont',
      abbrv: 'VT',
      validAddress: {
        street: '870 Williston Rd',
        city: 'South Burlington',
        postalCode: '05403',
      },
      priority: false,
    },
    {
      name: 'Virginia',
      abbrv: 'VA',
      validAddress: {
        street: '16250 International St',
        city: 'Doswell',
        postalCode: '23047',
      },
      priority: false,
    },
    {
      name: 'Washington',
      abbrv: 'WA',
      validAddress: {
        street: '3100 S 192nd St',
        city: 'Seattle',
        postalCode: '98188',
      },
      priority: false,
    },
    {
      name: 'West Virginia',
      abbrv: 'WV',
      validAddress: {
        street: '417 Hurricane Creek Rd',
        city: 'Hurricane',
        postalCode: '25526',
      },
      priority: false,
    },
    {
      name: 'Wisconsin',
      abbrv: 'WI',
      validAddress: {
        street: '1001 Wisconsin Pl',
        city: 'Madison',
        postalCode: '53703',
      },
      priority: false,
    },
    {
      name: 'Wyoming',
      abbrv: 'WY',
      validAddress: {
        street: '1055 Wild Horse Canyon Rd',
        city: 'Green River',
        postalCode: '82935',
      },
      priority: false,
    },
  ];

  static readonly caProvinces = [
    {
      name: 'Alberta',
      abbrv: 'AB',
      validAddress: {
        street: '5940 Blackfoot Trail SE',
        city: 'Calgary',
        postalCode: 'T2H 2B5',
      },
      priority: true,
    },
    {
      name: 'British Columbia',
      abbrv: 'BC',
      validAddress: {
        street: '4050 Whistler Way',
        city: 'Whistler',
        postalCode: 'V8E 1H9',
      },
      priority: true,
    },
    {
      name: 'Manitoba',
      abbrv: 'MB',
      validAddress: {
        street: '222 Broadway',
        city: 'Winnipeg',
        postalCode: 'R3C 0R3',
      },
      priority: true,
    },
    {
      name: 'New Brunswick',
      abbrv: 'NB',
      validAddress: {
        street: '39 King St',
        city: 'Saint John',
        postalCode: 'E2L 4W3',
      },
      priority: true,
    },
    {
      name: 'Newfoundland and Labrador',
      abbrv: 'NL',
      validAddress: {
        street: '115 Cavendish Square',
        city: 'St. Johns',
        postalCode: 'A1C 3K2',
      },
      priority: true,
    },
    {
      name: 'Northwest Territories',
      abbrv: 'NT',
      validAddress: {
        street: '4825 49th Ave',
        city: 'Yellowknife',
        postalCode: 'X1A 2R3',
      },
      priority: true,
    },
    {
      name: 'Nova Scotia',
      abbrv: 'NS',
      validAddress: {
        street: '1919 Upper Water St',
        city: 'Halifax',
        postalCode: 'B3J 3J5',
      },
      priority: true,
    },
    {
      name: 'Nunavut',
      abbrv: 'NU',
      validAddress: {
        street: '4110 Road to Nowhere',
        city: 'Iqaluit',
        postalCode: 'X0A 0H0',
      },
      priority: true,
    },
    {
      name: 'Ontario',
      abbrv: 'ON',
      validAddress: {
        street: '6361 Fallsview Blvd',
        city: 'Niagara Falls',
        postalCode: 'L2G 3V9',
      },
      priority: true,
    },
    {
      name: 'Prince Edward Island',
      abbrv: 'PE',
      validAddress: {
        street: '55 Weymouth St',
        city: 'Charlottetown',
        postalCode: 'C1A 1H1',
      },
      priority: true,
    },
    {
      name: 'Quebec',
      abbrv: 'QC',
      validAddress: {
        street: '1 Rue des Carrieres',
        city: 'Quebec',
        postalCode: 'G1R 4P5',
      },
      priority: true,
    },
    {
      name: 'Saskatchewan',
      abbrv: 'SK',
      validAddress: {
        street: '2125 Victoria Ave',
        city: 'Regina',
        postalCode: 'S4P 0S3',
      },
      priority: true,
    },
    {
      name: 'Yukon',
      abbrv: 'YT',
      validAddress: {
        street: '411 Main St',
        city: 'Whitehorse',
        postalCode: 'Y1A 2B6',
      },
      priority: true,
    },
  ];
  private page: Page;
  private baseURL: string;
  readonly ele_sddFooterProvince: Locator;
  readonly ele_sopFooterSelectedProvince: Locator;
  /**
   * Creates an instance of RegionsUtils.
   * @param {Page} page
   * @param {string} baseURL
   * @memberof RegionsUtils
   */
  constructor(page: Page, baseURL: string) {
    this.page = page;
    this.baseURL = baseURL;
    this.ele_sddFooterProvince = page.locator('#lsc_footer_region_selector_default .lsc_region_selector');
    this.ele_sopFooterSelectedProvince = page.locator('#lsc_footer_region_selector_default .lsc_region_selector option:checked');
  }

  /**
   *
   *
   * @return {*}  {Promise<string>}
   * @memberof RegionsUtils
   */
  async getCurrentSelectedProvinceFromFooter(): Promise<string> {
    return await this.ele_sopFooterSelectedProvince.innerText();
  }

  /**
   *
   *
   * @param {string} province
   * @return {*}  {Promise<void>}
   * @memberof RegionsUtils
   */
  async selectProvinceFromFooter(province: string): Promise<void> {
    await retryAsync(
      async () => {
        await this.ele_sddFooterProvince.selectOption({ label: `${province}` });
        return this.ele_sopFooterSelectedProvince.innerText();
      },
      {
        delay: 500,
        maxTry: 5,
        until: (lastResult) => lastResult === province,
      }
    );
  }
}
