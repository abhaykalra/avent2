import { Button } from "@/components/ui/button"
import InteractiveDemo from "./InteractiveDemo"

export default function Demo() {
  return (
    <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          See Sumbios in Action
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Experience a guided tour of Sumbios Navigator's main interface and discover how it can transform your data
          management.
        </p>
        <div className="max-w-4xl mx-auto">
          <InteractiveDemo />
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg">Try It Yourself</Button>
        </div>
      </div>
    </section>
  )
}

