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
                    viewBox="0 0 24 24"
                    fill="url(#icon-gradient)"
                  >
                    <path d="M12,2.5 C12.7796706,2.5 13.4204457,3.09488554 13.4931332,3.85553954 L13.5,4 L13.5,20 C13.5,20.8284 12.8284,21.5 12,21.5 C11.2203294,21.5 10.5795543,20.9050879 10.5068668,20.1444558 L10.5,20 L10.5,4 C10.5,3.17157 11.1716,2.5 12,2.5 Z M8,5.5 C8.82843,5.5 9.5,6.17157 9.5,7 L9.5,17 C9.5,17.8284 8.82843,18.5 8,18.5 C7.17157,18.5 6.5,17.8284 6.5,17 L6.5,7 C6.5,6.17157 7.17157,5.5 8,5.5 Z M16,5.5 C16.8284,5.5 17.5,6.17157 17.5,7 L17.5,17 C17.5,17.8284 16.8284,18.5 16,18.5 C15.1716,18.5 14.5,17.8284 14.5,17 L14.5,7 C14.5,6.17157 15.1716,5.5 16,5.5 Z M4,8.5 C4.82843,8.5 5.5,9.17157 5.5,10 L5.5,14 C5.5,14.8284 4.82843,15.5 4,15.5 C3.17157,15.5 2.5,14.8284 2.5,14 L2.5,10 C2.5,9.17157 3.17157,8.5 4,8.5 Z M20,8.5 C20.7796706,8.5 21.4204457,9.09488554 21.4931332,9.85553954 L21.5,10 L21.5,14 C21.5,14.8284 20.8284,15.5 20,15.5 C19.2203294,15.5 18.5795543,14.9050879 18.5068668,14.1444558 L18.5,14 L18.5,10 C18.5,9.17157 19.1716,8.5 20,8.5 Z" />
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
                    className="h-6 w-6"
                    viewBox="0 0 90 90"
                    fill="url(#icon-gradient)"
                  >
                    <path d="M 87.803 77.194 L 68.212 57.602 c 9.5 -14.422 7.912 -34.054 -4.766 -46.732 c 0 0 -0.001 0 -0.001 0 c -14.495 -14.493 -38.08 -14.494 -52.574 0 c -14.494 14.495 -14.494 38.079 0 52.575 c 7.248 7.247 16.767 10.87 26.287 10.87 c 7.134 0 14.267 -2.035 20.445 -6.104 l 19.591 19.591 C 78.659 89.267 80.579 90 82.498 90 s 3.84 -0.733 5.305 -2.197 C 90.732 84.873 90.732 80.124 87.803 77.194 z M 21.48 52.837 c -8.645 -8.646 -8.645 -22.713 0 -31.358 c 4.323 -4.322 10 -6.483 15.679 -6.483 c 5.678 0 11.356 2.161 15.678 6.483 c 8.644 8.644 8.645 22.707 0.005 31.352 c -0.002 0.002 -0.004 0.003 -0.005 0.005 c -0.002 0.002 -0.003 0.003 -0.004 0.005 C 44.184 61.481 30.123 61.48 21.48 52.837 z" />
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

