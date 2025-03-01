import { Brain, Network, Workflow, Users } from "lucide-react"

const features = [
  {
    title: "AI-Assisted Ontology",
    description: "Define domain context in natural language and let our AI propose entity types and relationships.",
    icon: Brain,
  },
  {
    title: "Graph Visualization",
    description: "Explore your data with interactive, D3.js-like canvases for intuitive data exploration.",
    icon: Network,
  },
  {
    title: "Workflows & Automation",
    description: "Seamlessly switch between ad-hoc searches and automated tasks for efficient data management.",
    icon: Workflow,
  },
  {
    title: "Collaboration & Versioning",
    description: "Enjoy real-time multi-user editing and version rollback for seamless teamwork.",
    icon: Users,
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

