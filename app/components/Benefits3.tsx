import type React from "react"

type FeatureItemProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <div className="mr-3 text-blue-700">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function Benefits3() {
  return (
    <section className="relative w-full min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Continuous Learning & Adaptation</h2>
          <p className="text-xl text-gray-600">
            Our AI solutions evolve with your business, continuously learning from interactions to deliver increasingly
            personalized experiences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image placeholder */}
          <div className="w-full lg:w-1/2 relative aspect-video rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full rounded-3xl z-10 border-gray-500"
              style={{ borderWidth: "0.1px" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
              </svg>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="w-full lg:w-1/2">
            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              }
              title="Pattern Recognition"
              description="Detect emerging customer trends and preferences through advanced machine learning algorithms."
            />
            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              }
              title="Automated Improvement"
              description="Systems that self-optimize based on performance metrics and feedback loops without manual intervention."
            />
            <FeatureItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Contextual Communication"
              description="Deliver messages that adapt to customer history, preferences, and current situation for more relevant interactions."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

