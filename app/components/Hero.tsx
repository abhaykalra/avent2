"use client"
import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white opacity-30" viewBox="0 0 696 316" fill="none">
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
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient background - lighter base colors */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 8s ease infinite",
        }}
      />
      
      {/* Colored light fold lines - more vibrant against lighter background */}
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

      {/* Floating paths overlay - preserved exactly as is */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content container - preserved exactly as is */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Transform
            <br />
            Industrial Distribution  
            <br />
            with AI Agents
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Streamline order processing, automate manual workflows, and enhance customer engagement
          </p>
        </motion.div>
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

