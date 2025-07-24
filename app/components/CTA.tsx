"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ScrollAnimation } from "./ScrollAnimation"

export default function CTA() {
  const router = useRouter()
  
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <ScrollAnimation>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="rounded-xl p-8 md:p-12 overflow-hidden relative">
          {/* Enhanced gradient background - brighter colors */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-purple-200"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradientAnimation 8s ease infinite",
            }}
          />
          

          
          {/* Natural fabric folds with colored light lines */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(79, 70, 229, 0.15) 10%, transparent 30%),
                linear-gradient(45deg, rgba(147, 51, 234, 0.12) 15%, transparent 40%),
                linear-gradient(225deg, rgba(59, 130, 246, 0.15) 5%, transparent 25%),
                radial-gradient(ellipse at 70% 40%, rgba(79, 70, 229, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 70%, rgba(147, 51, 234, 0.12) 0%, transparent 45%)
              `,
              backgroundSize: "200% 200%",
              backgroundPosition: "center",
              animation: "gradientAnimation 8s ease infinite",
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
              <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl mb-6 text-center text-black">
              Ready to Supercharge Your Sales Team with AI?
            </h2>
            <p className="mx-auto max-w-[700px] text-lg mb-8 text-center text-black">
              Reach out today to become a strategic partner.
            </p>
            <div className="flex justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={() => router.push('/contact')}
                  className="bg-white hover:bg-gray-50"
                >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>

      {/* Global styles for the animation */}
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}

