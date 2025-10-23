import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface LegalPagesProps {
  type: 'terms' | 'privacy';
  onClose: () => void;
}

export function LegalPages({ type, onClose }: LegalPagesProps) {


  const content = type === 'terms' ? {
    title: 'Terms & Conditions',
    sections: [
      {
        title: '1. General Terms',
        content: `These terms and conditions govern your use of Auto Gears services. By accessing our services, you agree to be bound by these terms. Auto Gears reserves the right to modify these terms at any time without prior notice.`
      },
      {
        title: '2. Services Offered',
        content: `Auto Gears provides car dealership services, financing solutions, insurance services, and related automotive services. We act as intermediaries between customers and financial institutions for loan approvals.`
      },
      {
        title: '3. Loan Application Process',
        content: `All loan applications are subject to approval by the respective financial institutions. Auto Gears does not guarantee loan approval. Interest rates and terms are determined by the lending institutions and may vary based on creditworthiness.`
      },
      {
        title: '4. Vehicle Information',
        content: `All vehicle information provided is based on manufacturer specifications and may vary. Customers are advised to verify all details before making purchase decisions. Auto Gears is not responsible for any discrepancies in vehicle specifications.`
      },
      {
        title: '5. Payment Terms',
        content: `All payments must be made as per agreed terms. Any default in payment may result in legal action. Service charges and processing fees are non-refundable once services are rendered.`
      },
      {
        title: '6. Limitation of Liability',
        content: `Auto Gears shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the service charges paid by the customer.`
      },
      {
        title: '7. Governing Law',
        content: `These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of Mumbai courts only.`
      }
    ]
  } : {
    title: 'Privacy Policy',
    sections: [
      {
        title: '1. Information Collection',
        content: `We collect personal information including name, contact details, financial information, and other relevant data necessary for providing our services. This information is collected through forms, applications, and direct communication.`
      },
      {
        title: '2. Use of Information',
        content: `Your information is used to process loan applications, provide vehicle information, facilitate transactions, communicate with you about our services, and comply with legal requirements.`
      },
      {
        title: '3. Information Sharing',
        content: `We share your information with banks, financial institutions, insurance companies, and other authorized parties as necessary to provide our services. We do not sell your personal information to third parties.`
      },
      {
        title: '4. Data Security',
        content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`
      },
      {
        title: '5. Cookies and Tracking',
        content: `Our website may use cookies to enhance user experience and analyze website usage. You can disable cookies in your browser settings, but this may affect website functionality.`
      },
      {
        title: '6. Third-Party Links',
        content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.`
      },
      {
        title: '7. Contact Information',
        content: `For any privacy-related queries or concerns, please contact us at privacy@autogears.in or call +91 9867358999. We are committed to addressing your privacy concerns promptly.`
      },
      {
        title: '8. Updates to Privacy Policy',
        content: `We may update this privacy policy from time to time. Any changes will be posted on our website with the effective date. Continued use of our services constitutes acceptance of the updated policy.`
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-lg bg-white scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin"
      >
        <Card className="h-full border-0 shadow-none">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-red-600 text-white sticky top-0 z-10">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">{content.title}</CardTitle>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-gray-800">Auto Gears™</h2>
                <p className="text-gray-600">Effective Date: January 1, 2025</p>
                <p className="text-gray-600">Last Updated: January 1, 2025</p>
              </div>

              {content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-blue-500 pl-4"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Auto Gears™</strong></p>
                  <p>OFF No 202, Chaitanya Chs Ltd</p>
                  <p>S. V. Road, Siddharth Nagar, Goregaon West</p>
                  <p>Mumbai - 400104</p>
                  <p>Phone: +91 9867358999 / +91 9321117593</p>
                  <p>Email: sales@autogears.in</p>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 mt-6">
                <p>© 2025 Auto Gears. All rights reserved.</p>
                <p>This document was last updated on January 1, 2025.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>

  );
}