import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { motion } from 'framer-motion';

const minBudgetOptions = [
  '1 Lakh', '2 Lakh', '3 Lakh', '4 Lakh', '5 Lakh',
  '6 Lakh', '7 Lakh', '8 Lakh', '9 Lakh', '10 Lakh'
];

const maxBudgetOptions = [
  '2 Lakh', '3 Lakh', '4 Lakh', '5 Lakh', '6 Lakh', '7 Lakh',
  '8 Lakh', '9 Lakh', '10 Lakh', '11 Lakh', '12 Lakh', '13 Lakh',
  '14 Lakh', '15 Lakh', 'Above 15 Lakh'
];

// 🔹 Dynamic Years
const currentYear = new Date().getFullYear();
const minYearOptions = ['Below 2000', ...Array.from({ length: currentYear - 1999 }, (_, i) => `${2000 + i}`)];
const maxYearOptions = Array.from({ length: currentYear - 2000 }, (_, i) => `${2001 + i}`);

const carData: Record<string, string[]> = {
  "Audi": ["A3", "A4", "A6", "Q3", "Q5", "Q7", "Q8"],
  "BMW": ["3 Series", "5 Series", "7 Series", "X1", "X3", "X5"],
  "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE"],
  "Honda": ["City", "Civic", "Amaze", "CR-V", "Jazz"],
  "Hyundai": ["i10", "i20", "Creta", "Venue", "Verna"],
  "Maruti Suzuki": ["Swift", "Baleno", "Alto", "Wagon R", "Dzire", "Ertiga", "Vitara Brezza"],
  "Toyota": ["Innova", "Fortuner", "Corolla", "Glanza", "Camry"],
  "Tata": ["Nexon", "Harrier", "Safari", "Tiago", "Altroz"],
  "Mahindra": ["Scorpio", "XUV300", "XUV500", "Bolero", "Thar"],
  "Kia": ["Seltos", "Sonet", "Carnival", "EV6"],
  "Volkswagen": ["Polo", "Vento", "Taigun", "Tiguan"],
  "Skoda": ["Rapid", "Slavia", "Kushaq", "Kodiaq"],
  "Ford": ["EcoSport", "Endeavour", "Figo", "Aspire"],
  "Nissan": ["Magnite", "Kicks", "Sunny"],
  "Renault": ["Kwid", "Triber", "Duster", "Kiger"],
  "Jeep": ["Compass", "Wrangler", "Meridian"],
  "MG": ["Hector", "Astor", "ZS EV", "Gloster"],
  "Lexus": ["ES", "RX", "NX"],
  "Jaguar": ["XE", "XF", "F-Pace"],
  "Land Rover": ["Defender", "Discovery", "Range Rover Evoque", "Range Rover Sport"],
  "Porsche": ["911", "Cayenne", "Panamera", "Macan"],
  "Lamborghini": ["Huracan", "Urus", "Aventador"],
  "Ferrari": ["488", "Roma", "Portofino"],
  "Tesla": ["Model 3", "Model S", "Model X", "Model Y"],
};

const bodyTypes = [
  'Sedan', 'Hatchback', 'SUV', 'MUV', 'Coupe', 'Convertible', 'Compact SUV', 'Full-Size SUV'
];

const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'LPG', 'Electric'];

