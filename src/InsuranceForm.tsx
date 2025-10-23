import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const carMakes = [
  "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "BYD", "Citroen", "Ferrari",
  "Fisker", "Force Motors", "Haval", "Honda", "Hyundai", "Isuzu", "Jaguar", "Jeep",
  "Kia", "Lamborghini", "Land Rover", "Lexus", "Mahindra", "Maruti Suzuki", "Maserati",
  "McLaren", "Mean Metal Motors", "Mercedes-Benz", "MG", "MINI", "Nissan", "OLA",
  "Porsche", "Pravaig", "Renault", "Rolls-Royce", "Skoda", "Tata", "Tesla", "Toyota",
  "Volkswagen", "Volvo"
];

const fuelTypes = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];
const claimStatusOptions = ["Yes", "No"];

export function InsuranceForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    make: "",
    model: "",
    variant: "",
    rto: "",
    fuelType: "",
    insuranceCompany: "",
    ncb: "",
    idv: "",
    claimStatus: "",
    policyFile: null as File | null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, policyFile: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Insurance form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6"
    >
      <Card className="shadow-xl">
        <CardHeader className="bg-red-600 text-white">
          <CardTitle className="text-2xl text-center">Insurance Inquiry Form - AUTO GEARS</CardTitle>
          <p className="text-center text-lg">Insurance Service Inquiry</p>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-6 text-center">Please fill up the below details</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <Label className="text-lg">Name*</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <Label className="text-lg">Mobile*</Label>
                <Input
                  value={formData.mobile}
                  onChange={(e) => setFormData((prev) => ({ ...prev, mobile: e.target.value }))}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label className="text-lg">Email*</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Make */}
              <div>
                <Label className="text-lg">Make*</Label>
                <Select
                  value={formData.make}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, make: value }))}
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

              {/* Model */}
              <div>
                <Label className="text-lg">Model*</Label>
                <Input
                  value={formData.model}
                  onChange={(e) => setFormData((prev) => ({ ...prev, model: e.target.value }))}
                  placeholder="Enter car model"
                  required
                />
              </div>

              {/* Variant */}
              <div>
                <Label className="text-lg">Variant*</Label>
                <Input
                  value={formData.variant}
                  onChange={(e) => setFormData((prev) => ({ ...prev, variant: e.target.value }))}
                  placeholder="Enter car variant"
                  required
                />
              </div>

              {/* RTO Location */}
              <div>
                <Label className="text-lg">RTO Location*</Label>
                <Input
                  value={formData.rto}
                  onChange={(e) => setFormData((prev) => ({ ...prev, rto: e.target.value }))}
                  placeholder="Enter RTO location"
                  required
                />
              </div>

              {/* Fuel Type */}
              <div>
                <Label className="text-lg">Fuel Type*</Label>
                <Select
                  value={formData.fuelType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, fuelType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    {fuelTypes.map((fuel) => (
                      <SelectItem key={fuel} value={fuel}>
                        {fuel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Insurance Company */}
              <div>
                <Label className="text-lg">Existing Insurance Company*</Label>
                <Input
                  value={formData.insuranceCompany}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, insuranceCompany: e.target.value }))
                  }
                  placeholder="Enter current insurance company"
                  required
                />
              </div>

              {/* NCB */}
              <div>
                <Label className="text-lg">NCB in Expiring Policy*</Label>
                <Input
                  value={formData.ncb}
                  onChange={(e) => setFormData((prev) => ({ ...prev, ncb: e.target.value }))}
                  placeholder="Enter NCB percentage/value"
                  required
                />
              </div>

              {/* IDV */}
              <div>
                <Label className="text-lg">IDV*</Label>
                <Input
                  value={formData.idv}
                  onChange={(e) => setFormData((prev) => ({ ...prev, idv: e.target.value }))}
                  placeholder="Enter Insured Declared Value"
                  required
                />
              </div>

              {/* Claim Status */}
              <div>
                <Label className="text-lg">Claim Status*</Label>
                <Select
                  value={formData.claimStatus}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, claimStatus: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select claim status" />
                  </SelectTrigger>
                  <SelectContent>
                    {claimStatusOptions.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* File Upload */}
              <div className="md:col-span-2">
                <Label className="text-lg">Upload Current Policy Copy*</Label>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-red-600 text-white py-3 text-lg">
              Submit Inquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
