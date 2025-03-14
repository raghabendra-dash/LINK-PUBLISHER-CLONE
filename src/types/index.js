// User schema
export const User = {
  id: '',
  name: '',
  email: '',
  phone: '',
  country: '',
  companyWebsite: '',
  identity: '',
  balance: 0,
  status: 'Active',
  joinedOn: '',
  whatsappUpdates: false,
  paymentInfo: {
    country: '',
    method: '',
    paypalEmail: ''
  }
};

// Website schema
export const Website = {
  id: '',
  name: '',
  domain: '',
  category: '',
  domainRating: 0,
  trafficScore: 0,
  monthlyVisits: 0,
  language: '',
  price: 0,
  indexing: {
    google: false,
    bing: false
  },
  metrics: {
    da: 0,
    dr: 0,
    traffic: 0
  },
  features: [],
  description: ''
};

// Filter schema
export const Filter = {
  category: '',
  language: '',
  priceRange: [0, 1000], 
  trafficRange: [0, 1000000],
  domainRating: 0,
  indexing: {
    google: false,
    bing: false
  }
};

// Order schema
export const Order = {
  id: '',
  date: '',
  websiteId: '',
  websiteName: '',
  status: 'pending', 
  price: 0,
  title: ''
};

// Transaction schema
export const Transaction = {
  id: '',
  date: '',
  type: 'credit', 
  amount: 0,
  description: '',
  balance: 0,
  referenceId: ''
};

// ContentOrder schema
export const ContentOrder = {
  language: '',
  wordCount: 0,
  category: '',
  anchorText: '',
  title: '',
  landingPageUrl: '',
  keywords: [],
  referenceLinks: [],
  writingStyle: '',
  targetCountry: '',
  notes: '',
  price: 0
};

// SeoTool schema
export const SeoTool = {
  id: '',
  name: '',
  description: '',
  icon: '',
  isNew: false,
  status: 'active' 
};
