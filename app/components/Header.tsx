"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  const scrollToSection = (id?: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="w-full px-4 lg:px-6 h-20 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <Link href="/" className="flex items-center gap-2" onClick={scrollToSection()}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aventlogo-W3XCacLyeppP5k5ZjiudfPUrK8pxWh.png"
          alt="Avent Logo"
          width={36}
          height={36}
          className="h-8 w-8"
        />
        <span className="text-2xl font-semibold text-gray-900 tracking-tight font-inter">Avent</span>
      </Link>
      <nav className="hidden md:flex space-x-4 lg:space-x-6">
        <a
          href="#benefits1"
          onClick={scrollToSection("benefits1")}
          className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          Features
        </a>
        <a
          href="#demo"
          onClick={scrollToSection("demo")}
          className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          About
        </a>
        <a
          href="#use-cases"
          onClick={scrollToSection("use-cases")}
          className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          Use Cases
        </a>
      </nav>
      <Button>Get in Touch</Button>
    </header>
  )
}

