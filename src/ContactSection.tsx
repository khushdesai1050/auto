import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import axios from 'axios';

// ✅ Import Dialog components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "./ui/dialog";

export function ContactSection() {
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false); // ✅ For popup dialog
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/testimonials`);
        if (response.data.success) {
          setTestimonials(response.data.testimonials);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const step = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(step);
    };

    const animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, [testimonials]);

  // ✅ Updated Submit Handler with API Call
  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact-us`, {
        name: callbackForm.name,
        phone: callbackForm.mobile,
        email: callbackForm.email
      });

      if (response.data) {
        setIsDialogOpen(true); // ✅ Open popup
        setCallbackForm({ name: '', mobile: '', email: '' }); // ✅ Reset form
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-6"
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Contact Us
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* === Contact Details === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-lg h-full">
            <CardHeader className="bg-red-600 rounded-t-2xl text-white pb-2">
              <CardTitle className='font-medium text-center'>Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">Auto Gears™</h3>
                <p className="text-gray-700 leading-relaxed">(powered by AUTO GEARS™ Since 1998)</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-700">
                      OFF No 202, Chaitanya Chs Ltd<br />
                      S. V. Road, Siddharth Nagar<br />
                      Goregaon West<br />
                      Mumbai - 400104
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Landmark: Ram Mandir Road Junction</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Phone Numbers</h4>
                    <p className="text-gray-700">+91 9867358999</p>
                    <p className="text-gray-700">+91 9321117593</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-700">sales@autogears.in</p>
                    <p className="text-gray-700">support@autogears.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-gray-700">Monday - Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-red-600 text-white"
                onClick={() => window.open('https://maps.google.com/?q=Goregaon+West+Mumbai', '_blank')}
              >
                View on Google Map
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* === Callback Form === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <Card className="shadow-lg">
            <CardHeader className="bg-red-600 text-center font-medium rounded-t-2xl text-white pb-2">
              <CardTitle>Request a Call Back</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleCallbackSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name*</Label>
                  <Input
                    id="name"
                    value={callbackForm.name}
                    onChange={(e) => setCallbackForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile*</Label>
                  <Input
                    id="mobile"
                    value={callbackForm.mobile}
                    onChange={(e) => setCallbackForm(prev => ({ ...prev, mobile: e.target.value }))}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={callbackForm.email}
                    onChange={(e) => setCallbackForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 text-center text-white"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid gap-4">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700">Visit our Showroom</h4>
              <p className="text-sm text-gray-600">Experience our wide range of cars</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700">Get a Free Car Valuation</h4>
              <p className="text-sm text-gray-600">Know your car's current market value</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700">Instant Loan Approval</h4>
              <p className="text-sm text-gray-600">Get quick loan decisions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* === Testimonials === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full mt-10"
      >
        <p className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium bg-red-600 text-white">
          Testimonials
        </p>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-hidden py-6"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-lg flex-shrink-0 w-[280px] h-[220px] rounded-xl"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-4 italic">
                    "{testimonial.feedback}"
                  </p>
                </div>
                <p className="font-semibold text-blue-600">- {testimonial.name},</p>
                <p className="font-semibold text-blue-600">&nbsp;&nbsp; {testimonial.city}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* ✅ Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Thank you!</DialogTitle>
            <DialogDescription>
              We have collected your data. Our team member will connect you soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className='bg-red-600' onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
