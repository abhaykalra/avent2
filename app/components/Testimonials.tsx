const testimonials = [
  {
    quote: "Sumbios Navigator has revolutionized how we manage and visualize our complex data structures.",
    author: "Jane Doe",
    position: "CTO, Tech Innovators Inc.",
  },
  {
    quote: "The AI-assisted ontology feature saved us weeks of manual work in setting up our knowledge base.",
    author: "John Smith",
    position: "Lead Researcher, Global Institute",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

