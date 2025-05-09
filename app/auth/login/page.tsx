import Image from "next/image"
import Link from "next/link"
import LoginForm from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-16">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/ik-engineering-logo.png"
              alt="IK Engineering Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back</h1>
          <p className="text-gray-600 mb-8">Log in to access your dashboard and manage your work reports.</p>

          <LoginForm />

          <div className="mt-6 text-center text-gray-500">Don't have an account? Contact your administrator.</div>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 relative">
        <Image src="/industrial-technicians.png" alt="Manufacturing facility" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/60 flex flex-col justify-center p-16">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-white mb-4">IK Engineering Work Management Portal</h2>
            <p className="text-xl text-white/90">
              Track production, submit work reports, and access machine data through our comprehensive work management
              system.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
