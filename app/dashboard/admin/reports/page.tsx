"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarIcon, Download, Filter, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ReportsPage() {
  const [date, setDate] = useState<Date>()
  const [selectedReport, setSelectedReport] = useState<any>(null)

  // Sample data for reports
  const reports = [
    {
      id: "1",
      laborName: "John Doe",
      date: "Aug 10, 2023",
      machine: "Murukku Machine #3",
      project: "A2B Murukku Production",
      settings: 12,
      hours: 7.5,
      status: "Approved",
      images: [
        "/placeholder.svg?height=400&width=600&query=industrial machinery in operation",
        "/placeholder.svg?height=400&width=600&query=murukku machine production line",
      ],
    },
    {
      id: "2",
      laborName: "Priya Sharma",
      date: "Aug 10, 2023",
      machine: "Industrial Mixer #2",
      project: "Jum Jum Sweets Production",
      settings: 8,
      hours: 8,
      status: "Pending",
      images: ["/placeholder.svg?height=400&width=600&query=industrial mixer in factory"],
    },
    {
      id: "3",
      laborName: "Amit Patel",
      date: "Aug 9, 2023",
      machine: "Conveyor System #1",
      project: "Global Foods Mixer Installation",
      settings: 0,
      hours: 6,
      status: "Approved",
      images: [],
    },
    {
      id: "4",
      laborName: "Deepak Singh",
      date: "Aug 9, 2023",
      machine: "Murukku Machine #2",
      project: "A2B Murukku Production",
      settings: 14,
      hours: 7.2,
      status: "Rejected",
      images: ["/placeholder.svg?height=400&width=600&query=murukku production machine"],
    },
    {
      id: "5",
      laborName: "Sunita Reddy",
      date: "Aug 8, 2023",
      machine: "Industrial Mixer #1",
      project: "Tasty Treats Production",
      settings: 10,
      hours: 8,
      status: "Approved",
      images: ["/placeholder.svg?height=400&width=600&query=industrial food mixer in operation"],
    },
  ]

  // View report details
  const viewReport = (report: any) => {
    setSelectedReport(report)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Work Reports</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-end gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Labor Name</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Laborers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Laborers</SelectItem>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="priya">Priya Sharma</SelectItem>
                  <SelectItem value="amit">Amit Patel</SelectItem>
                  <SelectItem value="deepak">Deepak Singh</SelectItem>
                  <SelectItem value="sunita">Sunita Reddy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Project</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Projects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  <SelectItem value="a2b">A2B Murukku Production</SelectItem>
                  <SelectItem value="jum">Jum Jum Sweets Production</SelectItem>
                  <SelectItem value="global">Global Foods Mixer Installation</SelectItem>
                  <SelectItem value="tasty">Tasty Treats Production</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Date Range</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="ml-auto">
              <Button variant="outline" className="mr-2">
                Reset
              </Button>
              <Button>
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reports Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Work Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Labor Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Machine</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Settings</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-16">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.laborName}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.machine}</TableCell>
                  <TableCell>{report.project}</TableCell>
                  <TableCell>{report.settings}</TableCell>
                  <TableCell>{report.hours}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        report.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : report.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {report.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => viewReport(report)}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Report Detail Dialog */}
      <Dialog open={!!selectedReport} onOpenChange={() => setSelectedReport(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Work Report Details</DialogTitle>
            <DialogDescription>
              Submitted by {selectedReport?.laborName} on {selectedReport?.date}
            </DialogDescription>
          </DialogHeader>

          {selectedReport && (
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-1">Labor Name</p>
                  <p className="text-sm">{selectedReport.laborName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Date</p>
                  <p className="text-sm">{selectedReport.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Machine</p>
                  <p className="text-sm">{selectedReport.machine}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Project</p>
                  <p className="text-sm">{selectedReport.project}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Settings</p>
                  <p className="text-sm">{selectedReport.settings}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Working Hours</p>
                  <p className="text-sm">{selectedReport.hours} hrs</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Status</p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedReport.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : selectedReport.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {selectedReport.status}
                  </span>
                </div>
              </div>

              {selectedReport.images.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Images</p>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedReport.images.map((image: string, index: number) => (
                      <div key={index} className="border rounded-md overflow-hidden">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Report Image ${index + 1}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-2 pt-4">
                {selectedReport.status === "Pending" && (
                  <>
                    <Button variant="outline" className="text-red-600">
                      Reject
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700">Approve</Button>
                  </>
                )}
                {selectedReport.status !== "Pending" && <Button>Download Report</Button>}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
