import { Card, CardContent } from './ui/card';
import { motion } from "framer-motion"


export function AboutSection() {
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
        About Auto Gears™
      </motion.h2>

      <div className="space-y-8">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Auto Gears™ (powered by Auto Gears™ Since 1998)</h3>
              <p className="text-gray-700 leading-relaxed">
                In the year 1998, Founder Of Auto Gears Group Mr NISHIT BRAHMBHATT at the young age
                of 28 envisaged about business of New cars, Used Cars, Finance and Insurance. His leadership
                qualities, continuous Endeavour, zeal for rapid growth, foresightedness and firm family support
                enabled Auto Gears to be recognised in the field of finance, Insurance.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed">
                Over the past 25+ eventful years, Auto Gears™ (powered by Auto Gears™) is a one-stop shop
                for all your vehicle purchasing needs, Auto Gears has been a leading Finance retailer of ICICI
                Bank Ltd / HDFC Bank Ltd / AXIS Bank Ltd and more. With a growing customer base and
                reputation, It has been foremost in emulating the policy of offering the best finance deals in
                town. Easy and quick processing, plethora of finance options at attractive terms, have been the
                cutting-edge features of Auto Gears™.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Who Are We */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-600">Who Are We</h3>
              <p className="text-gray-700 leading-relaxed">
                Auto Gears™ (powered by Auto Gears™) is renown for New &amp; Pre-owned cars Finance since
                1998 and D.M.A. of India&#39;s leading Bank and Insurance Companies, namely ICICI Bank /
                HDFC Bank and TATA AIG and more.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-600">What We Do</h3>
              <p className="text-gray-700 leading-relaxed">
                We Organise speediest availability of any new and pre-owned cars at your doorstep, we also
                deal in all kind of retail loans like Car Loans, Personal Loans, Business Loans, Property
                Mortgage loans and also car Insurance.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Insurance */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-red-600">Insurance</h3>
              <p className="text-gray-700 leading-relaxed">
                Auto Gears is also associated with several life &amp; non life insurance companies since 2001.
                Number of certificates, felicitations, recognitions speak about the rapid growth of the insurance
                business too. End to end solutions from availing an insurance to renewals to claims &amp;
                settlements is managed by our specialised team.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Why Choose Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Over the past 27+ eventful years, Auto Gears™ is a one-stop shop for all your vehicle
                purchasing needs, Auto Gears has been leading finance retailer of ICICI Bank Ltd / HDFC Bank
                Ltd. With a growing customer base and reputation, It has been foremost in emulating the policy
                of offering the best car, finance and Insurance deals in town. Easy and quick processing,
                plethora of finance options at attractive terms have been the cutting-edge features of Auto Gears.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Our Main Products */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Our Main Products</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Vehicle Services</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Used cars Loans</li>
                    <li>• Used Car Purchase</li>
                    <li>• Used Car Sales</li>
                    <li>• New Cars – All Brand</li>
                    <li>• New Car Loans</li>
                    <li>• Secured and Unsecured Loans</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Insurance Services</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• TATA AIG</li>
                    <li>• ICICI LOMBARD</li>
                    <li>• HDFC ERGO</li>
                    <li>• FUTURE GENERALI</li>
                    <li>• BAJAJ ALLIANZ</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Other Services</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Unsecured loans to individuals and businesses</li>
                    <li>• Secured loans to individuals and businesses</li>
                    <li>• Debt syndication for businesses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}