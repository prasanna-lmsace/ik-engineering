import Image from "next/image"

// In a real application, this data would come from a CMS or database
const clients = [
  {
    id: 1,
    name: "A2B",
    logo: "/a2b-food-logo.png",
    industry: "Restaurant Chain",
  },
  {
    id: 2,
    name: "Jum Jum Sweets",
    logo: "/jumjum-sweets-logo.png",
    industry: "Confectionery Production",
  },
  {
    id: 3,
    name: "Global Foods",
    logo: "/placeholder.svg?height=100&width=200&query=Global Foods company logo",
    industry: "Food Processing",
  },
  {
    id: 4,
    name: "Tasty Treats",
    logo: "/placeholder.svg?height=100&width=200&query=Tasty Treats company logo",
    industry: "Snack Manufacturing",
  },
  {
    id: 5,
    name: "Premium Bakeries",
    logo: "/placeholder.svg?height=100&width=200&query=Premium Bakeries logo",
    industry: "Bakery Products",
  },
  {
    id: 6,
    name: "Crisp & Fresh",
    logo: "/placeholder.svg?height=100&width=200&query=Crisp and Fresh food company logo",
    industry: "Packaged Foods",
  },
]

// Sample testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "The Murukku machines from IK Engineering have revolutionized our production process. We've seen a 40% increase in output with consistent quality.",
    author: "Rajesh Kumar",
    position: "Production Manager",
    company: "A2B",
  },
  {
    id: 2,
    quote:
      "Their CNG-powered machines have not only reduced our operational costs but also improved the overall quality of our products. The technical support team is always responsive.",
    author: "Priya Sharma",
    position: "Director of Operations",
    company: "Jum Jum Sweets",
  },
]

export default function ClientsSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our machines power the production lines of some of the most respected names in the food industry.
          </p>
        </div>

        {/* Client logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
          {clients.map((client) => (
            <div key={client.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={200}
                height={100}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md">
              <svg className="h-8 w-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg text-gray-700 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
