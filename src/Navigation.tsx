import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: "HOME", path: "/" },
    // { name: "CARS STOCK", path: "/cars-stock" },
    { name: "SERVICES", path: "/services" },
    // { name: "SELL CARS", path: "/sell-cars" },
    { name: "NEW CAR LOANS", path: "/new-car-loans" },
    { name: "USED CAR LOANS", path: "/used-car-loans" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-red-600 text-2xl font-bold"
            >
              <img src="/logos/AG LOGO.jpg" className="h-[50px] w-[180px]" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {tabs.map((tab) => (
              <Link key={tab.name} to={tab.path}>
                <Button
                  variant={location.pathname === tab.path ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.name)}
                  className={`text-sm px-3 py-2 transition-all duration-300 ${
                    location.pathname === tab.path
                      ? "bg-red-600 text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  {tab.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden flex flex-col space-y-2 py-4"
          >
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                onClick={() => {
                  setActiveTab(tab.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Button
                  variant={location.pathname === tab.path ? "default" : "ghost"}
                  className={`w-full text-left ${
                    location.pathname === tab.path
                      ? "bg-red-600 text-white"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  {tab.name}
                </Button>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
