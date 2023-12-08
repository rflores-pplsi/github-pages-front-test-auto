/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */
import UrlsUtils from '../../../utils/urls.utils';

export const legalshieldServiceData = [
  {
    disabled: true,
    pageName: 'Home',
    url: `${UrlsUtils.legalshieldService.baseUrl}`,
    heroSection: {
      included: true,
      expectedHeader: 'Affordable Legal Help Does Exist',
      expectedDescription: '',
      button: {
        included: true,
        expectedTitle: 'Legal Plans Overview, Get Online Legal Advice - LegalShield',
        expectedUrl: 'legalshield.com/legal-plans-overview',
      },
    },
    gridSection: {
      included: true,
      expectedHeaders: ['Wills and Estates', 'Family Law', 'Consumer Matters', 'Real Estate'],
      links: {
        expectedUrlsAndTitles: [
          { url: 'legalshield.com/estate-planning/', title: 'Find an Estate Planning Attorney & Get Legal Advice - LegalShield' },
          { url: 'legalshield.com/family-law/', title: 'Family Law Lawyers - Get Legal Advice & Ask Questions Online' },
          { url: 'legalshield.com/consumer-finance/', title: 'Consumer Finance & Consumer Rights Legal Advice - LegalShield' },
          { url: 'legalshield.com/real-estate/', title: 'Real Estate Lawyers & Online Legal Advice - LegalShield' },
        ],
      },
    },
    pricingSection: {
      included: true,
      expectedHeaders: ['Personal & Family', 'Small Business', 'Launch'],
      links: {
        addToCart: false,
        expectedPlanNameCostInCart: [],
        expectedUrlsAndTitles: [
          { url: 'legalshield.com/personal-plan/plan-details/', title: 'Personal & Family Prepaid Legal Services and Plans - LegalShield' },
          { url: 'legalshield.com/business-plan/plan-summary/', title: 'Small Business Legal Services & Protection - LegalShield' },
          { url: 'legalshield.com/start-a-business/', title: 'Starting a Business - Legal Consultation & Advice - LegalShield' },
        ],
      },
    },
    navListSection: {
      included: true,
      expectedHeaders: ['Personal & Family', 'Small Business', 'Launch'],
      links: {
        expectedUrlsAndTitles: [
          { url: 'legalshield.com/traffic-accident/', title: 'Find a Traffic Lawyer for Tickets & Violations - LegalShield' },
          { url: 'legalshield.com/renters/', title: 'Renters Rights - Find Your Renters Rights Attorney - LegalShield' },
          { url: 'legalshield.com/landlords/', title: 'Find a Landlord Attorney & Get Online Legal Advice - LegalShield' },
          {
            url: 'legalshield.com/legal-protection-truck-drivers-and-other-commercial-drivers/',
            title: 'Online Lawyers for Commercial & Truck Drivers - LegalShield',
          },
          {
            url: 'legalshield.com/legal-protection-home-business/',
            title: 'Home-Based Business Lawyers & Legal Advice - LegalShield - V2 - LegalShield',
          },
          {
            url: 'legalshield.com/extended-trial-and-lawsuit-defense-protection/',
            title: 'Affordable Civil Lawsuit Lawyers & Legal Advice - LegalShield',
          },
          { url: 'legalshield.com/intellectual-property/', title: 'Intellectual Property Protection & Rights - LegalShield' },
          { url: 'legalshield.com/collection/', title: 'Online Debt Collection Lawyers for Small Businesses - LegalShield' },
          { url: 'legalshield.com/contracts/', title: 'Online Contract Lawyers for Small Businesses - LegalShield' },
          { url: 'legalshield.com/employment-law/', title: "Workers' Rights Lawyers & Employment Law Advice - LegalShield" },
          { url: 'legalshield.com/business-licenses/', title: 'Apply for Business License Online - LegalShield' },
          { url: 'legalshield.com/civil-litigation/', title: 'Find a Civil Litigation Attorney for Your Business - LegalShield' },
          {
            url: 'legalshield.com/start-a-business/business-formation/articles-of-organization/',
            title: 'Online LLC Articles of Organization Filing - LegalShield',
          },
          { url: 'legalshield.com/start-a-business/business-formation/business-permits/', title: 'Business Permit Legal Advice - LegalShield' },
          {
            url: 'legalshield.com/start-a-business/business-formation/business-structure/',
            title: 'Selecting Your New Business Legal Structure - LegalShield',
          },
          {
            url: 'legalshield.com/start-a-business/business-formation/business-name-check/',
            title: 'Business Name Check - Register a Business Name - LegalShield',
          },
          {
            url: 'legalshield.com/start-a-business/business-formation/business-type-comparison-chart/',
            title: 'Different Types of Businesses - LegalShield Structure Chart',
          },
          { url: 'legalshield.com/start-a-business/business-formation/llc/', title: 'Starting an LLC - How to Form an LLC Online - LegalShield' },
        ],
      },
    },
    featuresGridSection: {
      included: false,
      expectedHeaders: [
        'Help with unlimited legal issues',
        'Affordable legal services for as little as $1/day',
        'Skilled, vetted lawyers in your area',
      ],
      links: {
        expectedUrlsAndTitles: [
          { url: 'legalshield.com/why-legalshield/how-it-works/', title: 'What is LegalShield? Learn How it Works - LegalShield' },
          { url: 'legalshield.com/legal-plans-overview/', title: 'Legal Plans Overview, Get Online Legal Advice - LegalShield' },
          { url: 'legalshield.com/law-firms/', title: 'Find a Traffic Lawyer for Tickets & Violations - LegalShield' },
        ],
      },
    },
  },
  {
    disabled: false,
    pageName: 'Personal Plan Coverage and Pricing',
    url: `${UrlsUtils.legalshieldService.baseUrl}/personal-plan/coverage-and-pricing/`,
    heroSection: {
      included: true,
      expectedHeader: 'Prepaid Legal Services Plans: Coverage & Pricing',
      expectedDescription:
        'Getting sound legal help shouldn’t have to cost you an arm and a leg. A LegalShield Personal Plan allows you and your family access to legal consultation and support on an unlimited number of legal matters—for a fraction of traditional law firm hourly rates.',
      button: {
        included: false,
        expectedTitle: '',
        expectedUrl: '',
      },
    },
    gridSection: { included: false, expectedHeaders: [], links: { expectedUrlsAndTitles: [] } },
    pricingSection: {
      included: true,
      expectedHeaders: ['Monthly Plan', 'Annual Plan'],
      links: {
        addToCart: true,
        expectedPlanNameCostInCart: [
          { name: 'Legal Plan', cost: '29.95' },
          { name: 'Legal Plan', cost: '299.40' },
        ],
        expectedUrlsAndTitles: [
          { url: 'legalshield.com/estate-planning/', title: 'Find an Estate Planning Attorney & Get Legal Advice - LegalShield' },
          { url: 'legalshield.com/family-law/', title: 'Family Law Lawyers - Get Legal Advice & Ask Questions Online' },
          { url: 'legalshield.com/consumer-finance/', title: 'Consumer Finance & Consumer Rights Legal Advice - LegalShield' },
          { url: 'legalshield.com/real-estate/', title: 'Real Estate Lawyers & Online Legal Advice - LegalShield' },
        ],
      },
    },
    navListSection: {
      included: false,
      expectedHeaders: [],
      links: {
        expectedUrlsAndTitles: [],
      },
    },
    featuresGridSection: {
      included: false,
      expectedHeaders: [],
      links: {
        expectedUrlsAndTitles: [],
      },
    },
  },
  {
    disabled: false,
    pageName: 'Legal Plans Overview',
    url: `${UrlsUtils.legalshieldService.baseUrl}/legal-plans-overview/`,
    heroSection: {
      included: true,
      expectedHeader: '',
      expectedDescription: '',
      button: {
        included: true,
        expectedTitle: 'Legal Plans Overview, Get Online Legal Advice - LegalShield',
        expectedUrl: 'legalshield.com/legal-plans-overview/',
      },
    },
    gridSection: {
      included: false,
      expectedHeaders: [],
      links: {
        expectedUrlsAndTitles: [],
      },
    },
    pricingSection: {
      included: false,
      expectedHeaders: [],
      links: {
        addToCart: false,
        expectedPlanNameCostInCart: [],
        expectedUrlsAndTitles: [],
      },
    },
    navListSection: {
      included: false,
      expectedHeaders: [],
      links: {
        expectedUrlsAndTitles: [],
      },
    },
    featuresGridSection: {
      included: true,
      expectedHeaders: [],
      links: {
        expectedUrlsAndTitles: [
          { url: 'legalshield.com/estate-planning/', title: 'Find an Estate Planning Attorney & Get Legal Advice - LegalShield' },
          { url: 'legalshield.com/renters/', title: 'Renters Rights - Find Your Renters Rights Attorney - LegalShield' },
          { url: 'legalshield.com/business-plan/plan-summary/', title: 'Small Business Legal Services & Protection - LegalShield' },
          { url: 'legalshield.com/family-law/', title: 'Family Law Lawyers - Get Legal Advice & Ask Questions Online' },
          { url: 'legalshield.com/employment/', title: 'Employment Lawyers & Online Legal Advice - LegalShield' },
          { url: 'legalshield.com/start-a-business/', title: 'Starting a Business - Legal Consultation & Advice - LegalShield' },
        ],
      },
    },
  },
];
