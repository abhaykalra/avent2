"use client"

import type React from "react"
import { useState } from "react"

// Logo Marquee Component
const LogoMarquee = () => {
  // Removed Oracle NetSuite from upper marquee
  const [logos] = useState([
    "https://imflvurocidruuiokmzq.supabase.co/storage/v1/object/public/images//sap-3.svg",
    "https://imflvurocidruuiokmzq.supabase.co/storage/v1/object/public/images//infor-1.svg",
    "https://imflvurocidruuiokmzq.supabase.co/storage/v1/object/public/images//Dynamics365_scalable.svg",
    "https://imflvurocidruuiokmzq.supabase.co/storage/v1/object/public/images//epicor-logo.svg",
  ])

  const [bottomLogos] = useState([
    "https://imflvurocidruuiokmzq.supabase.co/storage/v1/object/public/images//oracle-netsuite-svgrepo-com.svg",
    "https://imflvurocidruuiokmzq.supabase.co/storage/v1/object/public/images//ZOHO_logo_2023.svg",
    "https://imflvurocidruuiokmzq.supabase.co/storage/v1/object/public/images//Cin7_idlUNvOPj3_0.svg",
  ])

  // Custom size adjustments for specific logos
  const getLogoSize = (logoUrl) => {
    if (logoUrl.includes('epicor-logo')) {
      return "h-7 max-w-[100px] object-contain"; // Constrained size for Epicor
    } else if (logoUrl.includes('oracle-netsuite')) {
      return "h-12 w-auto object-contain"; // Larger for Oracle NetSuite
    }
    return "h-10 w-auto object-contain"; // Default size
  };

  return (
    <div className="w-full overflow-hidden bg-transparent my-8">
      {/* First row - left to right (slower) */}
      <div className="relative flex items-center">
        <div className="fade-left"></div>
        <div className="animate-marquee-right flex items-center">
          {/* Multiple copies for smoother transition with increased spacing and more repetitions */}
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={`logo1-${index}`} className="flex-shrink-0 mx-14">
              <img 
                src={logo} 
                alt={`Partner Logo ${index % logos.length + 1}`} 
                className={getLogoSize(logo)} 
                style={{ 
                  opacity: 0.9,
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          ))}
        </div>
        <div className="fade-right"></div>
      </div>

      {/* Second row - right to left (faster) */}
      <div className="relative flex items-center mt-12">
        <div className="fade-left"></div>
        <div className="animate-marquee-left flex items-center">
          {/* Multiple copies for smoother transition with consistent spacing */}
          {[...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, index) => (
            <div key={`logo2-${index}`} className="flex-shrink-0 mx-14">
              <img 
                src={logo} 
                alt={`Partner Logo ${index % bottomLogos.length + 1}`} 
                className={getLogoSize(logo)}
                style={{
                  opacity: 0.9,
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          ))}
        </div>
        <div className="fade-right"></div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% * ${logos.length} / 6)); }
        }
        
        @keyframes marquee-left {
          0% { transform: translateX(calc(-100% * ${bottomLogos.length} / 6)); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-right {
          animation: marquee-right 50s linear infinite;
        }
        
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        
        .fade-left, .fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        
        .fade-left {
          left: 0;
          background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
        }
        
        .fade-right {
          right: 0;
          background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
        }
      `}</style>
    </div>
  )
}

type FeatureItemProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <div className="mr-3">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function Benefits2() {
  return (
    <section className="relative w-full min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Seamlessly Connect with Your Existing Systems</h2>
          <p className="text-xl text-gray-600">
            Easily connect our AI solutions with your existing systems for a unified workflow that enhances productivity
            across your organization.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 max-w-6xl mx-auto">
          {/* Left side - Features */}
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="url(#icon-gradient)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              }
              title="Technology Integration"
              description="Direct connections with Epicor, SAP, Oracle, Microsoft Dynamics, and custom systems. Sync with product information management systems for real-time catalog updates."
            />
            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="url(#icon-gradient)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              }
              title="Secure Data Exchange"
              description="Maintain data integrity and security with enterprise-grade encryption and compliance protocols. Cloud-based, on-premises, or hybrid deployment options to match your IT infrastructure."
            />
            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="url(#icon-gradient)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              }
              title="Customizable Workflows"
              description="Design and implement tailored automation sequences that adapt to your unique business processes. Our agents handle your custom business logic, rules, and processes, with zero IT overhead."
            />
          </div>

          {/* Right side - Logo Marquee */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-8">
            <LogoMarquee />
          </div>
        </div>
      </div>

      {/* SVG gradient definition for icons */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" /> {/* blue-600 */}
            <stop offset="50%" stopColor="#a855f7" /> {/* purple-500 */}
            <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}