export function CarRequirementForm() {
  const [formData, setFormData] = useState({
    minBudget: '',
    maxBudget: '',
    minYear: '',
    maxYear: '',
    make: '',
    model: '',
    bodyType: [] as string[],
    fuelType: [] as string[]
  });

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBodyTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      bodyType: checked
        ? [...prev.bodyType, type]
        : prev.bodyType.filter(t => t !== type)
    }));
  };

  const handleFuelTypeChange = (type: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      fuelType: checked
        ? [...prev.fuelType, type]
        : prev.fuelType.filter(t => t !== type)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 flex flex-col md:flex-row gap-6 mx-auto w-[1080px]"
    >
      {/* Left Card */}
      <Card className="flex-1 h-full">
        <div className=' text-white bg-red-600 font-medium flex justify-center py-2'>
          Post your Requirement
        </div>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Budget */}
            <div>
              <Label className="block mb-1 font-medium">Budget Range*</Label>
              <div className="flex gap-4">
                <Select onValueChange={value => handleSelectChange('minBudget', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Min. Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {minBudgetOptions.map(option => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select onValueChange={value => handleSelectChange('maxBudget', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Max. Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {maxBudgetOptions.map(option => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Year */}
            <div>
              <Label className="block mb-1 font-medium">Car Year*</Label>
              <div className="flex gap-4">
                <Select onValueChange={value => handleSelectChange('minYear', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Min. Year" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    {minYearOptions.map(year => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>

                </Select>

                <Select onValueChange={value => handleSelectChange('maxYear', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Max. Year" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    {maxYearOptions.map(year => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Make & Model */}
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Make Section */}
                <div>
                  <Label className="block mb-1 font-medium">Make*</Label>
                  <Select onValueChange={value => {
                    handleSelectChange('make', value);
                    handleSelectChange('model', ''); // reset model
                  }}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="--Select Make--" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {Object.keys(carData).map(make => (
                        <SelectItem key={make} value={make}>
                          {make}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Model Section */}
                <div>
                  <Label className="block mb-1 font-medium">Model*</Label>
                  <Select
                    value={formData.model}
                    onValueChange={value => handleSelectChange('model', value)}
                    disabled={!formData.make}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={formData.make ? "Select Model" : "Select Make first"} />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {formData.make &&
                        carData[formData.make]?.map(model => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Body Type */}
            <div>
              <Label className="mb-2 block font-semibold text-gray-700">Body Type*</Label>
              <div className="grid grid-cols-2 gap-2">
                {bodyTypes.map(type => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`body-${type}`}
                      checked={formData.bodyType.includes(type)}
                      onCheckedChange={checked =>
                        handleBodyTypeChange(type, !!checked)
                      }
                    />
                    <label htmlFor={`body-${type}`}>{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Fuel Type */}
            <div>
              <Label className="mb-2 block font-semibold text-gray-700">Fuel Type*</Label>
              <div className="grid grid-cols-2 gap-2">
                {fuelTypes.map(fuel => (
                  <div key={fuel} className="flex items-center space-x-2">
                    <Checkbox
                      id={`fuel-${fuel}`}
                      checked={formData.fuelType.includes(fuel)}
                      onCheckedChange={checked =>
                        handleFuelTypeChange(fuel, !!checked)
                      }
                    />
                    <label htmlFor={`fuel-${fuel}`}>{fuel}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-red-600">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Right Card */}
      <Card className="flex-1 h-full">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Welcome to Auto Gears</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            In the year 1998, Founder Of Auto Gears Group Mr NISHIT BRAHMBHATT at the young age
            of 28 envisaged about business of New cars, Used Cars, Finance and Insurance. His leadership
            qualities, continuous Endeavour, zeal for rapid growth, foresightedness and firm family support
            enabled Auto Gears to be recognised in the field of finance, Insurance.
          </p>
          <p>
            Over the past 25+ eventful years, Auto Gears™ (powered by Auto Gears™) is a one-stop shop
            for all your vehicle purchasing needs, Auto Gears has been a leading Finance retailer of ICICI
            Bank Ltd / HDFC Bank Ltd / AXIS Bank Ltd and more. With a growing customer base and
            reputation, It has been foremost in emulating the policy of offering the best finance deals in
            town. Easy and quick processing, plethora of finance options at attractive terms, have been the
            cutting-edge features of Auto Gears™.
          </p>

          <p>
            Over the past 27+ eventful years, Auto Gears™ is a one-stop shop for all your vehicle
            purchasing needs, Auto Gears has been leading finance retailer of ICICI Bank Ltd / HDFC Bank
            Ltd. With a growing customer base and reputation, It has been foremost in emulating the policy
            of offering the best car, finance and Insurance deals in town. Easy and quick processing,
            plethora of finance options at attractive terms have been the cutting-edge features of Auto Gears.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
