import { Locator, Page } from '@playwright/test';
import { retryAsync } from 'ts-retry';

export default class RegionsUtils {
  static readonly usStates = [
      {
        'name': 'Alabama',
        'abbrv': 'AL',
        'validAddress': {
          'street':'2021 Park Pl',
          'city':'Birmingham',
          'zip':'35203'
        }
      },
      {
        'name': 'Alaska',
        'abbrv': 'AK',
        'validAddress': {
          'street':'1110 John Kalinas Rd',
          'city':'Fairbanks',
          'zip':'99712'
        }
      },
      {
        'name': 'Arizona',
        'abbrv': 'AZ',
        'validAddress': {
          'street':'4400 S Rural Rd',
          'city':'Tempe',
          'zip':'85282'
        }
      },
      {
        'name': 'Arkansas',
        'abbrv': 'AR',
        'validAddress': {
          'street':'2630 W Clark Rd',
          'city':'Clarksville',
          'zip':'72830'
        }
      },
      {
        'name': 'California',
        'abbrv': 'CA',
        'validAddress': {
          'street':'750 Kearny St',
          'city':'San Francisco',
          'zip':'94108'
        }
      },
      {
        'name': 'Colorado',
        'abbrv': 'CO',
        'validAddress': {
          'street':' 1050 Plaza Dr',
          'city':'Highlands Ranch',
          'zip':'80126'
        }
      },
      {
        'name': 'Connecticut',
        'abbrv': 'CT',
        'validAddress': {
          'street':'351 Pitkin St',
          'city':'East Hartford',
          'zip':'06108'
        }
      },
      {
        'name': 'Delaware',
        'abbrv': 'DE',
        'validAddress': {
          'street':'22871 Sussex Hwy',
          'city':'Seaford',
          'zip':'19973'
        }
      },
      {
        'name': 'District of Columbia',
        'abbrv': 'DC',
        'validAddress': {
          'street':'1525 15th St NW',
          'city':'Washington',
          'zip':'20005'
        }
      },
      {
        'name': 'Florida',
        'abbrv': 'FL',
        'validAddress': {
          'street':'3550 NW 74th Ave',
          'city':'Miami',
          'zip':'33122'
        }
      },
      {
        'name': 'Georgia',
        'abbrv': 'GA',
        'validAddress': {
          'street':'251 Avalon Ct',
          'city':'McDonough',
          'zip':'30253'
        }
      },
      {
        'name': 'Hawaii',
        'abbrv': 'HI',
        'validAddress': {
          'street':'3900 Wailea Alanui Dr',
          'city':'Kihei',
          'zip':'96753'
        }
      },
      {
        'name': 'Idaho',
        'abbrv': 'ID',
        'validAddress': {
          'street':'5750 E Franklin Rd',
          'city':'Nampa',
          'zip':'83687'
        }
      },
      {
        'name': 'Illinois',
        'abbrv': 'IL',
        'validAddress': {
          'street':'370 Eastgate Dr',
          'city':'Danville',
          'zip':'61834'
        }
      },
      {
        'name': 'Indiana',
        'abbrv': 'IN',
        'validAddress': {
          'street':' 200 Prosperity Dr',
          'city':'Warsaw',
          'zip':'46580'
        }
      },
      {
        'name': 'Iowa',
        'abbrv': 'IA',
        'validAddress': {
          'street':'255 E Court St',
          'city':'Iowa City',
          'zip':'52240'
        }
      },
      {
        'name': 'Kansas',
        'abbrv': 'KS',
        'validAddress': {
          'street':'17250 Midland Dr',
          'city':'Shawnee',
          'zip':'66217'
        }
      },
      {
        'name': 'Kentucky',
        'abbrv': 'KY',
        'validAddress': {
          'street':'120 W 2nd St',
          'city':'Lexington',
          'zip':'40507'
        }
      },
      {
        'name': 'Louisiana',
        'abbrv': 'LA',
        'validAddress': {
          'street':'555 Canal St',
          'city':'New Orleans',
          'zip':'70130'
        }
      },
      {
        'name': 'Maine',
        'abbrv': 'ME',
        'validAddress': {
          'street':'1050 Westbrook St',
          'city':'Portland',
          'zip':'04102'
        }
      },
      {
        'name': 'Maryland',
        'abbrv': 'MD',
        'validAddress': {
          'street':'6600 Coastal Hwy',
          'city':'Ocean City',
          'zip':'21842'
        }
      },
      {
        'name': 'Massachusetts',
        'abbrv': 'MA',
        'validAddress': {
          'street':'40 Berkeley St',
          'city':'Boston',
          'zip':'02116'
        }
      },
      {
        'name': 'Michigan',
        'abbrv': 'MI',
        'validAddress': {
          'street':'3600 Village Harbor Dr',
          'city':'Bay Harbor',
          'zip':'49770'
        }
      },
      {
        'name': 'Minnesota',
        'abbrv': 'MN',
        'validAddress': {
          'street':'19 N 8th St',
          'city':'Minneapolis',
          'zip':'55403'
        }
      },
      {
        'name': 'Mississippi',
        'abbrv': 'MS',
        'validAddress': {
          'street':'493 Springridge Rd',
          'city':'Clinton',
          'zip':'39056'
        }
      },
      {
        'name': 'Missouri',
        'abbrv': 'MO',
        'validAddress': {
          'street':'315 Chestnut St',
          'city':'St. Louis',
          'zip':'63102'
        }
      },
      {
        'name': 'Montana',
        'abbrv': 'MT',
        'validAddress': {
          'street':'1380 Wisconsin Ave',
          'city':'Whitefish',
          'zip':'59937'
        }
      },
      {
        'name': 'Nebraska',
        'abbrv': 'NE',
        'validAddress': {
          'street':'10220 Regency Cir',
          'city':'Omaha',
          'zip':'68114'
        }
      },
      {
        'name': 'Nevada',
        'abbrv': 'NV',
        'validAddress': {
          'street':'3900 S Las Vegas Blvd',
          'city':'Las Vegas',
          'zip':'89119'
        }
      },
      {
        'name': 'New Hampshire',
        'abbrv': 'NH',
        'validAddress': {
          'street':'72 Common Ct',
          'city':'North Conway',
          'zip':'03860'
        }
      },
      {
        'name': 'New Jersey',
        'abbrv': 'NJ',
        'validAddress': {
          'street':'2831 Boardwalk',
          'city':'Atlantic City',
          'zip':'08401'
        }
      },
      {
        'name': 'New Mexico',
        'abbrv': 'NM',
        'validAddress': {
          'street':'6150 Iliff Rd NW',
          'city':'Albuquerque',
          'zip':'87121'
        }
      },
      {
        'name': 'New York',
        'abbrv': 'NY',
        'validAddress': {
          'street':'234 W 48th St',
          'city':'New York',
          'zip':'10036'
        }
      },
      {
        'name': 'North Carolina',
        'abbrv': 'NC',
        'validAddress': {
          'street':'3415 Wake Forest Rd',
          'city':'Raleigh',
          'zip':'27609'
        }
      },
      {
        'name': 'North Dakota',
        'abbrv': 'ND',
        'validAddress': {
          'street':'3316 13th Ave S',
          'city':'Fargo',
          'zip':'58103'
        }
      },
      {
        'name': 'Ohio',
        'abbrv': 'OH',
        'validAddress': {
          'street':'631 S Main St',
          'city':'Findlay',
          'zip':'45840'
        }
      },
      {
        'name': 'Oklahoma',
        'abbrv': 'OK',
        'validAddress': {
          'street':'741 N Phillips Ave',
          'city':'Oklahoma City',
          'zip':'73104'
        }
      },
      {
        'name': 'Oregon',
        'abbrv': 'OR',
        'validAddress': {
          'street':'203 NW 3rd Ave',
          'city':'Portland',
          'zip':'97209'
        }
      },
      {
        'name': 'Pennsylvania',
        'abbrv': 'PA',
        'validAddress': {
          'street':'8000 Jonestown Rd',
          'city':'Harrisburg',
          'zip':'17112'
        }
      },
      {
        'name': 'Rhode Island',
        'abbrv': 'RI',
        'validAddress': {
          'street':'1 Wave Ave',
          'city':'Middletown',
          'zip':'02842'
        }
      },
      {
        'name': 'South Carolina',
        'abbrv': 'SC',
        'validAddress': {
          'street':'1735 Stokes Rd',
          'city':'Florence',
          'zip':'29501'
        }
      },
      {
        'name': 'South Dakota',
        'abbrv': 'SD',
        'validAddress': {
          'street':'1314 N Elk Vale Rd',
          'city':'Rapid City',
          'zip':'57703'
        }
      },
      {
        'name': 'Tennessee',
        'abbrv': 'TN',
        'validAddress': {
          'street':'2800 Opryland Dr',
          'city':'Nashville',
          'zip':'37214'
        }
      },
      {
        'name': 'Texas',
        'abbrv': 'TX',
        'validAddress': {
          'street':'3000 Gulf Fwy',
          'city':'Texas City',
          'zip':'77591'
        }
      },
      {
        'name': 'Utah',
        'abbrv': 'UT',
        'validAddress': {
          'street':'30 N 100 E',
          'city':'Bryce Canyon City',
          'zip':'84764'
        }
      },
      {
        'name': 'Vermont',
        'abbrv': 'VT',
        'validAddress': {
          'street':'870 Williston Rd',
          'city':'South Burlington',
          'zip':'05403'
        }
      },
      {
        'name': 'Virginia',
        'abbrv': 'VA',
        'validAddress': {
          'street':'16250 International St',
          'city':'Doswell',
          'zip':'23047'
        }
      },
      {
        'name': 'Washington',
        'abbrv': 'WA',
        'validAddress': {
          'street':'3100 S 192nd St',
          'city':'Seattle',
          'zip':'98188'
        }
      },
      {
        'name': 'West Virginia',
        'abbrv': 'WV',
        'validAddress': {
          'street':'417 Hurricane Creek Rd',
          'city':'Hurricane',
          'zip':'25526'
        }
      },
      {
        'name': 'Wisconsin',
        'abbrv': 'WI',
        'validAddress': {
          'street':'1001 Wisconsin Pl',
          'city':'Madison',
          'zip':'53703'
        }
      },
      {
        'name': 'Wyoming',
        'abbrv': 'WY',
        'validAddress': {
          'street':'1055 Wild Horse Canyon Rd',
          'city':'Green River',
          'zip':'82935'
        }
      }
    ];

