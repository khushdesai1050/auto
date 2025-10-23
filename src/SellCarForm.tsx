import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { motion } from "framer-motion"


const safetyFeatures = [
  'Driver Air Bag', 'Passenger Air Bag', 'Anti-Lock Brakes', 
  'Immobilizer', 'Child Safety Locks', 'Traction Control'
];

const comfortFeatures = [
  'Air Conditioning', 'Power Steering', 'Power Windows', 
  'Power Door Locks', 'Power Seats', 'Defogger', 'Central Locking', 
  'Steering Adjustment', 'Remote Boot/Fuel-Lid'
];

const otherFeatures = [
  'Alloy Wheels', 'Rear Wash Wiper', 'Audio System', 
  'Cup Holder', 'Tubeless Tyres', 'Fog Lights', 'Leather Seats', 'Tachometer'
];

const conditionCategories = [
  'Air Conditioning', 'Battery Condition', 'Brakes Condition', 'Car Electricals',
  'Car Engine', 'Seat Condition', 'Suspensions', 'Tyres Condition',
  'Interior Condition', 'Exterior Condition', 'OverAll Car Condition'
];

export function SellCarForm() {
  const [formData, setFormData] = useState({
    carModel: '',
    makeYear: '',
    owner: '',
    colour: '',
    kmDone: '',
    city: '',
    registrationNo: '',
    registrationAt: '',
    registrationType: 'Individual',
    carInsurance: '',
    insuranceValidTill: '',
    estimatedPrice: '',
    accidental: 'No',
    floodAffected: 'No',
    safetyFeatures: [],
    comfortFeatures: [],
    otherFeatures: [],
    conditions: {},
    warranties: '',
    modifications: '',
    specialNote: '',
    name: '',
    mobile: '',
    email: ''
  });

  const handleFeatureChange = (category: string, feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [category]: checked 
        ? [...prev[category], feature]
        : prev[category].filter(f => f !== feature)
    }));
  };

  const handleConditionChange = (category: string, rating: string) => {
    setFormData(prev => ({
      ...prev,
      conditions: {
        ...prev.conditions,
        [category]: rating
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sell car form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto p-6"
    >
      <Card className="shadow-xl">
        <CardHeader className="bg-red-600 text-white">
          <CardTitle className="text-2xl text-center">Sell Your Car</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Car Details */}
            <div>
              <h3 className="text-xl font-bold mb-4">Car Details</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label>Your Car*</Label>
                  <Input 
                    value={formData.carModel}
                    onChange={(e) => setFormData(prev => ({...prev, carModel: e.target.value}))}
                    placeholder="Enter car model"
                  />
                </div>
                
                <div>
                  <Label>Make Year*</Label>
                  <Select value={formData.makeYear} onValueChange={(value) => setFormData(prev => ({...prev, makeYear: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 25}, (_, i) => 2025 - i).map(year => (
                        <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Owner</Label>
                  <Select value={formData.owner} onValueChange={(value) => setFormData(prev => ({...prev, owner: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select owner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st">1st Owner</SelectItem>
                      <SelectItem value="2nd">2nd Owner</SelectItem>
                      <SelectItem value="3rd">3rd Owner</SelectItem>
                      <SelectItem value="4th+">4th+ Owner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Colour</Label>
                  <Input 
                    value={formData.colour}
                    onChange={(e) => setFormData(prev => ({...prev, colour: e.target.value}))}
                    placeholder="Enter colour"
                  />
                </div>
                
                <div>
                  <Label>KM Done</Label>
                  <Input 
                    value={formData.kmDone}
                    onChange={(e) => setFormData(prev => ({...prev, kmDone: e.target.value}))}
                    placeholder="Enter kilometers"
                  />
                </div>
                
                <div>
                  <Label>City*</Label>
                  <Input 
                    value={formData.city}
                    onChange={(e) => setFormData(prev => ({...prev, city: e.target.value}))}
                    placeholder="Enter city"
                  />
                </div>

                <div>
                  <Label>Registration No.</Label>
                  <Input 
                    value={formData.registrationNo}
                    onChange={(e) => setFormData(prev => ({...prev, registrationNo: e.target.value}))}
                    placeholder="Enter registration number"
                  />
                </div>
                
                <div>
                  <Label>Registration At</Label>
                  <Input 
                    value={formData.registrationAt}
                    onChange={(e) => setFormData(prev => ({...prev, registrationAt: e.target.value}))}
                    placeholder="Enter registration location"
                  />
                </div>
                
                <div>
                  <Label>Estimated Price (₹)</Label>
                  <Input 
                    value={formData.estimatedPrice}
                    onChange={(e) => setFormData(prev => ({...prev, estimatedPrice: e.target.value}))}
                    placeholder="Enter estimated price"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label>Registration Type</Label>
                  <RadioGroup 
                    value={formData.registrationType} 
                    onValueChange={(value) => setFormData(prev => ({...prev, registrationType: value}))}
                    className="flex space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Individual" id="individual" />
                      <Label htmlFor="individual">Individual</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Corporate" id="corporate" />
                      <Label htmlFor="corporate">Corporate</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label>Insurance Valid Till</Label>
                  <Input 
                    type="date"
                    value={formData.insuranceValidTill}
                    onChange={(e) => setFormData(prev => ({...prev, insuranceValidTill: e.target.value}))}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label>Is car accidental?</Label>
                  <RadioGroup 
                    value={formData.accidental} 
                    onValueChange={(value) => setFormData(prev => ({...prev, accidental: value}))}
                    className="flex space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Yes" id="accidental-yes" />
                      <Label htmlFor="accidental-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="No" id="accidental-no" />
                      <Label htmlFor="accidental-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label>Is car flood-affected?</Label>
                  <RadioGroup 
                    value={formData.floodAffected} 
                    onValueChange={(value) => setFormData(prev => ({...prev, floodAffected: value}))}
                    className="flex space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Yes" id="flood-yes" />
                      <Label htmlFor="flood-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="No" id="flood-no" />
                      <Label htmlFor="flood-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Installed Features */}
            <div>
              <h3 className="text-xl font-bold mb-4">Installed Features</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Safety & Security</h4>
                  <div className="space-y-2">
                    {safetyFeatures.map(feature => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox 
                          id={feature}
                          checked={formData.safetyFeatures.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureChange('safetyFeatures', feature, checked as boolean)}
                        />
                        <Label htmlFor={feature} className="text-sm">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Comfort & Convenience</h4>
                  <div className="space-y-2">
                    {comfortFeatures.map(feature => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox 
                          id={feature}
                          checked={formData.comfortFeatures.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureChange('comfortFeatures', feature, checked as boolean)}
                        />
                        <Label htmlFor={feature} className="text-sm">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Other Features</h4>
                  <div className="space-y-2">
                    {otherFeatures.map(feature => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox 
                          id={feature}
                          checked={formData.otherFeatures.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureChange('otherFeatures', feature, checked as boolean)}
                        />
                        <Label htmlFor={feature} className="text-sm">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Car Condition */}
            <div>
              <h3 className="text-xl font-bold mb-4">Car Condition</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2 text-left">Component</th>
                      <th className="border border-gray-300 p-2">Excellent</th>
                      <th className="border border-gray-300 p-2">Good</th>
                      <th className="border border-gray-300 p-2">Fair</th>
                      <th className="border border-gray-300 p-2">Poor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {conditionCategories.map(category => (
                      <tr key={category}>
                        <td className="border border-gray-300 p-2">{category}</td>
                        {['Excellent', 'Good', 'Fair', 'Poor'].map(rating => (
                          <td key={rating} className="border border-gray-300 p-2 text-center">
                            <input
                              type="radio"
                              name={category}
                              value={rating}
                              checked={formData.conditions[category] === rating}
                              onChange={() => handleConditionChange(category, rating)}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <Label>Available Warranties (If Any)</Label>
                  <Textarea 
                    value={formData.warranties}
                    onChange={(e) => setFormData(prev => ({...prev, warranties: e.target.value}))}
                    placeholder="e.g. Lifetime warranty on wheels, two free services remaining etc."
                  />
                </div>
                
                <div>
                  <Label>Major Modifications (If Any)</Label>
                  <Textarea 
                    value={formData.modifications}
                    onChange={(e) => setFormData(prev => ({...prev, modifications: e.target.value}))}
                    placeholder="e.g. Upgraded Wheels, High performance filters etc."
                  />
                </div>
                
                <div>
                  <Label>Special Note</Label>
                  <Textarea 
                    value={formData.specialNote}
                    onChange={(e) => setFormData(prev => ({...prev, specialNote: e.target.value}))}
                    placeholder="Adding a special note helps generate trust and create authenticity about the car, among customers."
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label>Name*</Label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <Label>Mobile*</Label>
                  <Input 
                    value={formData.mobile}
                    onChange={(e) => setFormData(prev => ({...prev, mobile: e.target.value}))}
                    placeholder="10 digits number"
                  />
                </div>
                
                <div>
                  <Label>Email</Label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-red-600 text-white py-3 text-lg"
            >
              Submit Car Details
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}