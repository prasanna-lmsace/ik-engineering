"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, FileText, Users, Settings, Home, Calendar, PlusCircle, Briefcase, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const adminNavigation = [
  { name: "Dashboard", href: "/dashboard/admin", icon: Home },
  { name: "Labor Management", href: "/dashboard/admin/labor", icon: Users },
  { name: "Reports", href: "/dashboard/admin/reports", icon: BarChart2 },
  { name: "Projects", href: "/dashboard/admin/projects", icon: Briefcase },
  { name: "Settings", href: "/dashboard/admin/settings", icon: Settings },
]

const laborNavigation = [
  { name: "Dashboard", href: "/dashboard/labor", icon: Home },
  { name: "Submit Report", href: "/dashboard/labor/submit-report", icon: PlusCircle },
  { name: "My Reports", href: "/dashboard/labor/my-reports", icon: FileText },
  { name: "Time Logs", href: "/dashboard/labor/time-logs", icon: Clock },
  { name: "Schedule", href: "/dashboard/labor/schedule", icon: Calendar },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const isAdmin = pathname?.includes("/dashboard/admin")
  const navigation = isAdmin ? adminNavigation : laborNavigation

  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:pt-16 lg:z-20">
      <div className="h-full flex flex-col bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="px-3 py-2 rounded-md bg-primary text-white font-medium">
            {isAdmin ? "Admin Portal" : "Labor Portal"}
          </div>
        </div>

        <div className="mt-4 flex-1 flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  item.href === pathname
                    ? "bg-gray-100 text-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary",
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md",
                )}
              >
                <item.icon
                  className={cn(
                    item.href === pathname ? "text-primary" : "text-gray-400 group-hover:text-primary",
                    "mr-3 flex-shrink-0 h-5 w-5",
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">{isAdmin ? "Admin User" : "Labor User"}</p>
              <Link href="/auth/login" className="text-xs font-medium text-gray-500 hover:text-primary">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
