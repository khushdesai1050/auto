import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"; // using shadcn Dialog

const carMakes = [
  "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "BYD", "Citroen", "Ferrari",
  "Fisker", "Force Motors", "Haval", "Honda", "Hyundai", "Isuzu", "Jaguar", "Jeep",
  "Kia", "Lamborghini", "Land Rover", "Lexus", "Mahindra", "Maruti Suzuki", "Maserati",
  "McLaren", "Mean Metal Motors", "Mercedes-Benz", "MG", "MINI", "Nissan", "OLA",
  "Porsche", "Pravaig", "Renault", "Rolls-Royce", "Skoda", "Tata", "Tesla", "Toyota",
  "Volkswagen", "Volvo"
];

const services = [
  "New Car Loans",
  "Used Car Loans",
  "Car Top Up Loans",
  "Balance Transfer Loans",
  "Unsecured Loans",
  "Mortgage Loans",
  "Home Loans",
  "Motor Insurance - New Cars",
  "Motor Insurance - Renewals",
];

export function LoanForm() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // initialize service from URL
  const initialService = (() => {
    const param = searchParams.get("service");
    if (!param) return "";
    const decoded = decodeURIComponent(param);
    const match = services.find(
      (s) => s.toLowerCase() === decoded.toLowerCase()
    );
    return match || "";
  })();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    make: "",
    model: "",
    variant: "",
    service: initialService,
    loan_type: "",
  });

  const formTitle = formData.service
    ? `${formData.service} Inquiry`
    : "Car Inquiry Form";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (data.success) {
        setPopupMessage(
          "We have received your request. Our team member will connect with you soon!"
        );
        setPopupOpen(true);
        setFormData({
          name: "",
          mobile: "",
          email: "",
          make: "",
          model: "",
          variant: "",
          service: initialService,
          loan_type: "",
        });
      } else {
        setPopupMessage(
          data.message || "Something went wrong. Please try again later."
        );
        setPopupOpen(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopupMessage("Unable to connect to the server. Please try again.");
      setPopupOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6"
    >
      <Card className="shadow-xl">
        <CardHeader className="bg-red-600 text-white">
          <CardTitle className="text-2xl text-center">
            {formTitle} - AUTO GEARS
          </CardTitle>
          <p className="text-center text-lg">Loan / Service Inquiry</p>
        </CardHeader>

        <CardContent className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Please fill up the below details
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <Label className="text-lg">Name*</Label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Make */}
              <div>
                <Label className="text-lg">Make*</Label>
                <Select
                  value={formData.make}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, make: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select car make" />
                  </SelectTrigger>
                  <SelectContent>
                    {carMakes.map((make) => (
                      <SelectItem key={make} value={make}>
                        {make}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Mobile */}
              <div>
                <Label className="text-lg">Mobile*</Label>
                <Input
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, mobile: e.target.value }))
                  }
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Model */}
              <div>
                <Label className="text-lg">Model*</Label>
                <Input
                  value={formData.model}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, model: e.target.value }))
                  }
                  placeholder="Enter car model"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label className="text-lg">Email*</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Variant */}
              <div>
                <Label className="text-lg">Variant*</Label>
                <Input
                  value={formData.variant}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      variant: e.target.value,
                    }))
                  }
                  placeholder="Enter car variant"
                  required
                />
              </div>

              {/* Service */}
              <div className="md:col-span-2">
                <Label className="text-lg">Service*</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, service: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white py-3 text-lg"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Popup Dialog */}
      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Inquiry Status</DialogTitle>
          </DialogHeader>
          <p className="text-gray-700 text-center py-4">{popupMessage}</p>
          <Button
            onClick={() => setPopupOpen(false)}
            className="w-full bg-red-600 text-white"
          >
            OK
          </Button>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
