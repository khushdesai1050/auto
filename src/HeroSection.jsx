import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./ImageComp/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";

const supercarImages = [
  { url: "/logos/cars/car-1.png", alt: "Black Lamborghini" },
  { url: "/logos/cars/car-2.png", alt: "Red Ferrari" },
  { url: "/logos/cars/car-3.png", alt: "Orange McLaren" },
];

const services = [
  "New Cars",
  "New Car Loans",
  "Used Cars",
  "Used Car Loans",
  "Car Top Up Loans",
  "Balance Transfer Loans",
  "Unsecured Loans",
  "Mortgage Loans",
  "Home Loans",
  "Motor Insurance – New Cars",
  "Motor Insurance – Renewals",
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "", service: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % supercarImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/lead`, formData);
      console.log("API response:", response.data);

      // ✅ Show success dialog instead of alert
      setIsDialogOpen(true);
      setIsFormOpen(false);
      setFormData({ name: "", number: "", service: "" });
    } catch (error) {
      console.error("Error submitting lead:", error);
      setIsDialogOpen(true); // show dialog for failure too if you want
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {supercarImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <ImageWithFallback src={image.url} alt={image.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Logo */}
      <div className="absolute top-4 z-10 left-2">
        <img src="/logos/icici-ass-removebg-preview.png" alt="" className="w-[500px]" />
      </div>

      {/* Hero Content */}
      <div className="relative top-20 z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="absolute -mt-[36rem]">
          <h1
            className="font-black text-red-700 text-5xl md:text-9xl"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            AUTO GEARS
          </h1>
          <p
            className="font-black text-red-500 text-2xl md:text-5xl uppercase tracking-[0.39em]"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Financial Services
          </p>
        </div>

        {/* Taglines */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -100 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center mb-12 flex flex-col gap-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-2xl md:text-4xl text-white font-light tracking-widest w-[80%] mx-auto"
          >
            Drive Your Dreams Today For All Your Financial Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-xl md:text-2xl text-white font-light tracking-widest w-[80%] mx-auto"
          >
            Discover flexible loans options for every budget
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={() => setIsFormOpen(true)}
            className="text-xs md:text-sm w-fit px-4 py-2 mx-auto font-medium tracking-widest text-black bg-white hover:bg-cyan-100"
          >
            GET YOUR FINANCIAL NEEDS COMPLETED NOW
          </motion.button>
        </motion.div>
      </div>

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold text-center mb-4 text-slate-700">Fill Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your Number"
                  required
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
                />
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
                >
                  <option value="">Select Service</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <div className="flex justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="w-1/2 py-2 border rounded-md text-slate-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="w-1/2 py-2 bg-red-600 text-white rounded-md" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>
              We have received your request. Our team member will contact you soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)} className="bg-red-600 text-white hover:bg-red-700">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
