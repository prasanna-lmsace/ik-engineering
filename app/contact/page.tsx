import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions about our products or services? Get in touch with our team for expert assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ContactForm />

            <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Address</p>
                      <address className="not-italic text-gray-600">
                        123 Industrial Avenue
                        <br />
                        Chennai, Tamil Nadu 600001
                        <br />
                        India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+919876543210" className="text-gray-600 hover:text-primary">
                        +91 9876 543 210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@ikengineering.com" className="text-gray-600 hover:text-primary">
                        info@ikengineering.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 6pm
                        <br />
                        Saturday: 10am - 2pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="rounded-lg overflow-hidden border border-gray-200 h-64 relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=map of Chennai Industrial Area"
                    alt="Office Location Map"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button asChild>
                      <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need technical support?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our technical team is available to assist with machine installation, maintenance, and troubleshooting for
            all our products.
          </p>
          <Button asChild size="lg">
            <Link href="/support">Technical Support</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
