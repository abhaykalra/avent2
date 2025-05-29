"use client"

import type React from "react"
import { forwardRef, useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "./animatedbeam"
import { ScrollAnimation } from "./ScrollAnimation"

// Circle component for the animated beam
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

// Define the Icons object with the provided URLs
const Icons = {
  googleDocs: "https://gkkolkvmncqorlemaiwo.supabase.co/storage/v1/object/public/images//fax-machine-svgrepo-com.svg",
  notion:
    "https://gkkolkvmncqorlemaiwo.supabase.co/storage/v1/object/public/images//whatsapp-icon-logo-svgrepo-com.svg",
  messenger: "https://gkkolkvmncqorlemaiwo.supabase.co/storage/v1/object/public/images//pdf-svgrepo-com.svg",
  whatsapp: "https://gkkolkvmncqorlemaiwo.supabase.co/storage/v1/object/public/images//outlook-svgrepo-com.svg",
  zapier: "https://gkkolkvmncqorlemaiwo.supabase.co/storage/v1/object/public/images//handshake-svgrepo-com.svg",
  googleDrive: "https://gkkolkvmncqorlemaiwo.supabase.co/storage/v1/object/public/images//apple-phone.svg",
  openai: "https://gkkolkvmncqorlemaiwo.supabase.co/storage/v1/object/public/images//aventlogo.svg",
}

// Animated Beam Component
function AnimatedBeamDemo() {
  const containerRef = useRef(null)
  const centerRef = useRef(null)
  const topLeftRef = useRef(null)
  const topRightRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const bottomLeftRef = useRef(null)
  const bottomRightRef = useRef(null)
  const [refsReady, setRefsReady] = useState(false)

  useEffect(() => {
    if (
      containerRef.current &&
      centerRef.current &&
      topLeftRef.current &&
      topRightRef.current &&
      leftRef.current &&
      rightRef.current &&
      bottomLeftRef.current &&
      bottomRightRef.current
    ) {
      setRefsReady(true)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-white"
    >
      {refsReady && (
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={topLeftRef}
            animationDuration={5}
            beamClassName="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={topRightRef}
            animationDuration={5}
            beamClassName="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={leftRef}
            animationDuration={5}
            beamClassName="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={rightRef}
            animationDuration={5}
            beamClassName="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={bottomLeftRef}
            animationDuration={5}
            beamClassName="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={bottomRightRef}
            animationDuration={5}
            beamClassName="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"
          />
        </>
      )}

      <div className="relative w-full h-full">
        <Circle ref={centerRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20">
          <img src={Icons.openai || "/placeholder.svg"} alt="OpenAI" className="h-12 w-12" />
        </Circle>

        <Circle ref={topLeftRef} className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 h-16 w-16">
          <img src={Icons.googleDocs || "/placeholder.svg"} alt="Google Docs" className="h-8 w-8" />
        </Circle>

        <Circle ref={topRightRef} className="absolute right-1/4 top-1/4 translate-x-1/2 -translate-y-1/2 h-16 w-16">
          <img src={Icons.notion || "/placeholder.svg"} alt="Notion" className="h-8 w-8" />
        </Circle>

        <Circle ref={rightRef} className="absolute right-1/4 top-1/2 translate-x-3/4 -translate-y-1/2 h-16 w-16">
          <img src={Icons.messenger || "/placeholder.svg"} alt="Messenger" className="h-8 w-8" />
        </Circle>

        <Circle ref={leftRef} className="absolute left-1/4 top-1/2 -translate-x-3/4 -translate-y-1/2 h-16 w-16">
          <img src={Icons.whatsapp || "/placeholder.svg"} alt="WhatsApp" className="h-8 w-8" />
        </Circle>

        <Circle ref={bottomLeftRef} className="absolute left-1/4 bottom-1/4 -translate-x-1/2 translate-y-1/2 h-16 w-16">
          <img src={Icons.zapier || "/placeholder.svg"} alt="Zapier" className="h-8 w-8" />
        </Circle>

        <Circle
          ref={bottomRightRef}
          className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 h-16 w-16"
        >
          <img src={Icons.googleDrive || "/placeholder.svg"} alt="Google Drive" className="h-8 w-8" />
        </Circle>
      </div>
    </div>
  )
}

// Feature Item Component
type FeatureItemProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <div className="h-8 w-8">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-medium">{title}</h3>
      </div>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  )
}

export default function Benefits1() {
  return (
    <section id="benefits1" className="relative w-full py-16 md:py-24 lg:py-32 bg-white">
      <ScrollAnimation>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-center mb-16">
              Personalized Customer Engagement
            </h2>
            <p className="text-xl text-gray-600">
              Meet Customers on Their Terms. With AI you can take orders from every medium, with zero friction.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Animated Beam Component */}
            <div className="w-full lg:w-1/2 relative aspect-square rounded-3xl overflow-hidden">
              <div
                className="absolute inset-0 w-full h-full rounded-3xl z-10 border-gray-500"
                style={{ borderWidth: "0.1px" }}
                aria-hidden="true"
              />
              <AnimatedBeamDemo />
            </div>

            {/* Right side - Features */}
            <div className="w-full lg:w-1/2">
              <FeatureItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="url(#icon-gradient)"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                }
                title="Voice"
                description="Guides sales reps through complex catalogs during customer calls, ensuring accurate product selection and availability information without delays. Autonomous agents to handle overload and afterhours."
              />
              <FeatureItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="url(#icon-gradient)"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Real-time Responses"
                description="Deliver instant, contextually relevant information to customers when they need, wherever they need it. Instant responses to product, pricing, and availability questions"
              />
              <FeatureItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="url(#icon-gradient)"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                title="Document Intelligence"
                description="Intelligent parsing of purchase orders, RFQs, and technical specifications. Extracts critical information with perfect accuracy, automating ERP data entry"
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>

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

