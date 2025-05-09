import Link from "next/link"
import Image from "next/image"
import HeroSlider from "@/components/hero-slider"
import ClientsSection from "@/components/clients-section"
import ProductShowcase from "@/components/product-showcase"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Introduction Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Engineering Excellence in CNG-Powered Machinery
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At IK Engineering, we specialize in designing and manufacturing high-quality CNG-powered machines for
                food production and industrial applications. Our commitment to innovation and quality has made us a
                trusted partner for businesses like A2B and Jum Jum Sweets.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With decades of experience in the industry, we understand the unique challenges faced by food
                manufacturers and provide tailored solutions that enhance productivity and reduce operational costs.
              </p>
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?key=8rtt3"
                alt="IK Engineering Factory"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <ProductShowcase />

      {/* Clients Section */}
      <ClientsSection />

      {/* About Us Quick Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Why Choose IK Engineering
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Our commitment to quality, innovation, and customer satisfaction sets us apart in the industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Engineering</h3>
              <p className="text-gray-600">
                Our machines are built to the highest standards, ensuring longevity and consistent performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">CNG Technology</h3>
              <p className="text-gray-600">
                Our CNG-powered machines offer cost-effective and environmentally friendly operation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 12h10" />
                  <path d="M14 12h8" />
                  <path d="M5 19h14" />
                  <path d="M5 5h14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                We design and build machines tailored to your specific production requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" />
                  <circle cx="9" cy="9" r="3" />
                  <path d="M16 18v-1a3 3 0 0 0-.5-1.5" />
                  <path d="M13 9a3 3 0 0 0 1.5-5.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our team of specialists provides comprehensive support and maintenance services.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to enhance your production capabilities?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your specific requirements and discover how our CNG-powered machines can
            transform your manufacturing process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
