import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { LegalPages } from './LegalPages';
import { Link, useNavigate } from "react-router-dom";

export function Footer() {
  const [showLegal, setShowLegal] = useState<'terms' | 'privacy' | null>(null);
  const navigate = useNavigate();

  // 👇 Custom scroll function for EMI Calculator
  const handleEmiClick = () => {
    navigate("/"); // go to home
    setTimeout(() => {
      const section = document.getElementById("emi");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // delay to ensure DOM rendered
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 text-white mt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info with Map and Social Icons in one row */}
          <div className=''>
            <div className="flex flex-col mb-4">
              {/* Title */}
              <h3 className="text-xl font-bold whitespace-nowrap mb-2">AUTO GEARS</h3>

              {/* Map iframe */}
              <div className="flex-shrink-0 rounded-md overflow-hidden shadow-md mb-2" style={{ width: 280, height: 140 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8782680852377!2d72.87747137520568!3d19.17200738203812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b79c08a1169b%3A0x4356f0a5f7f83aec!2sChaitanya%20Building!5e0!3m2!1sen!2sin!4v1693235953471!5m2!1sen!2sin"
                  width="280"
                  height="140"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Auto Gears Location"
                  className=''
                ></iframe>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 text-gray-400">
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-blue-600">
                  <Facebook size={20} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-blue-400">
                  <Twitter size={20} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-pink-500">
                  <Instagram size={20} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-blue-700">
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/new-car-loans" className="hover:text-white transition-colors">New Car Loans</Link></li>
              <li><Link to="/used-car-loans" className="hover:text-white transition-colors">Used Car Loans</Link></li>
              <li><Link to="/personal-loan-form" className="hover:text-white transition-colors">Personal Loans</Link></li>
              <li><Link to="/personal-loan-form?service=Business Loan" className="hover:text-white transition-colors">Business Loans</Link></li>
              <li><Link to="/home-loan-form?service=Home Loan" className="hover:text-white transition-colors">Home Loans</Link></li>
              <li><Link to="/insurance-form" className="hover:text-white transition-colors">Car Insurance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li>
                <button 
                  onClick={handleEmiClick} 
                  className="hover:text-white transition-colors text-left"
                >
                  EMI Calculator
                </button>
              </li>
              {/* <li><Link to="/sell-cars" className="hover:text-white transition-colors">Sell Your Car</Link></li> */}
              {/* <li><Link to="/cars-stock" className="hover:text-white transition-colors">Car Stock</Link></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm">OFF No 202, Chaitanya Chs Ltd</p>
                  <p className="text-sm">S. V. Road, Siddharth Nagar</p>
                  <p className="text-sm">Goregaon West, Mumbai - 400104</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-500" />
                <div>
                  <p className="text-sm">+91 9867358999</p>
                  <p className="text-sm">+91 9321117593</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-500" />
                <div>
                  <p className="text-sm">sales@autogears.in</p>
                  <p className="text-sm">support@autogears.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Partners */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h4 className="text-center text-lg font-semibold mb-4">Banking Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
            <span>ICICI Bank</span>
            <span>•</span>
            <span>HDFC Bank</span>
            <span>•</span>
            <span>Axis Bank</span>
            <span>•</span>
            <span>IDFC Bank</span>
            <span>•</span>
            <span>Kotak Bank</span>
            <span>•</span>
            <span>And 30+ More Banks</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2025 Auto Gears. All rights reserved. | Established Since 1998
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowLegal('terms')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowLegal('privacy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.button>
              {/* <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Disclaimer
              </motion.a> */}
            </div>
          </div>
        </div>

        {/* Certificate */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Licensed by RBI | Certificate of Registration No. XXX-XXXX-XXXX</p>
          <p>Auto Gears is a registered trademark. All product names, logos, and brands are property of their respective owners.</p>
        </div>
      </div>

      {/* Legal Pages Modal */}
      <AnimatePresence>
        {showLegal && (
          <LegalPages type={showLegal} onClose={() => setShowLegal(null)} />
        )}
      </AnimatePresence>
    </motion.footer>
  );
}
