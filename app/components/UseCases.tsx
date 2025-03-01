import { Building2, Truck, BookOpen, Users } from "lucide-react"
import Link from "next/link"

const useCases = [
  {
    title: "Organizational Ecosystems",
    description: "Map and analyze complex organizational structures and relationships.",
    icon: Building2,
  },
  {
    title: "Supply Chain Analysis",
    description: "Visualize and optimize your entire supply chain network.",
    icon: Truck,
  },
  {
    title: "Research Knowledge Base",
    description: "Build and explore interconnected research data and findings.",
    icon: BookOpen,
  },
  {
    title: "Partner & Stakeholder Mapping",
    description: "Understand and manage your business ecosystem more effectively.",
    icon: Users,
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Use Case Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <useCase.icon className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <Link href="#" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

