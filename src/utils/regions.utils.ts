import { Locator, Page } from '@playwright/test';

/**
 * @export
 * @class RegionsUtils
 */
export default class RegionsUtils {
  static readonly usStates = [
    {
      abbrv: 'AL',
      name: 'Alabama',
      priority: false,
      validAddress: {
        city: 'Birmingham',
        postalCode: '35203',
        street: '2021 Park Pl',
      },
    },
    {
      abbrv: 'AK',
      name: 'Alaska',
      priority: false,
      validAddress: {
        city: 'Fairbanks',
        postalCode: '99712',
        street: '1110 John Kalinas Rd',
      },
    },
    {
      abbrv: 'AZ',
      name: 'Arizona',
      priority: false,
      validAddress: {
        city: 'Tempe',
        postalCode: '85282',
        street: '4400 S Rural Rd',
      },
    },
    {
      abbrv: 'AR',
      name: 'Arkansas',
      priority: false,
      validAddress: {
        city: 'Clarksville',
        postalCode: '72830',
        street: '2630 W Clark Rd',
      },
    },
    {
      abbrv: 'CA',
      name: 'California',
      priority: true,
      validAddress: {
        city: 'San Francisco',
        postalCode: '94108',
        street: '750 Kearny St',
      },
    },
    {
      abbrv: 'CO',
      name: 'Colorado',
      priority: false,
      validAddress: {
        city: 'Highlands Ranch',
        postalCode: '80126',
        street: ' 1050 Plaza Dr',
      },
    },
    {
      abbrv: 'CT',
      name: 'Connecticut',
      priority: false,
      validAddress: {
        city: 'East Hartford',
        postalCode: '06108',
        street: '351 Pitkin St',
      },
    },
    {
      abbrv: 'DE',
      name: 'Delaware',
      priority: false,
      validAddress: {
        city: 'Seaford',
        postalCode: '19973',
        street: '22871 Sussex Hwy',
      },
    },
    {
      abbrv: 'DC',
      name: 'District of Columbia',
      priority: false,
      validAddress: {
        city: 'Washington',
        postalCode: '20005',
        street: '1525 15th St NW',
      },
    },
    {
      abbrv: 'FL',
      name: 'Florida',
      priority: true,
      validAddress: {
        city: 'Miami',
        postalCode: '33122',
        street: '3550 NW 74th Ave',
      },
    },
    {
      abbrv: 'GA',
      name: 'Georgia',
      priority: true,
      validAddress: {
        city: 'McDonough',
        postalCode: '30253',
        street: '251 Avalon Ct',
      },
    },
    {
      abbrv: 'HI',
      name: 'Hawaii',
      priority: false,
      validAddress: {
        city: 'Kihei',
        postalCode: '96753',
        street: '3900 Wailea Alanui Dr',
      },
    },
    {
      abbrv: 'ID',
      name: 'Idaho',
      priority: false,
      validAddress: {
        city: 'Nampa',
        postalCode: '83687',
        street: '5750 E Franklin Rd',
      },
    },
    {
      abbrv: 'IL',
      name: 'Illinois',
      priority: false,
      validAddress: {
        city: 'Danville',
        postalCode: '61834',
        street: '370 Eastgate Dr',
      },
    },
    {
      abbrv: 'IN',
      name: 'Indiana',
      priority: false,
      validAddress: {
        city: 'Warsaw',
        postalCode: '46580',
        street: ' 200 Prosperity Dr',
      },
    },
    {
      abbrv: 'IA',
      name: 'Iowa',
      priority: false,
      validAddress: {
        city: 'Iowa City',
        postalCode: '52240',
        street: '255 E Court St',
      },
    },
    {
      abbrv: 'KS',
      name: 'Kansas',
      priority: false,
      validAddress: {
        city: 'Shawnee',
        postalCode: '66217',
        street: '17250 Midland Dr',
      },
    },
    {
      abbrv: 'KY',
      name: 'Kentucky',
      priority: false,
      validAddress: {
        city: 'Lexington',
        postalCode: '40507',
        street: '120 W 2nd St',
      },
    },
    {
      abbrv: 'LA',
      name: 'Louisiana',
      priority: false,
      validAddress: {
        city: 'New Orleans',
        postalCode: '70130',
        street: '555 Canal St',
      },
    },
    {
      abbrv: 'ME',
      name: 'Maine',
      priority: false,
      validAddress: {
        city: 'Portland',
        postalCode: '04102',
        street: '1050 Westbrook St',
      },
    },
    {
      abbrv: 'MD',
      name: 'Maryland',
      priority: false,
      validAddress: {
        city: 'Ocean City',
        postalCode: '21842',
        street: '6600 Coastal Hwy',
      },
    },
    {
      abbrv: 'MA',
      name: 'Massachusetts',
      priority: false,
      validAddress: {
        city: 'Boston',
        postalCode: '02116',
        street: '40 Berkeley St',
      },
    },
    {
      abbrv: 'MI',
      name: 'Michigan',
      priority: false,
      validAddress: {
        city: 'Bay Harbor',
        postalCode: '49770',
        street: '3600 Village Harbor Dr',
      },
    },
    {
      abbrv: 'MN',
      name: 'Minnesota',
      priority: false,
      validAddress: {
        city: 'Minneapolis',
        postalCode: '55403',
        street: '19 N 8th St',
      },
    },
    {
      abbrv: 'MS',
      name: 'Mississippi',
      priority: false,
      validAddress: {
        city: 'Clinton',
        postalCode: '39056',
        street: '493 Springridge Rd',
      },
    },
    {
      abbrv: 'MO',
      name: 'Missouri',
      priority: false,
      validAddress: {
        city: 'Odessa',
        postalCode: '64076',
        street: '336 E MAIN ST',
      },
    },
    {
      abbrv: 'MT',
      name: 'Montana',
      priority: false,
      validAddress: {
        city: 'Whitefish',
        postalCode: '59937',
        street: '1380 Wisconsin Ave',
      },
    },
    {
      abbrv: 'NE',
      name: 'Nebraska',
      priority: false,
      validAddress: {
        city: 'Omaha',
        postalCode: '68114',
        street: '10220 Regency Cir',
      },
    },
    {
      abbrv: 'NV',
      name: 'Nevada',
      priority: false,
      validAddress: {
        city: 'Las Vegas',
        postalCode: '89119',
        street: '3900 S Las Vegas Blvd',
      },
    },
    {
      abbrv: 'NH',
      name: 'New Hampshire',
      priority: false,
      validAddress: {
        city: 'North Conway',
        postalCode: '03860',
        street: '72 Common Ct',
      },
    },
    {
      abbrv: 'NJ',
      name: 'New Jersey',
      priority: false,
      validAddress: {
        city: 'Atlantic City',
        postalCode: '08401',
        street: '2831 Boardwalk',
      },
    },
    {
      abbrv: 'NM',
      name: 'New Mexico',
      priority: false,
      validAddress: {
        city: 'Albuquerque',
        postalCode: '87121',
        street: '6150 Iliff Rd NW',
      },
    },
    {
      abbrv: 'NY',
      name: 'New York',
      priority: true,
      validAddress: {
        city: 'New York',
        postalCode: '10036',
        street: '234 W 48th St',
      },
    },
    {
      abbrv: 'NC',
      name: 'North Carolina',
      priority: false,
      validAddress: {
        city: 'Raleigh',
        postalCode: '27609',
        street: '3415 Wake Forest Rd',
      },
    },
    {
      abbrv: 'ND',
      name: 'North Dakota',
      priority: false,
      validAddress: {
        city: 'Fargo',
        postalCode: '58103',
        street: '3316 13th Ave S',
      },
    },
    {
      abbrv: 'OH',
      name: 'Ohio',
      priority: false,
      validAddress: {
        city: 'Findlay',
        postalCode: '45840',
        street: '631 S Main St',
      },
    },
    {
      abbrv: 'OK',
      name: 'Oklahoma',
      priority: false,
      validAddress: {
        city: 'Oklahoma City',
        postalCode: '73104',
        street: '741 N Phillips Ave',
      },
    },
    {
      abbrv: 'OR',
      name: 'Oregon',
      priority: false,
      validAddress: {
        city: 'Portland',
        postalCode: '97209',
        street: '203 NW 3rd Ave',
      },
    },
    {
      abbrv: 'PA',
      name: 'Pennsylvania',
      priority: false,
      validAddress: {
        city: 'Harrisburg',
        postalCode: '17112',
        street: '8000 Jonestown Rd',
      },
    },
    {
      abbrv: 'RI',
      name: 'Rhode Island',
      priority: false,
      validAddress: {
        city: 'Middletown',
        postalCode: '02842',
        street: '1 Wave Ave',
      },
    },
    {
      abbrv: 'SC',
      name: 'South Carolina',
      priority: false,
      validAddress: {
        city: 'Florence',
        postalCode: '29501',
        street: '1735 Stokes Rd',
      },
    },
    {
      abbrv: 'SD',
      name: 'South Dakota',
      priority: false,
      validAddress: {
        city: 'Rapid City',
        postalCode: '57703',
        street: '1314 N Elk Vale Rd',
      },
    },
    {
      abbrv: 'TN',
      name: 'Tennessee',
      priority: false,
      validAddress: {
        city: 'Nashville',
        postalCode: '37214',
        street: '2800 Opryland Dr',
      },
    },
    {
      abbrv: 'TX',
      name: 'Texas',
      priority: true,
      validAddress: {
        city: 'Texas City',
        postalCode: '77591',
        street: '3000 Gulf Fwy',
      },
    },
    {
      abbrv: 'UT',
      name: 'Utah',
      priority: false,
      validAddress: {
        city: 'Bryce Canyon City',
        postalCode: '84764',
        street: '30 N 100 E',
      },
    },
    {
      abbrv: 'VT',
      name: 'Vermont',
      priority: false,
      validAddress: {
        city: 'South Burlington',
        postalCode: '05403',
        street: '870 Williston Rd',
      },
    },
    {
      abbrv: 'VA',
      name: 'Virginia',
      priority: false,
      validAddress: {
        city: 'Doswell',
        postalCode: '23047',
        street: '16250 International St',
      },
    },
    {
      abbrv: 'WA',
      name: 'Washington',
      priority: false,
      validAddress: {
        city: 'Seattle',
        postalCode: '98188',
        street: '3100 S 192nd St',
      },
    },
    {
      abbrv: 'WV',
      name: 'West Virginia',
      priority: false,
      validAddress: {
        city: 'Hurricane',
        postalCode: '25526',
        street: '417 Hurricane Creek Rd',
      },
    },
    {
      abbrv: 'WI',
      name: 'Wisconsin',
      priority: false,
      validAddress: {
        city: 'Madison',
        postalCode: '53703',
        street: '1001 Wisconsin Pl',
      },
    },
    {
      abbrv: 'WY',
      name: 'Wyoming',
      priority: false,
      validAddress: {
        city: 'Green River',
        postalCode: '82935',
        street: '1055 Wild Horse Canyon Rd',
      },
    },
  ];
  static readonly usSpanishStates = [
    {
      abbrv: 'AL',
      name: 'Alabama',
      priority: false,
      validAddress: {
        city: 'Birmingham',
        postalCode: '35203',
        street: '2021 Park Pl',
      },
    },
    {
      abbrv: 'AK',
      name: 'Alaska',
      priority: false,
      validAddress: {
        city: 'Fairbanks',
        postalCode: '99712',
        street: '1110 John Kalinas Rd',
      },
    },
    {
      abbrv: 'AZ',
      name: 'Arizona',
      priority: false,
      validAddress: {
        city: 'Tempe',
        postalCode: '85282',
        street: '4400 S Rural Rd',
      },
    },
    {
      abbrv: 'AR',
      name: 'Arkansas',
      priority: false,
      validAddress: {
        city: 'Clarksville',
        postalCode: '72830',
        street: '2630 W Clark Rd',
      },
    },
    {
      abbrv: 'CA',
      name: 'California',
      priority: true,
      validAddress: {
        city: 'San Francisco',
        postalCode: '94108',
        street: '750 Kearny St',
      },
    },
    {
      abbrv: 'CO',
      name: 'Colorado',
      priority: false,
      validAddress: {
        city: 'Highlands Ranch',
        postalCode: '80126',
        street: ' 1050 Plaza Dr',
      },
    },
    {
      abbrv: 'CT',
      name: 'Connecticut',
      priority: false,
      validAddress: {
        city: 'East Hartford',
        postalCode: '06108',
        street: '351 Pitkin St',
      },
    },
    {
      abbrv: 'DE',
      name: 'Delaware',
      priority: false,
      validAddress: {
        city: 'Seaford',
        postalCode: '19973',
        street: '22871 Sussex Hwy',
      },
    },
    {
      abbrv: 'DC',
      name: 'Distrito de Columbia',
      priority: false,
      validAddress: {
        city: 'Washington',
        postalCode: '20005',
        street: '1525 15th St NW',
      },
    },
    {
      abbrv: 'FL',
      name: 'Florida',
      priority: true,
      validAddress: {
        city: 'Miami',
        postalCode: '33122',
        street: '3550 NW 74th Ave',
      },
    },
    {
      abbrv: 'GA',
      name: 'Georgia',
      priority: true,
      validAddress: {
        city: 'McDonough',
        postalCode: '30253',
        street: '251 Avalon Ct',
      },
    },
    {
      abbrv: 'HI',
      name: 'Hawái',
      priority: false,
      validAddress: {
        city: 'Kihei',
        postalCode: '96753',
        street: '3900 Wailea Alanui Dr',
      },
    },
    {
      abbrv: 'ID',
      name: 'Idaho',
      priority: false,
      validAddress: {
        city: 'Nampa',
        postalCode: '83687',
        street: '5750 E Franklin Rd',
      },
    },
    {
      abbrv: 'IL',
      name: 'Illinois',
      priority: false,
      validAddress: {
        city: 'Danville',
        postalCode: '61834',
        street: '370 Eastgate Dr',
      },
    },
    {
      abbrv: 'IN',
      name: 'Indiana',
      priority: false,
      validAddress: {
        city: 'Warsaw',
        postalCode: '46580',
        street: ' 200 Prosperity Dr',
      },
    },
    {
      abbrv: 'IA',
      name: 'Iowa',
      priority: false,
      validAddress: {
        city: 'Iowa City',
        postalCode: '52240',
        street: '255 E Court St',
      },
    },
    {
      abbrv: 'KS',
      name: 'Kansas',
      priority: false,
      validAddress: {
        city: 'Shawnee',
        postalCode: '66217',
        street: '17250 Midland Dr',
      },
    },
    {
      abbrv: 'KY',
      name: 'Kentucky',
      priority: false,
      validAddress: {
        city: 'Lexington',
        postalCode: '40507',
        street: '120 W 2nd St',
      },
    },
    {
      abbrv: 'LA',
      name: 'Luisiana',
      priority: false,
      validAddress: {
        city: 'New Orleans',
        postalCode: '70130',
        street: '555 Canal St',
      },
    },
    {
      abbrv: 'ME',
      name: 'Maine',
      priority: false,
      validAddress: {
        city: 'Portland',
        postalCode: '04102',
        street: '1050 Westbrook St',
      },
    },
    {
      abbrv: 'MD',
      name: 'Maryland',
      priority: false,
      validAddress: {
        city: 'Ocean City',
        postalCode: '21842',
        street: '6600 Coastal Hwy',
      },
    },
    {
      abbrv: 'MA',
      name: 'Massachusetts',
      priority: false,
      validAddress: {
        city: 'Boston',
        postalCode: '02116',
        street: '40 Berkeley St',
      },
    },
    {
      abbrv: 'MI',
      name: 'Michigan',
      priority: false,
      validAddress: {
        city: 'Bay Harbor',
        postalCode: '49770',
        street: '3600 Village Harbor Dr',
      },
    },
    {
      abbrv: 'MN',
      name: 'Minnesota',
      priority: false,
      validAddress: {
        city: 'Minneapolis',
        postalCode: '55403',
        street: '19 N 8th St',
      },
    },
    {
      abbrv: 'MS',
      name: 'Mississippi',
      priority: false,
      validAddress: {
        city: 'Clinton',
        postalCode: '39056',
        street: '493 Springridge Rd',
      },
    },
    {
      abbrv: 'MO',
      name: 'Misuri',
      priority: false,
      validAddress: {
        city: 'Odessa',
        postalCode: '64076',
        street: '336 E MAIN ST',
      },
    },
    {
      abbrv: 'MT',
      name: 'Montana',
      priority: false,
      validAddress: {
        city: 'Whitefish',
        postalCode: '59937',
        street: '1380 Wisconsin Ave',
      },
    },
    {
      abbrv: 'NE',
      name: 'Nebraska',
      priority: false,
      validAddress: {
        city: 'Omaha',
        postalCode: '68114',
        street: '10220 Regency Cir',
      },
    },
    {
      abbrv: 'NV',
      name: 'Nevada',
      priority: false,
      validAddress: {
        city: 'Las Vegas',
        postalCode: '89119',
        street: '3900 S Las Vegas Blvd',
      },
    },
    {
      abbrv: 'NH',
      name: 'New Hampshire',
      priority: false,
      validAddress: {
        city: 'North Conway',
        postalCode: '03860',
        street: '72 Common Ct',
      },
    },
    {
      abbrv: 'NJ',
      name: 'New Jersey',
      priority: false,
      validAddress: {
        city: 'Atlantic City',
        postalCode: '08401',
        street: '2831 Boardwalk',
      },
    },
    {
      abbrv: 'NM',
      name: 'Nuevo México',
      priority: false,
      validAddress: {
        city: 'Albuquerque',
        postalCode: '87121',
        street: '6150 Iliff Rd NW',
      },
    },
    {
      abbrv: 'NY',
      name: 'Nueva York',
      priority: true,
      validAddress: {
        city: 'Brooklyn',
        postalCode: '11249',
        street: '2 Franklin Ave',
      },
    },
    {
      abbrv: 'NC',
      name: 'Carolina del Norte',
      priority: false,
      validAddress: {
        city: 'Raleigh',
        postalCode: '27609',
        street: '3415 Wake Forest Rd',
      },
    },
    {
      abbrv: 'ND',
      name: 'Dakota del Norte',
      priority: false,
      validAddress: {
        city: 'Fargo',
        postalCode: '58103',
        street: '3316 13th Ave S',
      },
    },
    {
      abbrv: 'OH',
      name: 'Ohio',
      priority: false,
      validAddress: {
        city: 'Findlay',
        postalCode: '45840',
        street: '631 S Main St',
      },
    },
    {
      abbrv: 'OK',
      name: 'Oklahoma',
      priority: false,
      validAddress: {
        city: 'Oklahoma City',
        postalCode: '73104',
        street: '741 N Phillips Ave',
      },
    },
    {
      abbrv: 'OR',
      name: 'Oregón',
      priority: false,
      validAddress: {
        city: 'Portland',
        postalCode: '97209',
        street: '203 NW 3rd Ave',
      },
    },
    {
      abbrv: 'PA',
      name: 'Pensilvania',
      priority: false,
      validAddress: {
        city: 'Harrisburg',
        postalCode: '17112',
        street: '8000 Jonestown Rd',
      },
    },
    {
      abbrv: 'RI',
      name: 'Rhode Island',
      priority: false,
      validAddress: {
        city: 'Middletown',
        postalCode: '02842',
        street: '1 Wave Ave',
      },
    },
    {
      abbrv: 'SC',
      name: 'Carolina del Sur',
      priority: false,
      validAddress: {
        city: 'Florence',
        postalCode: '29501',
        street: '1735 Stokes Rd',
      },
    },
    {
      abbrv: 'SD',
      name: 'Dakota del Sur',
      priority: false,
      validAddress: {
        city: 'Rapid City',
        postalCode: '57703',
        street: '1314 N Elk Vale Rd',
      },
    },
    {
      abbrv: 'TN',
      name: 'Tennesse',
      priority: false,
      validAddress: {
        city: 'Nashville',
        postalCode: '37214',
        street: '2800 Opryland Dr',
      },
    },
    {
      abbrv: 'TX',
      name: 'Texas',
      priority: true,
      validAddress: {
        city: 'Texas City',
        postalCode: '77591',
        street: '3000 Gulf Fwy',
      },
    },
    {
      abbrv: 'UT',
      name: 'Utah',
      priority: false,
      validAddress: {
        city: 'Bryce Canyon City',
        postalCode: '84764',
        street: '30 N 100 E',
      },
    },
    {
      abbrv: 'VT',
      name: 'Vermont',
      priority: false,
      validAddress: {
        city: 'South Burlington',
        postalCode: '05403',
        street: '870 Williston Rd',
      },
    },
    {
      abbrv: 'VA',
      name: 'Virginia',
      priority: false,
      validAddress: {
        city: 'Doswell',
        postalCode: '23047',
        street: '16250 International St',
      },
    },
    {
      abbrv: 'WA',
      name: 'Washington',
      priority: false,
      validAddress: {
        city: 'Seattle',
        postalCode: '98188',
        street: '3100 S 192nd St',
      },
    },
    {
      abbrv: 'WV',
      name: 'Virginia Occidental',
      priority: false,
      validAddress: {
        city: 'Hurricane',
        postalCode: '25526',
        street: '417 Hurricane Creek Rd',
      },
    },
    {
      abbrv: 'WI',
      name: 'Wisconsin',
      priority: false,
      validAddress: {
        city: 'Madison',
        postalCode: '53703',
        street: '1001 Wisconsin Pl',
      },
    },
    {
      abbrv: 'WY',
      name: 'Wyoming',
      priority: false,
      validAddress: {
        city: 'Green River',
        postalCode: '82935',
        street: '1055 Wild Horse Canyon Rd',
      },
    },
  ];
  static readonly caProvinces = [
    {
      abbrv: 'AB',
      expectedWalsProducts: ['Business Builder', 'Legal Plan', 'IDShield Plan', 'Small Business Plan', 'Associate Startup', 'Legal & Identity'],
      name: 'Alberta',
      priority: true,
      validAddress: {
        city: 'Calgary',
        postalCode: 'T2H 2B5',
        street: '5940 Blackfoot Trail SE',
      },
    },
    {
      abbrv: 'BC',
      expectedWalsProducts: ['Business Builder', 'Legal Plan', 'IDShield Plan', 'Small Business Plan', 'Associate Startup', 'Legal & Identity'],
      name: 'British Columbia',
      priority: true,
      validAddress: {
        city: 'Whistler',
        postalCode: 'V8E 1H9',
        street: '4050 Whistler Way',
      },
    },
    {
      abbrv: 'MB',
      expectedWalsProducts: ['Business Builder', 'Legal Plan', 'IDShield Plan', 'Small Business Plan', 'Associate Startup', 'Legal & Identity'],
      name: 'Manitoba',
      priority: true,
      validAddress: {
        city: 'Winnipeg',
        postalCode: 'R3C 0R3',
        street: '222 Broadway',
      },
    },
    {
      abbrv: 'NB',
      expectedWalsProducts: ['IDShield Plan', 'Associate Startup'],
      name: 'New Brunswick',
      priority: true,
      validAddress: {
        city: 'Saint John',
        postalCode: 'E2L 4W3',
        street: '39 King St',
      },
    },
    {
      abbrv: 'NL',
      expectedWalsProducts: ['IDShield Plan', 'Associate Startup'],
      name: 'Newfoundland and Labrador',
      priority: true,
      validAddress: {
        city: 'Mount Pearl',
        postalCode: 'A1N 1H9',
        street: '12 Park Ave',
      },
    },
    {
      abbrv: 'NT',
      expectedWalsProducts: ['IDShield Plan', 'Associate Startup'],
      name: 'Northwest Territories',
      priority: true,
      validAddress: {
        city: 'Yellowknife',
        postalCode: 'X1A 2R3',
        street: '4825 49th Ave',
      },
    },
    {
      abbrv: 'NS',
      expectedWalsProducts: ['IDShield Plan', 'Associate Startup'],
      name: 'Nova Scotia',
      priority: true,
      validAddress: {
        city: 'Halifax',
        postalCode: 'B3J 3J5',
        street: '1919 Upper Water St',
      },
    },
    {
      abbrv: 'NU',
      expectedWalsProducts: ['IDShield Plan', 'Associate Startup'],
      name: 'Nunavut',
      priority: true,
      validAddress: {
        city: 'Iqaluit',
        postalCode: 'X0A 0H0',
        street: '4110 Road to Nowhere',
      },
    },
    {
      abbrv: 'ON',
      expectedWalsProducts: ['Business Builder', 'Legal Plan', 'IDShield Plan', 'Small Business Plan', 'Associate Startup', 'Legal & Identity'],
      name: 'Ontario',
      priority: true,
      validAddress: {
        city: 'Niagara Falls',
        postalCode: 'L2G 3V9',
        street: '6361 Fallsview Blvd',
      },
    },
    {
      abbrv: 'PE',
      expectedWalsProducts: ['IDShield Plan', 'Associate Startup'],
      name: 'Prince Edward Island',
      priority: true,
      validAddress: {
        city: 'Charlottetown',
        postalCode: 'C1A 1H1',
        street: '55 Weymouth St',
      },
    },
    {
      abbrv: 'QC',
      expectedWalsProducts: ['IDShield Plan', 'Associate Startup'],
      name: 'Quebec',
      priority: true,
      validAddress: {
        city: 'Quebec',
        postalCode: 'G1R 4P5',
        street: '1 Rue des Carrieres',
      },
    },
    {
      abbrv: 'SK',
      expectedWalsProducts: ['Business Builder', 'Legal Plan', 'IDShield Plan', 'Small Business Plan', 'Associate Startup', 'Legal & Identity'],
      name: 'Saskatchewan',
      priority: true,
      validAddress: {
        city: 'Regina',
        postalCode: 'S4P 0S3',
        street: '2125 Victoria Ave',
      },
    },
    {
      abbrv: 'YT',
      expectedWalsProducts: ['IDShield Plan', 'Associate Startup'],
      name: 'Yukon',
      priority: true,
      validAddress: {
        city: 'Whitehorse',
        postalCode: 'Y1A 2B6',
        street: '411 Main St',
      },
    },
  ];
  static readonly caFrenchProvinces = [
    {
      abbrv: 'AB',
      expectedWalsProducts: [
        "Bâtisseur d'Entreprise",
        'Legal Plan',
        'Plan IDShield',
        'Plan pour les petites entreprises',
        'Démarrage pour Associés',
        'Juridique & Identité',
      ],
      name: 'Alberta',
      priority: true,
      validAddress: {
        city: 'Calgary',
        postalCode: 'T2H 2B5',
        street: '5940 Blackfoot Trail SE',
      },
    },
    {
      abbrv: 'BC',
      expectedWalsProducts: [
        "Bâtisseur d'Entreprise",
        'Legal Plan',
        'Plan IDShield',
        'Plan pour les petites entreprises',
        'Démarrage pour Associés',
        'Juridique & Identité',
      ],
      name: 'la Colombie-Britannique',
      priority: true,
      validAddress: {
        city: 'Whistler',
        postalCode: 'V8E 1H9',
        street: '4050 Whistler Way',
      },
    },
    {
      abbrv: 'MB',
      expectedWalsProducts: [
        "Bâtisseur d'Entreprise",
        'Legal Plan',
        'Plan IDShield',
        'Plan pour les petites entreprises',
        'Démarrage pour Associés',
        'Juridique & Identité',
      ],
      name: 'Manitoba',
      priority: true,
      validAddress: {
        city: 'Winnipeg',
        postalCode: 'R3C 0R3',
        street: '222 Broadway',
      },
    },
    {
      abbrv: 'NB',
      expectedWalsProducts: ['Plan IDShield', 'Démarrage pour Associés'],
      name: 'Nouveau-Brunswick',
      priority: true,
      validAddress: {
        city: 'Saint John',
        postalCode: 'E2L 4W3',
        street: '39 King St',
      },
    },
    {
      abbrv: 'NL',
      expectedWalsProducts: ['Plan IDShield', 'Démarrage pour Associés'],
      name: 'Terre-Neuve-et-Labrador',
      priority: true,
      validAddress: {
        city: 'Mount Pearl',
        postalCode: 'A1N 1H9',
        street: '12 Park Ave',
      },
    },
    {
      abbrv: 'NT',
      expectedWalsProducts: ['Plan IDShield', 'Démarrage pour Associés'],
      name: 'Territoires du nord-ouest',
      priority: true,
      validAddress: {
        city: 'Yellowknife',
        postalCode: 'X1A 1A7',
        street: '4825 49th Ave',
      },
    },
    {
      abbrv: 'NS',
      expectedWalsProducts: ['Plan IDShield', 'Démarrage pour Associés'],
      name: 'Nouvelle-Écosse',
      priority: true,
      validAddress: {
        city: 'Halifax',
        postalCode: 'B3J 3J5',
        street: '1919 Upper Water St',
      },
    },
    {
      abbrv: 'NU',
      expectedWalsProducts: ['Plan IDShield', 'Démarrage pour Associés'],
      name: 'Nunavut',
      priority: true,
      validAddress: {
        city: 'Iqaluit',
        postalCode: 'X0A 0H0',
        street: '4110 Road to Nowhere',
      },
    },
    {
      abbrv: 'ON',
      expectedWalsProducts: [
        "Bâtisseur d'Entreprise",
        'Legal Plan',
        'Plan IDShield',
        'Plan pour les petites entreprises',
        'Démarrage pour Associés',
        'Juridique & Identité',
      ],
      name: 'Ontario',
      priority: true,
      validAddress: {
        city: 'Niagara Falls',
        postalCode: 'L2G 3V9',
        street: '6361 Fallsview Blvd',
      },
    },
    {
      abbrv: 'PE',
      expectedWalsProducts: ['Plan IDShield', 'Démarrage pour Associés'],
      name: 'Île-du-Prince-Édouard',
      priority: true,
      validAddress: {
        city: 'Charlottetown',
        postalCode: 'C1A 1H1',
        street: '55 Weymouth St',
      },
    },
    {
      abbrv: 'QC',
      expectedWalsProducts: ['Plan IDShield', 'Démarrage pour Associés'],
      name: 'Québec',
      priority: true,
      validAddress: {
        city: 'Québec',
        postalCode: 'G1R 4P5',
        street: '1 Rue des Carrieres',
      },
    },
    {
      abbrv: 'SK',
      expectedWalsProducts: [
        "Bâtisseur d'Entreprise",
        'Legal Plan',
        'Plan IDShield',
        'Plan pour les petites entreprises',
        'Démarrage pour Associés',
        'Juridique & Identité',
      ],
      name: 'Saskatchewan',
      priority: true,
      validAddress: {
        city: 'Regina',
        postalCode: 'S4P 0S3',
        street: '2125 Victoria Ave',
      },
    },
    {
      abbrv: 'YT',
      expectedWalsProducts: ['Plan IDShield', 'Démarrage pour Associés'],
      name: 'Yukon',
      priority: true,
      validAddress: {
        city: 'Whitehorse',
        postalCode: 'Y1A 2B6',
        street: '411 Main St',
      },
    },
  ];
  private page: Page;
  private baseURL: string;
  readonly eleSDDFooterProvince: Locator;
  readonly eleSOPFooterSelectedProvince: Locator;
  /**
   * Creates an instance of RegionsUtils.
   * @param {Page} page
   * @param {string} baseURL
   * @memberof RegionsUtils
   */
  constructor(page: Page, baseURL: string) {
    this.page = page;
    this.baseURL = baseURL;
    this.eleSDDFooterProvince = page.locator('#lsc_footer_region_selector_default .lsc_region_selector');
    this.eleSOPFooterSelectedProvince = page.locator('#lsc_footer_region_selector_default .lsc_region_selector option:checked');
  }

  /**
   *
   *
   * @return {*}  {Promise<string>}
   * @memberof RegionsUtils
   */
  async getCurrentSelectedProvinceFromFooter(): Promise<string> {
    return await this.eleSOPFooterSelectedProvince.innerText();
  }

  /**
   *
   *
   * @param {string} province
   * @return {*}  {Promise<void>}
   * @memberof RegionsUtils
   */
  // async selectProvinceFromFooter(province: string): Promise<void> {
  // // eslint-disable-next-line no-undef
  // await retryAsync(
  //   async () => {
  //     await this.ele_sddFooterProvince.selectOption({ label: `${province}` });
  //     return this.ele_sopFooterSelectedProvince.innerText();
  //   },
  //   {
  //     delay: 500,
  //     maxTry: 5,
  //     until: (lastResult) => lastResult === province,
  //   }
  // );
  // }
}
