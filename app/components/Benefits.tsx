import { Zap, Star, Flower2 } from "lucide-react"
import { ScrollAnimation } from "./ScrollAnimation"

const benefits = [
  {
    icon: Zap,
    title: "Unlock Revenue-Generating Time",
    description:
      "Reduce CSR administrative work by 50%. By automating routine tasks, your team can focus on what truly matters—building strong customer relationships and driving revenue growth.",
  },
  {
    icon: Star,
    title: "Eliminate Order Processing Backlogs",
    description:
      "Our AI extracts and validates data from any format eliminating the communication bottlenecks that cause missed orders and revenue leakage. Even when your team is off the clock, our AI keeps your business running 24/7.",
  },
  {
    icon: Flower2,
    title: "Retain Knowledge & Train Smarter",
    description:
      "With AI you can ensure that new hires ramp up faster and existing reps make smarter, data-driven decisions. Integrate historical data to optimize pricing in real-time, preserving and enhancing your margins.",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <ScrollAnimation>
      <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-center mb-16">
          Reduce costs & increase revenue with AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start p-8 bg-gray-50 rounded-3xl">
              <div className="relative w-8 h-8 mb-6">
                <benefit.icon className="w-8 h-8 absolute top-0 left-0" style={{
                  color: 'transparent',
                  fill: 'transparent',
                  stroke: 'url(#icon-gradient)',
                  strokeWidth: 2
                }} />
              </div>
                <h3 className="text-2xl font-medium mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
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
      </ScrollAnimation>
    </section>
  )
}

