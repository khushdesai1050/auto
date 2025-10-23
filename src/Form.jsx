import { motion } from "framer-motion";
import { HeroSection } from './HeroSection.jsx';
import { CarRequirementForm } from './CarRequirementForm';
import { EMICalculator } from './EMICalculator';
import LocationSection from './LocationSection';

export function FormPage({ onProductSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0"
    >
      <HeroSection onProductSelect={onProductSelect} />

      <div className="flex mx-auto justify-around">
        <CarRequirementForm />

        <div className="text-center mb-12 mt-10 w-[80%]">
          <motion.h2
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Welcome to Auto Gears - Form Page
          </motion.h2>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="emi-calculator"
        >
          <EMICalculator />
        </motion.div>
      </div>

      <LocationSection />
    </motion.div>
  );
}
