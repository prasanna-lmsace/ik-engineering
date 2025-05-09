import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, MoreHorizontal, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LaborManagementPage() {
  // Sample data for labor management
  const laborers = [
    {
      id: "1",
      name: "John Doe",
      role: "Machine Operator",
      phone: "+91 9876543210",
      email: "john.doe@example.com",
      joiningDate: "Jan 15, 2020",
      status: "Active",
    },
    {
      id: "2",
      name: "Priya Sharma",
      role: "Senior Operator",
      phone: "+91 9876543211",
      email: "priya.sharma@example.com",
      joiningDate: "Mar 22, 2019",
      status: "Active",
    },
    {
      id: "3",
      name: "Amit Patel",
      role: "Maintenance Technician",
      phone: "+91 9876543212",
      email: "amit.patel@example.com",
      joiningDate: "Jul 05, 2021",
      status: "Active",
    },
    {
      id: "4",
      name: "Rahul Kumar",
      role: "Machine Operator",
      phone: "+91 9876543213",
      email: "rahul.kumar@example.com",
      joiningDate: "Sep 10, 2020",
      status: "Inactive",
    },
    {
      id: "5",
      name: "Deepak Singh",
      role: "Senior Technician",
      phone: "+91 9876543214",
      email: "deepak.singh@example.com",
      joiningDate: "Feb 18, 2018",
      status: "Active",
    },
    {
      id: "6",
      name: "Sunita Reddy",
      role: "Machine Operator",
      phone: "+91 9876543215",
      email: "sunita.reddy@example.com",
      joiningDate: "Nov 30, 2021",
      status: "Active",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Labor Management</h1>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search laborers..." className="w-full sm:w-[300px] pl-9" />
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Labor
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Labor Profiles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Joining Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-16">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {laborers.map((laborer) => (
                <TableRow key={laborer.id}>
                  <TableCell className="font-medium">{laborer.name}</TableCell>
                  <TableCell>{laborer.role}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{laborer.email}</p>
                      <p className="text-muted-foreground">{laborer.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>{laborer.joiningDate}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        laborer.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {laborer.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/admin/labor/${laborer.id}`}>View Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View Reports</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          {laborer.status === "Active" ? "Deactivate" : "Activate"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
