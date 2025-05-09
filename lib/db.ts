// Mock database implementation for preview
import type { WorkReport, User, Project, Machine, Client, Testimonial } from "@/types/database"

// Mock data store
class MockDatabase {
  private users: User[] = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@example.com",
      password: "password123", // In a real app, this would be hashed
      role: "admin",
      phone: "+91 9876543210",
      address: "123 Admin Street, Chennai",
      joining_date: new Date("2020-01-15"),
      skills: "Management, Engineering",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      role: "labor",
      phone: "+91 9876543211",
      address: "456 Worker Avenue, Chennai",
      joining_date: new Date("2021-03-10"),
      skills: "Machine Operation, Maintenance",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya@example.com",
      password: "password123",
      role: "labor",
      phone: "+91 9876543212",
      address: "789 Tech Road, Chennai",
      joining_date: new Date("2019-06-22"),
      skills: "Senior Machine Operation, Training",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      name: "Amit Patel",
      email: "amit@example.com",
      password: "password123",
      role: "labor",
      phone: "+91 9876543213",
      address: "101 Engineer Lane, Chennai",
      joining_date: new Date("2021-07-05"),
      skills: "Maintenance, Troubleshooting",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 5,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      password: "password123",
      role: "labor",
      phone: "+91 9876543214",
      address: "202 Mechanic Street, Chennai",
      joining_date: new Date("2020-09-10"),
      skills: "Machine Operation",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 6,
      name: "Deepak Singh",
      email: "deepak@example.com",
      password: "password123",
      role: "labor",
      phone: "+91 9876543215",
      address: "303 Technician Road, Chennai",
      joining_date: new Date("2018-02-18"),
      skills: "Senior Technician, Repairs",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]

  private projects: Project[] = [
    {
      id: 1,
      name: "A2B Murukku Production",
      description: "Setting up murukku production line for A2B restaurant chain",
      customer_name: "A2B Restaurant Group",
      start_date: new Date("2023-07-01"),
      end_date: new Date("2023-08-15"),
      status: "in_progress",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Jum Jum Sweets Production",
      description: "Installation of mixing and production equipment for Jum Jum Sweets",
      customer_name: "Jum Jum Sweets Ltd.",
      start_date: new Date("2023-07-15"),
      end_date: new Date("2023-08-30"),
      status: "in_progress",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "Global Foods Mixer Installation",
      description: "Installation and configuration of industrial mixers for Global Foods",
      customer_name: "Global Foods Inc.",
      start_date: new Date("2023-07-20"),
      end_date: new Date("2023-08-10"),
      status: "in_progress",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      name: "Tasty Treats Production",
      description: "Setting up snack production line for Tasty Treats",
      customer_name: "Tasty Treats Pvt. Ltd.",
      start_date: new Date("2023-08-01"),
      end_date: new Date("2023-09-15"),
      status: "pending",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]

  private machines: Machine[] = [
    {
      id: 1,
      name: "Murukku Machine #1",
      description: "CNG-powered murukku making machine with automated extrusion",
      model_number: "MM-CNG-2023-01",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Murukku Machine #2",
      description: "CNG-powered murukku making machine with dual production capacity",
      model_number: "MM-CNG-2023-02",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "Murukku Machine #3",
      description: "CNG-powered murukku making machine with advanced temperature control",
      model_number: "MM-CNG-2023-03",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      name: "Industrial Mixer #1",
      description: "CNG-powered industrial mixer for large batch processing",
      model_number: "IM-CNG-2023-01",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 5,
      name: "Industrial Mixer #2",
      description: "CNG-powered industrial mixer with precision control",
      model_number: "IM-CNG-2023-02",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 6,
      name: "Conveyor System #1",
      description: "Energy-efficient conveyor system for food production lines",
      model_number: "CS-CNG-2023-01",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]

  private workReports: WorkReport[] = [
    {
      id: 1,
      labor_id: 2,
      machine_id: 3,
      project_id: 1,
      job_name: "Murukku Production Run",
      job_number: "A2B-2023-001",
      settings_count: 12,
      report_date: new Date("2023-08-10"),
      start_time: "09:00",
      end_time: "17:00",
      delay_time: 30,
      delay_reason: "Material loading delay",
      total_running_hours: 7.5,
      created_at: new Date(),
      updated_at: new Date(),
      images: ["/industrial-machinery-operation.png", "/murukku-production-line.png"],
      status: "Approved",
      labor_name: "John Doe",
    },
    {
      id: 2,
      labor_id: 3,
      machine_id: 5,
      project_id: 2,
      job_name: "Sweets Mixing Process",
      job_number: "JJ-2023-001",
      settings_count: 8,
      report_date: new Date("2023-08-10"),
      start_time: "08:00",
      end_time: "16:00",
      delay_time: 0,
      delay_reason: "",
      total_running_hours: 8,
      created_at: new Date(),
      updated_at: new Date(),
      images: ["/industrial-mixer.png"],
      status: "Pending",
      labor_name: "Priya Sharma",
    },
    {
      id: 3,
      labor_id: 4,
      machine_id: 6,
      project_id: 3,
      job_name: "Conveyor Installation",
      job_number: "GF-2023-001",
      settings_count: 0,
      report_date: new Date("2023-08-09"),
      start_time: "10:00",
      end_time: "16:00",
      delay_time: 0,
      delay_reason: "",
      total_running_hours: 6,
      created_at: new Date(),
      updated_at: new Date(),
      images: [],
      status: "Approved",
      labor_name: "Amit Patel",
    },
    {
      id: 4,
      labor_id: 6,
      machine_id: 2,
      project_id: 1,
      job_name: "Murukku Production Setup",
      job_number: "A2B-2023-002",
      settings_count: 14,
      report_date: new Date("2023-08-09"),
      start_time: "09:00",
      end_time: "17:00",
      delay_time: 45,
      delay_reason: "Machine calibration issues",
      total_running_hours: 7.2,
      created_at: new Date(),
      updated_at: new Date(),
      images: ["/placeholder.svg?key=nm0b4"],
      status: "Rejected",
      labor_name: "Deepak Singh",
    },
    {
      id: 5,
      labor_id: 5,
      machine_id: 4,
      project_id: 4,
      job_name: "Mixer Testing",
      job_number: "TT-2023-001",
      settings_count: 10,
      report_date: new Date("2023-08-08"),
      start_time: "08:00",
      end_time: "16:00",
      delay_time: 0,
      delay_reason: "",
      total_running_hours: 8,
      created_at: new Date(),
      updated_at: new Date(),
      images: ["/placeholder.svg?key=ofpzh"],
      status: "Approved",
      labor_name: "Rahul Kumar",
    },
  ]

  private clients: Client[] = [
    {
      id: 1,
      name: "A2B",
      logo_url: "/a2b-food-logo.png",
      industry: "Restaurant Chain",
      created_at: new Date(),
    },
    {
      id: 2,
      name: "Jum Jum Sweets",
      logo_url: "/jumjum-sweets-logo.png",
      industry: "Confectionery Production",
      created_at: new Date(),
    },
    {
      id: 3,
      name: "Global Foods",
      logo_url: "/placeholder.svg?height=100&width=200&query=Global Foods company logo",
      industry: "Food Processing",
      created_at: new Date(),
    },
    {
      id: 4,
      name: "Tasty Treats",
      logo_url: "/placeholder.svg?height=100&width=200&query=Tasty Treats company logo",
      industry: "Snack Manufacturing",
      created_at: new Date(),
    },
    {
      id: 5,
      name: "Premium Bakeries",
      logo_url: "/placeholder.svg?height=100&width=200&query=Premium Bakeries logo",
      industry: "Bakery Products",
      created_at: new Date(),
    },
    {
      id: 6,
      name: "Crisp & Fresh",
      logo_url: "/placeholder.svg?height=100&width=200&query=Crisp and Fresh food company logo",
      industry: "Packaged Foods",
      created_at: new Date(),
    },
  ]

  private testimonials: Testimonial[] = [
    {
      id: 1,
      client_name: "Rajesh Kumar",
      company: "A2B",
      content:
        "The Murukku machines from IK Engineering have revolutionized our production process. We've seen a 40% increase in output with consistent quality.",
      image_url: "/placeholder.svg?height=100&width=100&query=professional Indian man portrait",
      created_at: new Date(),
    },
    {
      id: 2,
      client_name: "Priya Sharma",
      company: "Jum Jum Sweets",
      content:
        "Their CNG-powered machines have not only reduced our operational costs but also improved the overall quality of our products. The technical support team is always responsive.",
      image_url: "/placeholder.svg?height=100&width=100&query=professional Indian woman portrait",
      created_at: new Date(),
    },
  ]

  // User methods
  async getUsers(): Promise<User[]> {
    return [...this.users]
  }

  async getUserById(id: number): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null
  }

  async createUser(userData: Omit<User, "id" | "created_at" | "updated_at">): Promise<User> {
    const newUser: User = {
      id: this.users.length + 1,
      ...userData,
      created_at: new Date(),
      updated_at: new Date(),
    }
    this.users.push(newUser)
    return newUser
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return [...this.projects]
  }

  async getProjectById(id: number): Promise<Project | null> {
    return this.projects.find((project) => project.id === id) || null
  }

  // Machine methods
  async getMachines(): Promise<Machine[]> {
    return [...this.machines]
  }

  async getMachineById(id: number): Promise<Machine | null> {
    return this.machines.find((machine) => machine.id === id) || null
  }

  // Work report methods
  async getWorkReports(): Promise<WorkReport[]> {
    return [...this.workReports]
  }

  async getWorkReportById(id: number): Promise<WorkReport | null> {
    return this.workReports.find((report) => report.id === id) || null
  }

  async getWorkReportsByLaborId(laborId: number): Promise<WorkReport[]> {
    return this.workReports.filter((report) => report.labor_id === laborId)
  }

  async createWorkReport(reportData: Omit<WorkReport, "id" | "created_at" | "updated_at">): Promise<WorkReport> {
    const newReport: WorkReport = {
      id: this.workReports.length + 1,
      ...reportData,
      created_at: new Date(),
      updated_at: new Date(),
    }
    this.workReports.push(newReport)
    return newReport
  }

  // Client methods
  async getClients(): Promise<Client[]> {
    return [...this.clients]
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return [...this.testimonials]
  }
}

// Create a singleton instance
const db = new MockDatabase()

export default db
