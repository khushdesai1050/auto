import { motion } from "framer-motion"

import { useState } from 'react';

const productCategories = [
  {
    id: 'loans',
    title: 'Loan Services',
    description: 'Get the best financing options for your dream car',
    icon: '🏦',
    color: 'from-cyan-500 to-cyan-600',
    products: [
      { id: 'new-car-loan', title: 'New Car Loans', description: 'Competitive rates for new vehicles', icon: '🚗' },
      { id: 'used-car-loan', title: 'Used Car Loans', description: 'Affordable financing for pre-owned cars', icon: '🚙' },
      { id: 'personal-loan', title: 'Personal Loans', description: 'Quick personal financing solutions', icon: '💳' }
    ]
  },
  {
    id: 'services',
    title: 'Car Services',
    description: 'Complete automotive solutions under one roof',
    icon: '🔧',
    color: 'from-emerald-500 to-emerald-600',
    products: [
      { id: 'sell-car', title: 'Sell Your Car', description: 'Get the best value for your vehicle', icon: '💰' },
      { id: 'buy-car', title: 'Buy Cars', description: 'Explore our premium collection', icon: '🏎️' }
    ]
  },
  {
    id: 'insurance',
    title: 'Insurance & Protection',
    description: 'Comprehensive coverage for your investment',
    icon: '🛡️',
    color: 'from-amber-500 to-amber-600',
    products: [
      { id: 'car-insurance', title: 'Car Insurance', description: 'Complete vehicle protection', icon: '🚗' },
      { id: 'extended-warranty', title: 'Extended Warranty', description: 'Extended protection plans', icon: '📋' },
      { id: 'gap-insurance', title: 'GAP Insurance', description: 'Bridge the gap in coverage', icon: '🌉' }
    ]
  }
];

export function ProductSelector({ onProductSelect, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="text-3xl font-bold text-gray-800"
          >
            Choose Your Service
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
          >
            ×
          </motion.button>
        </div>

        {!selectedCategory ? (
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${category.color} text-white cursor-pointer overflow-hidden group`}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="text-sm text-white/80">
                    {category.products.length} services available
                  </div>
                </div>
                <motion.div
                  className="absolute bottom-0 right-0 text-white/20 text-8xl transform translate-x-4 translate-y-4"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {category.icon}
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div>
            <motion.button
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              whileHover={{ x: -10 }}
              onClick={() => setSelectedCategory(null)}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-6 font-semibold"
            >
              ← Back to Categories
            </motion.button>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-gray-800 mb-8"
            >
              {selectedCategory.title}
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                  }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 cursor-pointer group"
                  onClick={() => onProductSelect(product.id)}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <motion.div
                    animate={{ 
                      scale: hoveredProduct === product.id ? 1.2 : 1,
                      rotate: hoveredProduct === product.id ? 10 : 0
                    }}
                    className="text-4xl mb-4"
                  >
                    {product.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h4>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredProduct === product.id ? '100%' : '0%' }}
                    className="h-1 bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full mt-4"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}