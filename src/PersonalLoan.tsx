import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// ✅ Popup Component (same as above)
function Popup({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center"
      >
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Success 🎉</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <Button onClick={onClose} className="bg-red-600 text-white px-6 py-2 rounded-lg">
          Close
        </Button>
      </motion.div>
    </div>
  );
}

const LoanServices = [
  "Personal Loan",
  "Business Loan",
  "Over Draft Facility’s",
  "C C Facility’s",
  "Unsecured Loans",
];

export function PersonalLoan({ title }: { title: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    loanAmount: "",
    email: "",
    aadhar: "",
    pan: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [dynamicServices, setDynamicServices] = useState<string[]>([]);
  const location = useLocation();

  // ✅ Set up services from URL or fallback
  useEffect(() => {
    setDynamicServices([...LoanServices]);
  }, [location.search]);

  // ✅ Initialize selected service
  useEffect(() => {
    if (dynamicServices.length === 0) return;
    const searchParams = new URLSearchParams(location.search);
    const serviceParam = searchParams.get("service") || "";
    const decodedService = decodeURIComponent(serviceParam);

    const initialService =
      dynamicServices.find(
        (s) => s.toLowerCase() === decodedService.toLowerCase()
      ) || dynamicServices[0];

    setFormData((p) => ({ ...p, service: initialService }));
  }, [dynamicServices, location.search]);

  // ✅ Handle form submission (same API + popup)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/loan-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setPopupMessage("We have received your request. Our team member will connect with you soon!");
        setFormData({
          name: "",
          phone: "",
          loanAmount: "",
          email: "",
          aadhar: "",
          pan: "",
          service: dynamicServices[0] || "",
        });
      } else {
        setPopupMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopupMessage("Unable to submit. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto p-6">
        <Card className="shadow-xl">
          <CardHeader className="bg-red-600 text-white">
            <CardTitle className="text-2xl text-center">{title}</CardTitle>
            <p className="text-center text-lg">Loan / Service Inquiry</p>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-6 text-center">Please fill up the below details</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-lg">Name*</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <Label className="text-lg">Phone Number*</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div>
                  <Label className="text-lg">Loan Amount*</Label>
                  <Input
                    value={formData.loanAmount}
                    onChange={(e) => setFormData((p) => ({ ...p, loanAmount: e.target.value }))}
                    placeholder="Enter loan amount"
                    required
                  />
                </div>

                <div>
                  <Label className="text-lg">Email*</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <Label className="text-lg">Aadhar Number*</Label>
                  <Input
                    value={formData.aadhar}
                    onChange={(e) => setFormData((p) => ({ ...p, aadhar: e.target.value }))}
                    placeholder="Enter Aadhar number"
                    required
                  />
                </div>

                <div>
                  <Label className="text-lg">PAN Card Number*</Label>
                  <Input
                    value={formData.pan}
                    onChange={(e) => setFormData((p) => ({ ...p, pan: e.target.value }))}
                    placeholder="Enter PAN number"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <Label className="text-lg">Service*</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData((p) => ({ ...p, service: value }))}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {dynamicServices.map((service) => (
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
                className="w-full bg-red-600 text-white py-3 text-lg"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* ✅ Popup appears after submission */}
      {popupMessage && <Popup message={popupMessage} onClose={() => setPopupMessage("")} />}
    </div>
  );
}
