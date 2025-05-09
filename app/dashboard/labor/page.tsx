import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, FileText, CheckCircle, Timer } from "lucide-react"

export default function LaborDashboard() {
  // Sample data for labor dashboard
  const upcomingShifts = [
    {
      date: "Today",
      start: "14:00",
      end: "22:00",
      project: "A2B Murukku Production",
      machine: "Murukku Machine #3",
    },
    {
      date: "Tomorrow",
      start: "06:00",
      end: "14:00",
      project: "Jum Jum Sweets Production",
      machine: "Industrial Mixer #2",
    },
    {
      date: "Aug 12, 2023",
      start: "14:00",
      end: "22:00",
      project: "A2B Murukku Production",
      machine: "Murukku Machine #3",
    },
  ]

  const recentReports = [
    {
      date: "Aug 8, 2023",
      machine: "Murukku Machine #3",
      project: "A2B Murukku Production",
      settings: 12,
      hours: 7.5,
      status: "Approved",
    },
    {
      date: "Aug 7, 2023",
      machine: "Industrial Mixer #2",
      project: "Jum Jum Sweets Production",
      settings: 8,
      hours: 8,
      status: "Pending",
    },
    {
      date: "Aug 6, 2023",
      machine: "Murukku Machine #3",
      project: "A2B Murukku Production",
      settings: 14,
      hours: 7.2,
      status: "Approved",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Welcome, John</h1>
        <Button asChild>
          <Link href="/dashboard/labor/submit-report">Submit New Report</Link>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Hours This Week</CardTitle>
            <Clock className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5 hrs</div>
            <p className="text-xs text-muted-foreground">Target: 40 hrs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Settings Count</CardTitle>
            <Timer className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed Reports</CardTitle>
            <CheckCircle className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Shift */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Current/Next Shift</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <div className="flex items-center mb-2">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                <span className="font-medium">Today, 14:00 - 22:00</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Project: A2B Murukku Production</p>
              <p className="text-sm text-muted-foreground">Machine: Murukku Machine #3</p>
            </div>
            <div className="mt-4 sm:mt-0 flex gap-3">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button size="sm">Clock In</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Shifts */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Shifts</CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingShifts.map((shift, i) => (
              <div key={i} className="pb-4 mb-4 border-b last:pb-0 last:mb-0 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">
                      {shift.date}, {shift.start} - {shift.end}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Project: {shift.project}</p>
                <p className="text-sm text-muted-foreground">Machine: {shift.machine}</p>
              </div>
            ))}

            <Button variant="ghost" className="w-full mt-2" asChild>
              <Link href="/dashboard/labor/schedule">View Full Schedule</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            {recentReports.map((report, i) => (
              <div key={i} className="pb-4 mb-4 border-b last:pb-0 last:mb-0 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <FileText className="mr-2 h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">{report.date}</span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {report.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Machine: {report.machine}</p>
                <p className="text-sm text-muted-foreground mb-1">Project: {report.project}</p>
                <div className="flex text-sm text-muted-foreground">
                  <span className="mr-4">Settings: {report.settings}</span>
                  <span>Hours: {report.hours}</span>
                </div>
              </div>
            ))}

            <Button variant="ghost" className="w-full mt-2" asChild>
              <Link href="/dashboard/labor/my-reports">View All Reports</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
