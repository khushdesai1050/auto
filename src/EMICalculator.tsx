import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/ui/dialog";
import axios from "axios";

export function EMICalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    rating: 5,
    feedback: ""
  });

  // Calculate EMI
  const calculateEMI = () => {
    const monthlyRate = rate / 12 / 100;
    const n = tenure;
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);
    setEmi(Math.round(emiValue));
  };

  // Fetch testimonials from API
  const fetchTestimonials = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/testimonials`);
      if (data.success) setTestimonials(data.testimonials);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    }
  };

  // Submit testimonial
  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/testimonials`, formData);
      if (data.success) {
        setShowModal(false);
        setFormData({ name: "", city: "", rating: 5, feedback: "" });
        fetchTestimonials(); // Refresh testimonials
      }
    } catch (err) {
      console.error("Error submitting testimonial:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="max-w-screen-xl w-[1080px] mx-auto px-4 py-8" id="emi">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE - EMI Calculator + Call Back */}
        <div className="w-full">
          <Tabs defaultValue="emi" className="w-full">
            <TabsList className="grid grid-cols-2 w-full mb-4">
              <TabsTrigger value="emi">EMI Calculator</TabsTrigger>
              <TabsTrigger value="contact">Request a Call Back</TabsTrigger>
            </TabsList>

            <TabsContent value="emi">
              <Card className="shadow-xl rounded-2xl">
                <CardHeader className="bg-red-600 text-white rounded-t-2xl">
                  <CardTitle className="text-center">EMI Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 mt-4">
                  <div>
                    <Label>Loan Amount (₹)</Label>
                    <Input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                    />
                    <Slider
                      value={[principal]}
                      onValueChange={(val) => setPrincipal(val[0])}
                      min={50000}
                      max={5000000}
                      step={10000}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Interest Rate (%)</Label>
                    <Input
                      type="number"
                      value={rate}
                      step={0.1}
                      onChange={(e) => setRate(Number(e.target.value))}
                    />
                    <Slider
                      value={[rate]}
                      onValueChange={(val) => setRate(val[0])}
                      min={5}
                      max={20}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Tenure (Months)</Label>
                    <Input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                    />
                    <Slider
                      value={[tenure]}
                      onValueChange={(val) => setTenure(val[0])}
                      min={6}
                      max={360}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <Button onClick={calculateEMI} className="w-full bg-red-600 text-white">
                    Calculate EMI
                  </Button>

                  {emi > 0 && (
                    <div className="text-center text-lg font-semibold">
                      Your Monthly EMI: ₹ {emi.toLocaleString("en-IN")}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card className="shadow-xl rounded-2xl">
                <CardHeader className="bg-red-600 text-white rounded-t-2xl">
                  <CardTitle className="text-center">Request a Call Back</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 mt-4">
                  <div>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <Button className="w-full bg-red-600 text-white">Submit</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* RIGHT SIDE - Testimonials */}
        {/* RIGHT SIDE - Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full"
        >
          <Card className="shadow-xl rounded-2xl w-full h-full overflow-hidden">
            <CardHeader className="bg-red-600 text-white rounded-t-2xl">
              <CardTitle className="text-center">Testimonials</CardTitle>
            </CardHeader>

            <CardContent className="p-4 flex flex-col">
              {testimonials.length > 0 && (
                <motion.div
                  className="flex gap-6 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: Math.max(testimonials.length * 5, 10), // minimum duration
                      ease: "linear",
                    },
                  }}
                >
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[390px] h-[300px] shadow bg-white rounded-xl p-4"
                    >
                      <div>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">
                            ⭐
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-3">"{testimonial.feedback}"</p>
                      <p className="font-semibold text-blue-600">- {testimonial.name}</p>
                      <p className="font-semibold text-blue-600">{testimonial.city}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              <div className="flex justify-center mt-12">
                <Button
                  className="bg-red-600 text-white w-full"
                  onClick={() => setShowModal(true)}
                >
                  Add Testimonial
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>

      {/* Modal for Add Testimonial */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Testimonial</DialogTitle>
          </DialogHeader>

          <div className="space-y-3 mt-2">
            <div>
              <Label>Name</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <Label>City</Label>
              <Input
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            <div>
              <Label>Rating</Label>
              <Input
                type="number"
                min={1}
                max={5}
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
              />
            </div>

            <div>
              <Label>Feedback</Label>
              <Input
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
              />
            </div>

            <Button className="w-full bg-red-600 text-white" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
