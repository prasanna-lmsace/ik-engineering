import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/ik-engineering-logo.png"
                alt="IK Engineering Logo"
                width={120}
                height={40}
                className="h-10 w-auto brightness-200"
              />
            </Link>
            <p className="text-sm">
              Leading manufacturer of CNG-powered machines for food production and industrial applications.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/murukku-machine" className="text-sm hover:text-white transition-colors">
                  Murukku Machines
                </Link>
              </li>
              <li>
                <Link href="/products/mixers" className="text-sm hover:text-white transition-colors">
                  Industrial Mixers
                </Link>
              </li>
              <li>
                <Link href="/products/conveyor-systems" className="text-sm hover:text-white transition-colors">
                  Conveyor Systems
                </Link>
              </li>
              <li>
                <Link href="/products/custom-solutions" className="text-sm hover:text-white transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-sm hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-3">
              <p>123 Industrial Avenue</p>
              <p>Chennai, Tamil Nadu 600001</p>
              <p>India</p>
              <p className="pt-3">
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 9876 543 210
                </a>
              </p>
              <p>
                <a href="mailto:info@ikengineering.com" className="hover:text-white transition-colors">
                  info@ikengineering.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} IK Engineering. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
