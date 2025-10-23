import { motion } from "framer-motion"

import { useState } from 'react';
import { ImageWithFallback } from './ImageComp/ImageWithFallback';

const carBrands = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Toyota', 'Honda', 'Hyundai', 'Maruti Suzuki', 
  'Tata', 'Mahindra', 'Ford', 'Volkswagen', 'Skoda', 'Nissan', 'Kia', 'Renault'
];

const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'];
const transmissionTypes = ['Manual', 'Automatic', 'CVT', 'AMT'];
const bodyTypes = ['Hatchback', 'Sedan', 'SUV', 'MUV', 'Coupe', 'Convertible', 'Wagon'];

export function CarDetailsSection() {
  const [activeTab, setActiveTab] = useState('add');
  const [carDetails, setCarDetails] = useState({
    brand: '',
    model: '',
    year: '',
    fuelType: '',
    transmission: '',
    bodyType: '',
    kmDriven: '',
    price: '',
    color: '',
    owners: '',
    location: '',
    description: '',
    features: []
  });

  const [featuredCars] = useState([
    {
      id: 1,
      brand: 'BMW',
      model: 'X5',
      year: 2022,
      price: '₹85,00,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      kmDriven: '15,000 km'
    },
    {
      id: 2,
      brand: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2023,
      price: '₹65,00,000',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      fuelType: 'Diesel',
      transmission: 'Automatic',
      kmDriven: '8,000 km'
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'Q7',
      year: 2023,
      price: '₹95,00,000',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      kmDriven: '12,000 km'
    }
  ]);

  const handleInputChange = (field, value) => {
    setCarDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Car details submitted:', carDetails);
    // Here you would typically send the data to your backend
    alert('Car details submitted successfully!');
  };

  const tabs = [
    { id: 'add', title: 'Add Car Details', icon: '➕', color: 'from-cyan-600 to-cyan-700' },
    { id: 'browse', title: 'Browse Cars', icon: '🔍', color: 'from-emerald-600 to-emerald-700' },
    { id: 'featured', title: 'Featured Cars', icon: '⭐', color: 'from-amber-600 to-amber-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            Car <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-amber-500">Details</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Add your car details or browse our premium collection
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-red-600 text-white shadow-lg`
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.icon} {tab.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Add Car Form */}
        {activeTab === 'add' && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Brand */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Brand</label>
                    <select
                      value={carDetails.brand}
                      onChange={(e) => handleInputChange('brand', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Brand</option>
                      {carBrands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Model */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Model</label>
                    <input
                      type="text"
                      value={carDetails.model}
                      onChange={(e) => handleInputChange('model', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter model name"
                      required
                    />
                  </motion.div>

                  {/* Year */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Year</label>
                    <input
                      type="number"
                      min="1990"
                      max="2024"
                      value={carDetails.year}
                      onChange={(e) => handleInputChange('year', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="2020"
                      required
                    />
                  </motion.div>

                  {/* Fuel Type */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Fuel Type</label>
                    <select
                      value={carDetails.fuelType}
                      onChange={(e) => handleInputChange('fuelType', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Fuel Type</option>
                      {fuelTypes.map(fuel => (
                        <option key={fuel} value={fuel}>{fuel}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Transmission */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Transmission</label>
                    <select
                      value={carDetails.transmission}
                      onChange={(e) => handleInputChange('transmission', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Transmission</option>
                      {transmissionTypes.map(trans => (
                        <option key={trans} value={trans}>{trans}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* KM Driven */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2">KM Driven</label>
                    <input
                      type="number"
                      value={carDetails.kmDriven}
                      onChange={(e) => handleInputChange('kmDriven', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="50000"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-gray-700 font-semibold mb-2">Description</label>
                  <textarea
                    value={carDetails.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows="4"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us about your car's condition, features, and any additional details..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center"
                >
                  <button
                    type="submit"
                    className="px-12 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-2xl font-bold text-lg shadow-xl hover:from-cyan-700 hover:to-cyan-800 transform hover:scale-105 transition-all duration-300"
                  >
                    🚗 Submit Car Details
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Featured Cars */}
        {(activeTab === 'featured' || activeTab === 'browse') && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                  }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-3 py-1 rounded-full font-bold">
                      {car.year}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {car.brand} {car.model}
                    </h3>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700 mb-4">{car.price}</p>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>⛽ {car.fuelType}</span>
                        <span>🔧 {car.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>📏 {car.kmDriven}</span>
                        <span>📅 {car.year}</span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}