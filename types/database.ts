export interface User {
  id: number
  name: string
  email: string
  password: string
  role: "admin" | "labor"
  phone?: string
  address?: string
  joining_date?: Date
  skills?: string
  created_at: Date
  updated_at: Date
}

export interface Project {
  id: number
  name: string
  description?: string
  customer_name: string
  start_date?: Date
  end_date?: Date
  status: "pending" | "in_progress" | "completed"
  created_at: Date
  updated_at: Date
}

export interface Machine {
  id: number
  name: string
  description?: string
  model_number?: string
  created_at: Date
  updated_at: Date
}

export interface WorkReport {
  id: number
  labor_id: number
  machine_id: number
  project_id: number
  job_name: string
  job_number?: string
  settings_count: number
  report_date: Date
  start_time: string
  end_time: string
  delay_time: number
  delay_reason?: string
  total_running_hours: number
  created_at: Date
  updated_at: Date
  // Additional fields for UI
  images?: string[]
  status?: string
  labor_name?: string
}

export interface Client {
  id: number
  name: string
  logo_url?: string
  industry?: string
  created_at: Date
}

export interface Testimonial {
  id: number
  client_name: string
  company: string
  content: string
  image_url?: string
  created_at: Date
}
