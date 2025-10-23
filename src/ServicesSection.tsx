import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "New Car Loans", description: "Competitive interest rates and easy approval process", icon: "💰", route: "/new-car-loans", serviceKey: "New Car Loans" },
  // { title: "Used Cars", description: "Quality pre-owned vehicles with complete verification", icon: "🚙", route: "/cars-stock" },
  { title: "Used Car Loans", description: "Financing solutions for pre-owned vehicles", icon: "💳", route: "/used-car-loans", serviceKey: "Used Car Loans" },
  { title: "Car Top Up Loans", description: "Additional funding against your existing car loan", icon: "📈", route: "/used-car-loans", serviceKey: "Car Top Up Loans" },
  { title: "Balance Transfer Loans", description: "Transfer your existing loan to get better rates", icon: "🔄", route: "/used-car-loans", serviceKey: "Balance Transfer Loans" },
  { title: "Unsecured Loans", description: "Personal and business loans without collateral", icon: "💼", route: "/personal-loan-form", serviceKey: "Unsecured Loans" },
  { title: "Mortgage Loans", description: "Home loans and loan against property", icon: "🏠", route: "/home-loan-form", serviceKey: "Mortgage Loans" },
  { title: "Home Loans", description: "Affordable home financing solutions", icon: "🏡", route: "/home-loan-form", serviceKey: "Home Loans" },
  { title: "Motor Insurance - New Cars", description: "Comprehensive insurance for new vehicles", icon: "🛡️", route: "/insurance-form", serviceKey: "Motor Insurance - New Cars" },
  { title: "Motor Insurance - Renewals", description: "Hassle-free insurance renewal services", icon: "🔄", route: "/insurance-form", serviceKey: "Motor Insurance - Renewals" },
];

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

export function ServicesSection() {
  const navigate = useNavigate();

  const handleRedirect = (route: string, service?: string) => {
    const queryParams = new URLSearchParams();

    if (service) queryParams.set("service", service); // only set the key

    navigate(`${route}?${queryParams.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto p-6">

      {/* Company Introduction */}
      <div className="text-center mb-12">
        <motion.h2 initial={{ y: -50 }} animate={{ y: 0 }} className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Auto Gears
        </motion.h2>
        <motion.div initial={{ y: 50 }} animate={{ y: 0 }} className="max-w-4xl mx-auto text-gray-600 space-y-4">
          <p>Auto gears™ (powered by Auto Gears™ Since 1998) : Multicar Showroom</p>
          <p>
            In the year 1998, Founder of Auto Gears groups at the young age of 25 envisaged about business of New cars,
            Finance and Insurance. His leadership qualities, continuous Endeavour, zeal for rapid growth, foresightedness
            and firm family support enabled Auto Gears to be recognised in the fields of finance, Insurance and now in
            used cars.
          </p>
          <p>
            Over the past 37+ eventful years, Auto Gears is a one-stop shop for all your vehicle purchasing needs, Auto
            Gears has been a leading Finance retailer of ICICI Bank Ltd & HDFC Bank Ltd. Easy and quick processing, plethora
            of finance options at attractive terms, have been the cutting-edge features of Auto Gears.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleRedirect(service.route, service.serviceKey ?? service.title)}
              className="cursor-pointer"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bank Partners */}
      <div className="mb-12">
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
              <div key={`${bank.name}-${index}`} className="flex items-center justify-center rounded-lg" style={{ width: "140px", height: "100px" }}>
                <img src={bank.logo} alt={bank.name} className="object-contain max-h-full max-w-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Insurance Partners */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center">Insurance Partners</h3>
        <p className="text-center text-gray-700">We have tie-ups with leading insurance companies</p>
        <div className="overflow-hidden mx-auto">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            style={{ display: "inline-flex" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {[...insurancePartners, ...insurancePartners, ...insurancePartners].map((insurance, index) => (
              <div key={`${insurance.name}-${index}`} className="flex items-center justify-center" style={{ width: "140px", height: "100px" }}>
                <img src={insurance.logo} alt={insurance.name} className="object-contain max-h-full max-w-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="mt-12 grid md:grid-cols-6 gap-4">
        {["NEW CAR LOANS", "USED CAR LOANS", "CAR INSURANCE", "PERSONAL LOAN", "BUSINESS LOANS", "HOME LOANS"].map((title, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-red-600 text-white p-4 rounded text-center font-bold"
          >
            AUTO GEARS
            <br />
            {title}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
