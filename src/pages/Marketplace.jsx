import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Info,
  Heart,
  Ban,
  Eye,
  ShoppingCart,
  AlertCircle,
  Globe,
  Star,
  TrendingUp,
  CheckCircle,
  DollarSign
} from 'lucide-react';

const mockWebsites = [
  {
    id: '1',
    domain: 'guardian.com',
    description: 'A popular tech website',
    domainRating: 75,
    authorityScore: 80,
    trustFlow: 70,
    price: 250,
    category: 'Technology',
    country: 'US',
    referringDomains: 120,
    totalBacklinks: 500,
    language: 'English',
    spamScore: 2,
    linkValidity: 'Good',
    trafficByCountry: 'US',
    minimumWordCount: 500,
    completionRatio: '95%',
    citationFlow: 60,
  },
  {
    id: '2',
    domain: 'businessinsider.com',
    description: 'Latest business news and trends',
    domainRating: 80,
    authorityScore: 85,
    trustFlow: 75,
    price: 300,
    category: 'Business',
    country: 'UK',
    referringDomains: 150,
    totalBacklinks: 600,
    language: 'English',
    spamScore: 3,
    linkValidity: 'Excellent',
    trafficByCountry: 'UK',
    minimumWordCount: 600,
    completionRatio: '90%',
    citationFlow: 65,
  },
  {
    id: '3',
    domain: 'healthline.com',
    description: 'Your daily dose of health tips',
    domainRating: 70,
    authorityScore: 75,
    trustFlow: 68,
    price: 200,
    category: 'Health',
    country: 'US',
    referringDomains: 100,
    totalBacklinks: 450,
    language: 'English',
    spamScore: 1,
    linkValidity: 'Good',
    trafficByCountry: 'US',
    minimumWordCount: 400,
    completionRatio: '97%',
    citationFlow: 55,
  },
  {
    id: '4',
    domain: 'marketingprofs.com',
    description: 'Top marketing strategies and tips',
    domainRating: 85,
    authorityScore: 88,
    trustFlow: 80,
    price: 350,
    category: 'Marketing',
    country: 'IN',
    referringDomains: 180,
    totalBacklinks: 700,
    language: 'English',
    spamScore: 4,
    linkValidity: 'Excellent',
    trafficByCountry: 'IN',
    minimumWordCount: 550,
    completionRatio: '92%',
    citationFlow: 70,
  },
  {
    id: '5',
    domain: 'financeweekly.com',
    description: 'Financial news and market updates',
    domainRating: 78,
    authorityScore: 82,
    trustFlow: 72,
    price: 280,
    category: 'Finance',
    country: 'CA',
    referringDomains: 130,
    totalBacklinks: 520,
    language: 'English',
    spamScore: 2,
    linkValidity: 'Good',
    trafficByCountry: 'CA',
    minimumWordCount: 480,
    completionRatio: '94%',
    citationFlow: 62,
  },
  {
    id: '6',
    domain: 'globalnews.com',
    description: 'Breaking news from around the globe',
    domainRating: 90,
    authorityScore: 92,
    trustFlow: 85,
    price: 400,
    category: 'News',
    country: 'AU',
    referringDomains: 200,
    totalBacklinks: 800,
    language: 'English',
    spamScore: 3,
    linkValidity: 'Excellent',
    trafficByCountry: 'AU',
    minimumWordCount: 650,
    completionRatio: '96%',
    citationFlow: 75,
  }
];


const Marketplace = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSort, setSelectedSort] = useState('relevance');
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [domainRatingRange, setDomainRatingRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [websites, setWebsites] = useState(mockWebsites);
  const [filteredWebsites, setFilteredWebsites] = useState(mockWebsites);
  const [wishlist, setWishlist] = useState([]);
  const [blocklist, setBlocklist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [cart, setCart] = useState([]);

  const categories = useMemo(() => [
    { name: 'Technology', count: websites.filter(w => w.category === 'Technology').length },
    { name: 'Business', count: websites.filter(w => w.category === 'Business').length },
  ], [websites]);

  const countries = useMemo(() => [
    { name: 'United States', code: 'US' },
    { name: 'United Kingdom', code: 'UK' },
    { name: 'India', code: 'IN' },
  ], []);

  const toggleWishlist = useCallback((websiteId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(websiteId)
        ? prevWishlist.filter((id) => id !== websiteId)
        : [...prevWishlist, websiteId]
    );
  }, []);

  const toggleBlocklist = useCallback((websiteId) => {
    setBlocklist((prevBlocklist) =>
      prevBlocklist.includes(websiteId)
        ? prevBlocklist.filter((id) => id !== websiteId)
        : [...prevBlocklist, websiteId]
    );
  }, []);

  const toggleCompare = useCallback((websiteId) => {
    setCompareList((prevCompareList) =>
      prevCompareList.includes(websiteId)
        ? prevCompareList.filter((id) => id !== websiteId)
        : prevCompareList.length < 3
        ? [...prevCompareList, websiteId]
        : prevCompareList
    );
  }, []);

  const addToCart = useCallback((websiteId) => {
    setCart((prevCart) =>
      prevCart.includes(websiteId) ? prevCart : [...prevCart, websiteId]
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...websites];

      if (searchTerm) {
        filtered = filtered.filter((website) =>
          website.domain.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredWebsites(filtered);
      setLoading(false);
    }, 300);
  }, [searchTerm, websites]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Filter className="h-5 w-5 text-gray-500" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search websites by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : filteredWebsites.length === 0 ? (
          <div className="text-center text-gray-600">No websites found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebsites.map((website) => (
              <motion.div
                key={website.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold">{website.domain}</h3>
                <p className="text-gray-600">{website.description}</p>
                <p className="text-gray-500">Price: ${website.price}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
