import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, FileText, Clock, Star, DollarSign } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: "Basic",
    price: 49,
    wordCount: 500,
    deliveryDays: 3,
    features: [
      "SEO-optimized content",
      "1 revision round",
      "Plagiarism check",
      "Basic formatting"
    ]
  },
  {
    id: 2,
    name: "Professional",
    price: 99,
    wordCount: 1000,
    deliveryDays: 5,
    features: [
      "SEO-optimized content",
      "2 revision rounds",
      "Plagiarism check",
      "Advanced formatting",
      "Topic research",
      "Meta description"
    ]
  },
  {
    id: 3,
    name: "Premium",
    price: 199,
    wordCount: 2000,
    deliveryDays: 7,
    features: [
      "SEO-optimized content",
      "Unlimited revisions",
      "Plagiarism check",
      "Advanced formatting",
      "In-depth topic research",
      "Meta description",
      "Social media snippets",
      "Content strategy consultation"
    ]
  }
];

const ContentPurchase = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Professional Content Writing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get high-quality, SEO-optimized content written by expert writers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 transition-all ${
                selectedPackage === pkg.id
                  ? 'border-pink-500 transform scale-105'
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-pink-500" />
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    {pkg.wordCount} words
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.deliveryDays} days
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPackage(pkg.id)}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  selectedPackage === pkg.id
                    ? 'bg-pink-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Need a Custom Package?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Word Count</label>
              <input
                type="number"
                placeholder="Enter word count"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Topic</label>
              <input
                type="text"
                placeholder="Enter your topic"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2">Additional Requirements</label>
              <textarea
                rows={4}
                placeholder="Enter any specific requirements or instructions"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all"
              />
            </div>
          </div>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentPurchase;