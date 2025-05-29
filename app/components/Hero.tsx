"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${159 + i * 4}C-${
      380 - i * 5 * position
    } -${159 + i * 4} -${312 - i * 5 * position} ${-14 - i * 4} ${
      2 - i * 5 * position
    } ${123 - i * 4}C${416 - i * 5 * position} ${250 - i * 4} ${
      484 - i * 5 * position
    } ${355 - i * 4} ${484 - i * 5 * position} ${355 - i * 4}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg 
        className="w-full h-full text-slate-950 dark:text-white opacity-30" 
        viewBox="0 0 696 216" 
        fill="none"
        style={{ transform: 'translateY(-30%)' }}
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function HeroWithFloatingPaths() {
  const router = useRouter()

  return (
    <div className="relative w-full">
      {/* Animated gradient background - lighter base colors */}
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
            linear-gradient(225deg, rgba(59, 130, 246, 0.18) 5%, transparent 25%),
            radial-gradient(ellipse at 70% 40%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 45%)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: "center",
          animation: "gradientAnimation 8s ease infinite",
        }}
      />

      {/* Floating paths overlay */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20">
        <div className="container mx-auto px-4 md:px-6 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 text-gray-900">
              Transform Industrial Distribution
              <br />
              with AI Agents
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
              Streamline order processing, automate manual workflows, and enhance customer engagement
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => router.push('/contact')}
                size="lg"
              >
                Book Demo
              </Button>
              <Button 
                onClick={() => router.push('/#benefits1')}
                size="lg"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative z-10 w-full flex items-center justify-center pb-20">
        <div className="relative w-[90%] aspect-[16/8] max-w-6xl overflow-hidden rounded-3xl border border-gray-300">
          <div
            className="absolute -top-[4%] -bottom-[10%] -left-[1px] -right-[1px] z-10 rounded-3xl"
            style={{ 
              border: "0.1px solid rgba(107, 114, 128, 0.3)",
              boxShadow: "inset 0 0 0 0.1px rgba(107, 114, 128, 0.3)"
            }}
            aria-hidden="true"
          />
          <div className="absolute -top-[4%] -bottom-[10%] left-0 right-0 overflow-hidden rounded-3xl">
            <video 
              className="absolute inset-0 w-full h-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source
                src="https://gkkolkvmncqorlemaiwo.supabase.co/storage/v1/object/public/images//donecutsupa.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
      {/* Animation keyframes */}
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
    </div>
  )
}

