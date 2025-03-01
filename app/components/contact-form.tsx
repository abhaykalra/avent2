"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null)
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Replace with your email sending function
      // Example using a serverless function or API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setFormStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We would love to hear from you
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Have questions or just want to say hi? Send us a message below
          </p>
          <p className="text-lg text-gray-600">
            or you can email us on{" "}
            <a 
              href="mailto:your-email@example.com" 
              className="text-blue-600 hover:underline"
            >
              info@aventindustrial.com
            </a>
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100 p-1">
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-xl p-8 md:p-12">
              {formStatus === 'success' ? (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setFormStatus(null)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-2 border rounded"
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

