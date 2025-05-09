import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// In a real application, this data would come from a CMS or database
const products = [
  {
    id: 1,
    name: "Murukku Production Machine",
    description:
      "Automated CNG-powered machine for high-volume Murukku production with precision control and consistent quality.",
    image: "/murukku-making-machine.png",
    link: "/products/murukku-machine",
  },
  {
    id: 2,
    name: "Industrial Mixer",
    description:
      "Heavy-duty CNG-powered industrial mixer for food processing applications requiring thorough and consistent mixing.",
    image: "/placeholder.svg?height=600&width=800&query=industrial food mixer machine",
    link: "/products/industrial-mixer",
  },
  {
    id: 3,
    name: "Conveyor System",
    description:
      "Energy-efficient conveyor systems designed for food production lines, integrating seamlessly with other equipment.",
    image: "/food-production-conveyor.png",
    link: "/products/conveyor-system",
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">Our Featured Products</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our range of innovative CNG-powered machines designed for efficiency, reliability, and superior
            performance in food production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button asChild variant="outline">
                  <Link href={product.link}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
