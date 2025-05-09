import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, Clock, AlertTriangle, TrendingUp, TrendingDown, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  // Normally this data would come from an API call
  const stats = [
    {
      name: "Active Laborers",
      value: "24",
      change: "+2",
      trend: "up",
      icon: Users,
      color: "text-blue-500",
      link: "/dashboard/admin/labor",
    },
    {
      name: "Reports Submitted Today",
      value: "15",
      change: "+4",
      trend: "up",
      icon: BarChart3,
      color: "text-green-500",
      link: "/dashboard/admin/reports",
    },
    {
      name: "Average Machine Runtime",
      value: "6.5 hrs",
      change: "-0.3",
      trend: "down",
      icon: Clock,
      color: "text-yellow-500",
      link: "/dashboard/admin/reports",
    },
    {
      name: "Pending Issues",
      value: "3",
      change: "0",
      trend: "neutral",
      icon: AlertTriangle,
      color: "text-orange-500",
      link: "/dashboard/admin/issues",
    },
  ]

  // Recent activity data
  const recentActivity = [
    {
      user: "Amit Patel",
      action: "submitted a report",
      project: "A2B Murukku Project",
      time: "10 minutes ago",
    },
    {
      user: "Deepak Singh",
      action: "started a machine",
      project: "Jum Jum Sweets Production",
      time: "45 minutes ago",
    },
    {
      user: "Ravi Kumar",
      action: "reported a delay",
      project: "A2B Murukku Project",
      time: "1 hour ago",
    },
    {
      user: "Suresh Mehta",
      action: "completed maintenance",
      project: "Global Foods Mixer Installation",
      time: "2 hours ago",
    },
    {
      user: "Anil Sharma",
      action: "updated settings count",
      project: "Tasty Treats Production",
      time: "3 hours ago",
    },
  ]

  // Active projects data
  const activeProjects = [
    {
      name: "A2B Murukku Production",
      progress: 75,
      assigned: 5,
      deadline: "Aug 15, 2023",
      status: "On Track",
    },
    {
      name: "Jum Jum Sweets Setup",
      progress: 40,
      assigned: 3,
      deadline: "Aug 30, 2023",
      status: "On Track",
    },
    {
      name: "Global Foods Mixer Installation",
      progress: 90,
      assigned: 2,
      deadline: "Aug 10, 2023",
      status: "Delayed",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <div className="flex gap-3">
          <Button variant="outline">Export Reports</Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <div className={`p-2 rounded-full ${stat.color} bg-opacity-10`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.trend === "up" && <TrendingUp className="w-3 h-3 mr-1 text-green-500" />}
                {stat.trend === "down" && <TrendingDown className="w-3 h-3 mr-1 text-red-500" />}
                {stat.trend === "neutral" && <ChevronsUpDown className="w-3 h-3 mr-1 text-gray-500" />}
                <span
                  className={`${
                    stat.trend === "up" ? "text-green-500" : stat.trend === "down" ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="ml-1">from yesterday</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>The latest actions across all projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start pb-4 border-b last:pb-0 last:border-b-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      <span className="font-semibold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.project}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Currently running projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeProjects.map((project, i) => (
                <div key={i} className="pb-4 border-b last:pb-0 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">{project.name}</p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "On Track" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>

                  <div className="flex justify-between text-xs text-muted-foreground">
                    <p>{project.assigned} laborers assigned</p>
                    <p>Due: {project.deadline}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="w-full mt-4">
              View All Projects
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
