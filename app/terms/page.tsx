"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TermsOfService() {
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
            Terms of Service
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

      {/* Terms content */}
      <div className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-4">Last Updated: March 1, 2025</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to aventindustrial.com (the "Site"), owned and operated by Avent Technology LLC ("Avent," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our Site, software, products, and services (collectively, the "Services").
            </p>
            <p className="mb-4">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">2. Eligibility</h2>
            <p className="mb-4">
              You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this requirement and that you have the right, authority, and capacity to enter into these Terms.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">3. Account Registration</h2>
            <p className="mb-4">
              To access certain features of our Services, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information and to update such information to keep it accurate, current, and complete. You are solely responsible for safeguarding your account credentials and for all activity that occurs under your account.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">4. License and Restrictions</h2>
            <p className="mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for your internal business purposes. You may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the Services in any way that violates applicable laws or regulations</li>
              <li>Sell, license, rent, lease, or otherwise commercialize the Services</li>
              <li>Copy, modify, or create derivative works of the Services</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the Services</li>
              <li>Use the Services to harm, threaten, or harass any person or organization</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Attempt to gain unauthorized access to the Services or related systems</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">5. Proprietary Rights</h2>
            <p className="mb-4">
              The Services, including all content, features, and functionality, are owned by Avent and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. Nothing in these Terms grants you any right, title, or interest in or to the Services except for the limited license expressly set forth in Section 4.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">6. User Content</h2>
            <p className="mb-4">
              You may be able to submit, upload, or otherwise provide content to or through the Services ("User Content"). You retain all rights in your User Content, but you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, copy, modify, create derivative works of, display, and perform your User Content in connection with operating and providing the Services.
            </p>
            <p className="mb-4">
              You represent and warrant that you own or have the necessary rights to your User Content and that your User Content does not infringe or violate the intellectual property rights or other rights of any third party.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">7. AI Systems and Data Processing</h2>
            <p className="mb-4">
              Our Services may utilize artificial intelligence and machine learning technologies to process data and provide insights. By using our Services, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>AI systems may generate content, recommendations, or predictions based on the data you provide</li>
              <li>The accuracy and reliability of AI-generated content may vary</li>
              <li>We may use anonymized and aggregated data to improve and train our AI systems</li>
              <li>We implement reasonable safeguards to protect your data, but no system is 100% secure</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">8. Integration with Third-Party Services</h2>
            <p className="mb-4">
              Our Services may integrate with or allow access to third-party services, websites, or resources. We are not responsible for the availability or accuracy of such third-party services, and your use of third-party services may be subject to separate terms and conditions provided by the third party.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">9. Payment Terms</h2>
            <p className="mb-4">
              If you subscribe to our paid Services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You agree to pay all fees in accordance with the payment terms presented at the time of purchase</li>
              <li>All payments are non-refundable unless otherwise specified or required by law</li>
              <li>We may change our fees at any time with notice to you</li>
              <li>You are responsible for all applicable taxes, unless stated otherwise</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">10. Confidentiality</h2>
            <p className="mb-4">
              You may receive access to confidential or proprietary information ("Confidential Information") through your use of the Services. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintain the confidentiality of Confidential Information</li>
              <li>Use Confidential Information only as necessary to use the Services</li>
              <li>Not disclose Confidential Information to any third party without our prior written consent</li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">11. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">12. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL AVENT OR ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THE SERVICES.
            </p>
            <p className="mb-4">
              UNDER NO CIRCUMSTANCES WILL AVENT'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID AVENT IN THE LAST SIX (6) MONTHS, OR, IF GREATER, ONE HUNDRED DOLLARS ($100).
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">13. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Avent and its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that arise from or relate to: (a) your use of the Services; (b) your User Content; (c) your violation of these Terms; or (d) your violation of any rights of another.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">14. Term and Termination</h2>
            <p className="mb-4">
              These Terms will continue to apply until terminated by either you or Avent. You may terminate these Terms at any time by ceasing all use of the Services and, if applicable, canceling your account.
            </p>
            <p className="mb-4">
              We may terminate or suspend your access to the Services at any time, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms.
            </p>
            <p className="mb-4">
              Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">15. Modifications to the Terms</h2>
            <p className="mb-4">
              We may modify these Terms at any time by posting the revised Terms on the Site. Your continued use of the Services after the effective date of the revised Terms constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">16. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles. Any legal action or proceeding arising out of or relating to these Terms or your use of the Services shall be brought exclusively in the federal or state courts located in Delaware, and you consent to the personal jurisdiction of such courts.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">17. Dispute Resolution</h2>
            <p className="mb-4">
              Any dispute arising from or relating to these Terms or the Services will first be resolved through good faith negotiations. If such negotiations fail, the dispute shall be resolved through binding arbitration conducted by the American Arbitration Association in accordance with its Commercial Arbitration Rules.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">18. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">19. Assignment</h2>
            <p className="mb-4">
              You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms without such consent will be null and void. We may assign or transfer these Terms, at our sole discretion, without restriction.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">20. Entire Agreement</h2>
            <p className="mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Avent regarding the Services and supersede all prior or contemporaneous communications, proposals, and agreements, whether oral or written, between you and Avent regarding the Services.
            </p>

            <h2 className="text-2xl font-medium mt-8 mb-4">21. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-4">
              Avent Technology LLC<br />
              Email: legal@aventindustrial.com<br />
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