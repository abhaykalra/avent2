import ContactForm from "../components/contact-form"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <ContactForm />
      <Footer />
    </main>
  )
}

