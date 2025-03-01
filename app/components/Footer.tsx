import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-sm text-gray-600">&copy; 2025 Avent. All rights reserved.</span>
          </div>
          <nav className="flex space-x-4">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

