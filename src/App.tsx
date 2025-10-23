import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection.jsx";
import { ProductSelector } from "./ProductSelector.jsx";
import { CarDetailsSection } from "./CarDetailsSection.jsx";
import { PersonalLoanForm } from "./PersonalLoanForm.jsx";
import { CarRequirementForm } from "./CarRequirementForm";
import { EMICalculator } from "./EMICalculator";
import { ScrollToTop } from "./ScrollToTop.tsx";
import { SellCarForm } from "./SellCarForm";
import { LoanForm } from "./LoanForm";
import { ServicesSection } from "./ServicesSection";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import WhatsAppForm from "./WhatsAppForm.tsx";
import { InsuranceForm } from "./InsuranceForm.js";
// import LocationSection from "./LocationSection";
import { Footer } from "./Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Loans } from "./Loan";
import { PersonalLoan } from "./PersonalLoan";
import { HomeLoan } from "./HomeLoan";

type ProductId = "personal-loan" | "car-loan" | "home-loan";

export default function App() {
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [showProductSelector, setShowProductSelector] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductId | null>(null);
  const [showPersonalLoanForm, setShowPersonalLoanForm] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const homeLoanServices = ["Home Loan", "Loan Against Property", "Balance Transfer"];
  const businessLoanServices = ["Personal Loan", "Business Loan", "Over Draft Facility’s", "C C Facility’s"];

  const getFormProps = (title: string) => {
    if (title === "Home Loans & Loan Against Property") {
      return { title, services: homeLoanServices };
    }
    if (title === "Unsecured Business Loans & Personal Loans") {
      return { title, services: businessLoanServices };
    }
    return null;
  };

  const services = [
    {
      title: "Home Loans & Loan Against Property",
      img: "/logos/home.png",
      desc: "Get flexible home loans and loan against property with low interest rates.",
    },
    {
      title: "",
      img: "/logos/scan.jpg",
      desc: "",
    },
    {
      title: "Unsecured Business Loans & Personal Loans",
      img: "/logos/paisa.png",
      desc: "Quick approval for business and personal loans without collateral.",
    },
  ];

  const bankPartners = [
    { name: "ICICI Bank", logo: "/logos/ICICI-BANK-LOGO.png", width: "120px", height: "120px" },
    { name: "HDFC Bank", logo: "/logos/hdfc-logo-3.png", width: "120px", height: "120px" },
    { name: "Axis Bank", logo: "/logos/Axis-Bank-logo.png", width: "120px", height: "50px" },
    { name: "IDFC First Bank", logo: "/logos/IDFC-logo.png", width: "120px", height: "120px" },
    { name: "Kotak", logo: "/logos/Kotak_Mahindra_Bank.png", width: "120px", height: "120px" },
    { name: "Yes Bank", logo: "/logos/Yes_Bank.png", width: "120px", height: "100px" },
    { name: "Bajaj", logo: "/logos/bajaj-logo.png", width: "120px", height: "120px" },
    { name: "Hero FinCorp", logo: "/logos/hero-logo.png", width: "120px", height: "120px" },
    { name: "Cholamandalam", logo: "/logos/chola-logo.png", width: "120px", height: "120px" },
    { name: "AU Small Finance", logo: "/logos/au-bank-logo.png", width: "120px", height: "70px" },
  ];

  const insurancePartners = [
    { name: "TATA AIG", logo: "/logos/insurance/TATA-AIG-logo.png", width: "120px", height: "120px" },
    { name: "ICICI LOMBARD", logo: "/logos/insurance/ICICI-LOMBARD-logo.png", width: "120px", height: "120px" },
    { name: "GODIGIT", logo: "/logos/insurance/GODIGIT-logo.png", width: "120px", height: "50px" },
    { name: "HDFC ERGO", logo: "/logos/insurance/HDFC-ERGO-logo.png", width: "120px", height: "120px" },
    { name: "ZURICH KOTAK", logo: "/logos/insurance/ZURICH-KOTAK-logo.png", width: "120px", height: "100px" },
    { name: "BAJAJ ALLIANZ", logo: "/logos/insurance/BAJAJ-ALLIANCE-logo.png", width: "120px", height: "120px" },
    { name: "FUTURE", logo: "/logos/insurance/FUTURE-logo.png", width: "120px", height: "120px" },
  ];

  const handleProductSelect = (productId: ProductId) => {
    setShowProductSelector(false);
    setSelectedProduct(productId);

    switch (productId) {
      case "personal-loan":
        setShowPersonalLoanForm(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fromGoogle = document.referrer.includes("google.com");

    // Disable right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // Disable text selection
    const disableSelection = () => (document.body.style.userSelect = "none");
    document.addEventListener("selectstart", disableSelection);

    // Disable copy
    const disableCopy = (e) => e.preventDefault();
    document.addEventListener("copy", disableCopy);

    // Block F12 / Ctrl+Shift+I/J/C
    const blockKeys = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase()))
      ) {
        if (fromGoogle) {
          e.preventDefault();
          window.location.href = "about:blank";
        }
      }
    };
    document.addEventListener("keydown", blockKeys);

    // Detect DevTools (works across Chrome, Firefox, Edge, Safari)
    const detectDevTools = () => {
      const threshold = 160; // px, adjust sensitivity
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if ((widthDiff > threshold || heightDiff > threshold) && fromGoogle) {
        // Redirect to blank page
        window.location.href = "about:blank";
      }
    };
    window.addEventListener("resize", detectDevTools);
    window.addEventListener("mousemove", detectDevTools); // additional check for Safari

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("selectstart", disableSelection);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("keydown", blockKeys);
      window.removeEventListener("resize", detectDevTools);
      window.removeEventListener("mousemove", detectDevTools);
    };
  }, []);



  return (
    <div className="min-h-screen mx-auto w-[1280px] lg:w-full bg-gray-50">
      <Navigation />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home */}
          <Route
            path="/"
            element={
              <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <HeroSection onProductSelect={handleProductSelect} />

                {/* Bank Partners */}
                <div className="overflow-hidden mx-auto">
                  <motion.div
                    className="flex gap-2 whitespace-nowrap"
                    style={{ display: "inline-flex" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                  >
                    {[...bankPartners, ...bankPartners].map((bank, index) => (
                      <div
                        key={`${bank.name}-${index}`}
                        className="flex items-center justify-center rounded-lg"
                        style={{ width: "140px", height: "100px" }}
                      >
                        <img src={bank.logo} alt={bank.name} className="object-contain max-h-full max-w-full" />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto p-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        const props = getFormProps(service.title);
                        if (props) {
                          navigate("/loan-form", { state: props });
                        }
                      }}
                      className="relative rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition h-[350px] flex items-center justify-center cursor-pointer"
                      style={
                        service.img !== "/logos/scan.jpg"
                          ? {
                            backgroundImage: `url('${service.img}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                          : {}
                      }
                    >
                      {service.img !== "/logos/scan.jpg" && <div className="absolute inset-0 bg-black/50"></div>}
                      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center">
                        {service.img === "/logos/scan.jpg" ? (
                          <img src={`/logos/scan-4.png`} alt="Scan" className="w-full h-full object-fill" />
                        ) : (
                          <>
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                            <p className="text-gray-200 mt-2 text-base">{service.desc}</p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>


                {/* Insurance Partners - Scrolling */}
                <div className="mb-12">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6 rounded-lg"
                  >
                    <div className="overflow-hidden mx-auto">
                      <motion.div
                        className="flex gap- whitespace-nowrap"
                        style={{ display: "inline-flex" }}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                          ease: "linear",
                          duration: 20,
                          repeat: Infinity,
                        }}
                      >
                        {[...insurancePartners, ...insurancePartners, ...insurancePartners].map((insurance, index) => (
                          <div
                            key={`${insurance.name}-${index}`}
                            className="flex items-center justify-center"
                            style={{ width: "140px", height: "100px" }}
                          >
                            <img
                              src={insurance.logo}
                              alt={insurance.name}
                              className="object-contain max-h-full max-w-full"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>


                {/* Forms & Tools */}
                <div className="flex max-w-6xl mx-auto justify-around p-6">
                  <CarRequirementForm />
                </div>

                <div className="flex justify-center items-center p-6">
                  <EMICalculator />
                </div>

                {/* <LocationSection /> */}
              </motion.main>
            }
          />

          {/* Loan Form Route */}
          <Route
            path="/loan-form"
            element={
              <Loans
                title={(location.state as any)?.title || "Loan Inquiry"}
                services={(location.state as any)?.services || []}
              />
            }
          />

          <Route
            path="/personal-loan-form"
            element={
              <PersonalLoan />
            }
          />

          <Route
            path="/home-loan-form"
            element={
              <HomeLoan />
            }
          />

          {/* Other Pages */}
          <Route path="/new-car-loans" element={<LoanForm type="NEW" />} />
          <Route path="/used-car-loans" element={<LoanForm type="USED" />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/cars-stock" element={<CarDetailsSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/sell-cars" element={<SellCarForm />} />
          <Route path="/whatsappform" element={<WhatsAppForm />} />
          <Route path="/insurance-form" element={<InsuranceForm />} />
        </Routes>
      </AnimatePresence>

      <Footer />

      {/* Modals */}
      <AnimatePresence>
        {showProductSelector && (
          <ProductSelector onProductSelect={handleProductSelect} onClose={() => setShowProductSelector(false)} />
        )}
        {showPersonalLoanForm && <PersonalLoanForm onClose={() => setShowPersonalLoanForm(false)} />}
      </AnimatePresence>
    </div>
  );
}
