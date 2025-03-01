"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function PrivacyPolicy() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Gradient section for title */}
      <div className="relative w-full py-12">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientAnimation 8s ease infinite",
          }}
        />
        
        {/* Colored light fold lines */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(79, 70, 229, 0.18) 10%, transparent 30%),
              linear-gradient(45deg, rgba(147, 51, 234, 0.15) 15%, transparent 40%),
              linear-gradient(225deg, rgba(59, 130, 246, 0.18) 5%, transparent 25%)
            `,
            backgroundSize: "200% 200%",
            animation: "gradientAnimation 8s ease infinite",
          }}
        />

        {/* Title content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900">
            Privacy Policy
          </h1>
          <Button 
            variant="outline"
            onClick={() => router.push('/')}
            className="mb-4"
          >
            Go Home
          </Button>
        </div>
      </div>

      {/* Privacy Policy content */}
      <div className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">Last Updated: March 1, 2025</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Avent Technology LLC ("Avent," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aventindustrial.com (the "Site") or use our products and services (collectively, the "Services").
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.1 Information You Provide to Us</h3>
            <p className="mb-4">
              We may collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Register for an account</li>
              <li>Fill out a form on our Site</li>
              <li>Subscribe to our newsletter</li>
              <li>Request customer support</li>
              <li>Purchase or trial our Services</li>
              <li>Upload content to our Services</li>
              <li>Communicate with us via third-party social media sites</li>
              <li>Submit audio recordings or conversation data for analysis by our AI systems</li>
            </ul>
            <p className="mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (such as name, email address, mailing address, and phone number)</li>
              <li>Business information (such as company name, job title, industry, and company size)</li>
              <li>Account credentials (such as username and password)</li>
              <li>Payment information (such as credit card information, which is processed by our third-party payment processors)</li>
              <li>User-generated content (such as comments, feedback, and other information you provide)</li>
              <li>Sales data, inventory information, and other business data you choose to process through our Services</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">2.2 Information We Collect Automatically</h3>
            <p className="mb-4">
              When you use our Services, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Device information (such as your IP address, browser type, operating system, and device identifiers)</li>
              <li>Usage data (such as pages visited, features used, time spent on the Site, and referring URLs)</li>
              <li>Location information (such as general geographic location based on your IP address)</li>
              <li>Log data (such as error reports, activity logs, and performance data)</li>
            </ul>
            <p className="mb-4">
              We may use cookies, web beacons, pixels, and similar tracking technologies to collect this information. You can set your browser to refuse all or some browser cookies, but doing so may affect your ability to use certain aspects of our Services.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">2.3 Information from Third Parties</h3>
            <p className="mb-4">
              We may receive information about you from third parties, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Business partners (such as integration partners and resellers)</li>
              <li>Data analytics providers</li>
              <li>Marketing partners</li>
              <li>Public databases</li>
              <li>Social media platforms, if you choose to link your account to our Services</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process and complete transactions</li>
              <li>Register and manage your account</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices, updates, security alerts, and administrative messages</li>
              <li>Communicate with you about products, services, offers, promotions, and events</li>
              <li>Develop new products and services</li>
              <li>Generate and train machine learning models to improve our AI systems</li>
              <li>Analyze how you use our Services to better serve you</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Protect the rights, property, and safety of Avent, our users, and others</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">4. How We Share Your Information</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">4.1 With Your Consent</h3>
            <p className="mb-4">
              We may share your information when you instruct us to do so or when you provide consent.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">4.2 Service Providers</h3>
            <p className="mb-4">
              We may share your information with third-party service providers who perform services on our behalf, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cloud hosting providers</li>
              <li>Payment processors</li>
              <li>Customer support services</li>
              <li>Email service providers</li>
              <li>Analytics providers</li>
              <li>Marketing and advertising companies</li>
            </ul>
            <p className="mb-4">
              These service providers are permitted to use your information only as necessary to provide services to us and are required to maintain the confidentiality of your information.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">4.3 Business Transfers</h3>
            <p className="mb-4">
              If Avent is involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">4.4 Legal Requirements</h3>
            <p className="mb-4">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">4.5 Protection of Rights</h3>
            <p className="mb-4">
              We may disclose your information to protect the rights, property, or safety of Avent, our users, or others, including exchanging information with other companies and organizations for fraud protection and risk reduction.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement reasonable security measures designed to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need to use your information, we will remove it from our systems or anonymize it so that it no longer identifies you.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">7. Your Rights and Choices</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Access</strong>: You may request access to the personal information we maintain about you.</li>
              <li><strong>Correction</strong>: You may request that we correct inaccurate or incomplete information about you.</li>
              <li><strong>Deletion</strong>: You may request that we delete your personal information.</li>
              <li><strong>Portability</strong>: You may request a copy of the personal information you provided to us in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Objection</strong>: You may object to our processing of your personal information.</li>
              <li><strong>Restriction</strong>: You may request that we restrict the processing of your personal information.</li>
              <li><strong>Withdrawal of Consent</strong>: You may withdraw your consent at any time for processing activities based on consent.</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below. Please note that some of these rights may be limited where we have compelling legitimate grounds or legal obligations to process your personal information.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">8. Children's Privacy</h2>
            <p className="mb-4">
              Our Services are not directed to children under the age of 18, and we do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">9. Third-Party Websites and Services</h2>
            <p className="mb-4">
              Our Services may contain links to third-party websites and services. This Privacy Policy does not apply to those third-party websites and services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites or services you visit.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">10. International Data Transfers</h2>
            <p className="mb-4">
              We may transfer your information to countries other than the country in which you initially provided the information for the purposes described in this Privacy Policy. If we transfer your information to countries that may not provide the same level of data protection as your country, we will take measures to ensure that your information receives an adequate level of protection.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">11. Changes to this Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our Site or by other means, such as email. The date the Privacy Policy was last revised is identified at the top of the page.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">12. AI Voice and Conversation Data</h2>
            <p className="mb-4">
              Our Services include AI agents for voice interactions and sales call assistance. When you use these features:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Voice recordings may be processed to provide real-time assistance and insights</li>
              <li>Conversation content may be analyzed to extract relevant business information</li>
              <li>Transcripts may be generated to enable search and information extraction</li>
              <li>Aggregated, anonymized data may be used to improve our AI models</li>
              <li>We implement technical safeguards to protect sensitive information mentioned in conversations</li>
            </ul>
            <p className="mb-4">
              You are responsible for ensuring you have appropriate consent from all parties before submitting or recording conversations for processing by our Services.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">13. California Privacy Rights</h2>
            <p className="mb-4">
              If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA). Please refer to our California Privacy Notice [aventindustrial.com/california-privacy] for more information about these rights.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">14. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-4">
              Avent Technology LLC<br />
              Email: privacy@aventindustrial.com<br />
              Website: https://www.aventindustrial.com
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
} 