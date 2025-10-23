import { Card } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export default function AutoGearsContact() {
  return (
    <div className="w-[1280px] mx-auto">
      <Card className="p-4 shadow-md rounded-md mx-2 mt-10">
        <h2 className="text-lg  font-bold mb-4">Contact Details</h2>

        {/* 4 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700">
          {/* Address */}
          <div>
            <h3 className="font-semibold text-black ">Auto Gears</h3>
            <p>OFF No 202, Chaitanya Chs Ltd</p>
            <p>S. V. Road , Siddharth Nagar,</p>
            <p>Goregaon (West), Mumbai – 400104</p>
            <p>Land Mark : Ram Mandir Road Junction</p>
          </div>

          {/* Phone */}
          <div>
            <p className="font-semibold flex items-center gap-2">
              <Phone size={16} className="text-gray-600" /> Phone:
            </p>
            <p className="ml-8">
              <a href="tel:+919876543210" className="text-blue-600">
                +91 9876543210
              </a>
              <br/>
              <a href="tel:+919876512345" className="text-blue-600">
                +91 9876512345
              </a>
              <br />
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="font-semibold flex items-center gap-2">
              <Mail size={16} className="text-gray-600" /> Email:
            </p>
            <p className="ml-6">
              <a
                href="mailto:sales@autogears.com"
                className="text-red-600 font-medium"
              >
                sales@autogears.in
              </a>
              {/* <br />
              <a
                href="mailto:custoinfomersupport@autogears.com"
                className="text-red-600 font-medium"
              >
                info@autogears.in
              </a> */}
              <br />
              <a
                href="mailto:support@autogears.com"
                className="text-red-600 font-medium"
              >
                support@autogears.in
              </a>


            </p>
          </div>

          {/* Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8782680852377!2d72.87747137520568!3d19.17200738203812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b79c08a1169b%3A0x4356f0a5f7f83aec!2sChaitanya%20Building!5e0!3m2!1sen!2sin!4v1693235953471!5m2!1sen!2sin"
              width="100%"
              height="160"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Card>
    </div>
  )
}
