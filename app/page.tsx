import Header from "./components/Header"
import Hero from "./components/Hero"
import VideoSection from "./components/VideoSection"
import Benefits from "./components/Benefits"
import Features from "./components/Features"
import UseCases from "./components/UseCases"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Benefits1 from "./components/Benefits1"
import Benefits2 from "./components/Benefits2"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <VideoSection />
      <Benefits />
      <Benefits1 />
      <Benefits2 />
      <CTA />
      <Footer />
    </main>
  )
}