  static readonly caProvinces = [
    {
      name: 'Alberta',
      abbrv: 'AB',
    },
    {
      name: 'British Columbia',
      abbrv: 'BC',
    },
    {
      name: 'Manitoba',
      abbrv: 'MB',
    },
    {
      name: 'New Brunswick',
      abbrv: 'NB',
    },
    {
      name: 'Newfoundland and Labrador',
      abbrv: 'NL',
    },
    {
      name: 'Northwest Territories',
      abbrv: 'NT',
    },
    {
      name: 'Nova Scotia',
      abbrv: 'NS',
    },
    {
      name: 'Nunavut',
      abbrv: 'NU',
    },
    {
      name: 'Ontario',
      abbrv: 'ON',
    },
    {
      name: 'Prince Edward Island',
      abbrv: 'PE',
    },
    {
      name: 'Quebec',
      abbrv: 'QC',
    },
    {
      name: 'Saskatchewan',
      abbrv: 'SK',
    },
    {
      name: 'Yukon',
      abbrv: 'YT',
    },
  ];
  private page: Page;
  private baseURL: string;
  readonly ele_sddFooterProvince: Locator;
  readonly ele_sopFooterSelectedProvince: Locator;
  constructor(page: Page, baseURL: string) {
    this.page = page;
    this.baseURL = baseURL;
    this.ele_sddFooterProvince = page.locator('#lsc_footer_region_selector_default .lsc_region_selector');
    this.ele_sopFooterSelectedProvince = page.locator('#lsc_footer_region_selector_default .lsc_region_selector option:checked');
  }

  async getCurrentSelectedProvinceFromFooter(): Promise<string> {
    return await this.ele_sopFooterSelectedProvince.innerText();
  }

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
