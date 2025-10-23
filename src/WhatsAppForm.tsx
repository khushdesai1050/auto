import { useState, useEffect, useRef } from "react";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection.jsx";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import LocationSection from "./LocationSection";
import axios from "axios";

// ✅ import Shadcn dialog components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export default function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    service: "",
    adhar: "",
    pan: "",
  });

  const [testimonials, setTestimonials] = useState([]);
  const [showDialog, setShowDialog] = useState(false); // ✅ dialog state
  const scrollRef = useRef(null);

  const bankPartners = [
    { name: "ICICI Bank", logo: "/logos/ICICI-BANK-LOGO.png" },
    { name: "HDFC Bank", logo: "/logos/hdfc-logo-3.png" },
    { name: "Axis Bank", logo: "/logos/Axis-Bank-logo.png" },
    { name: "IDFC First Bank", logo: "/logos/IDFC-logo.png" },
    { name: "Kotak", logo: "/logos/Kotak_Mahindra_Bank.png" },
    { name: "Yes Bank", logo: "/logos/Yes_Bank.png" },
    { name: "Bajaj", logo: "/logos/bajaj-logo.png" },
    { name: "Hero FinCorp", logo: "/logos/hero-logo.png" },
    { name: "Cholamandalam", logo: "/logos/chola-logo.png" },
    { name: "AU Small Finance", logo: "/logos/au-bank-logo.png" },
  ];

  const insurancePartners = [
    { name: "TATA AIG", logo: "/logos/insurance/TATA-AIG-logo.png" },
    { name: "ICICI LOMBARD", logo: "/logos/insurance/ICICI-LOMBARD-logo.png" },
    { name: "GODIGIT", logo: "/logos/insurance/GODIGIT-logo.png" },
    { name: "HDFC ERGO", logo: "/logos/insurance/HDFC-ERGO-logo.png" },
    { name: "ZURICH KOTAK", logo: "/logos/insurance/ZURICH-KOTAK-logo.png" },
    { name: "BAJAJ ALLIANZ", logo: "/logos/insurance/BAJAJ-ALLIANCE-logo.png" },
    { name: "FUTURE", logo: "/logos/insurance/FUTURE-logo.png" },
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

  // ✅ Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/testimonials`);
        if (response.data.success) {
          setTestimonials(response.data.testimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  // ✅ Smooth scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrame;
    let scrollPos = 0;
    const step = () => {
      if (!scrollContainer) return;
      scrollPos += 1;
      if (scrollPos >= scrollContainer.scrollWidth / 2) scrollPos = 0;
      scrollContainer.scrollLeft = scrollPos;
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [testimonials]);

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle submit with backend call
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/lead`, formData);
      if (res.data.success) {
        setShowDialog(true); // ✅ show success popup
        setFormData({ name: "", number: "", service: "", adhar: "", pan: "" }); // reset form
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div>
      <HeroSection />

      {/* ✅ Popup Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-green-600 text-xl">Thank You!</DialogTitle>
            <DialogDescription className="text-gray-700 mt-2">
              We have received your request. Our team member will connect with you soon.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setShowDialog(false)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>

      {/* Bank Partners */}
      <div className="mt-2">
        <h3 className="text-2xl font-bold text-center">Banking Partners</h3>
        <p className="text-center text-gray-700">We have tie-ups with leading Banking Partner</p>
        <div className="overflow-hidden mx-auto">
          <motion.div
            className="flex gap-2 whitespace-nowrap"
            style={{ display: "inline-flex" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {[...bankPartners, ...bankPartners].map((bank, index) => (
              <div key={index} className="flex items-center justify-center rounded-lg w-[140px] h-[100px]">
                <img src={bank.logo} alt={bank.name} className="object-contain max-h-full max-w-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ✅ Form Section */}
      <div className="min-h-screen w-[1080px] mx-auto bg-gray-50 flex items-start justify-center mt-4">
        <div className="flex gap-2 mt-4">
          <div className="bg-white shadow-lg rounded-2xl h-[600px] p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center capitalize">please fill below details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "number", "adhar", "pan"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                  <input
                    type={field === "number" ? "tel" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium mb-1">Our Services</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  {services.map((srv, idx) => (
                    <option key={idx} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="relative h-[600px] w-[500px]">
            <img src="/logos/scan-3.png" alt="idfc scanner" className="h-[600px]" />
          </div>
        </div>
      </div>

      {/* Insurance Partners */}
      <div className="-mt-12">
        <h3 className="text-2xl font-bold text-center">Insurance Partners</h3>
        <p className="text-center text-gray-700">We have tie-ups with leading insurance companies</p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-lg">
          <div className="overflow-hidden mx-auto">
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              style={{ display: "inline-flex" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            >
              {[...insurancePartners, ...insurancePartners, ...insurancePartners].map((insurance, index) => (
                <div key={index} className="flex items-center justify-center w-[140px] h-[100px]">
                  <img src={insurance.logo} alt={insurance.name} className="object-contain max-h-full max-w-full" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full mt-10"
      >
        <p className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium bg-red-600 text-white">
          Testimonials
        </p>

        <div ref={scrollRef} className="flex space-x-6 overflow-hidden py-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={index} className="shadow-lg flex-shrink-0 w-[280px] h-[220px] rounded-xl">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating || 0)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-4 italic">
                    "{testimonial.feedback || testimonial.text}"
                  </p>
                </div>
                <p className="font-semibold text-blue-600">- {testimonial.name}</p>
                {testimonial.city && <p className="font-semibold text-blue-600">{testimonial.city}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
