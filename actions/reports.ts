/* "use server"

import db from "@/lib/db"

export async function submitWorkReport(formData: FormData) {
  // In a real app, you would validate the input data
  const machineId = Number.parseInt(formData.get("machineId") as string, 10)
  const projectId = Number.parseInt(formData.get("projectId") as string, 10)
  const jobName = formData.get("jobName") as string
  const jobNumber = formData.get("jobNumber") as string
  const settingsCount = Number.parseInt(formData.get("settingsCount") as string, 10)
  const reportDate = new Date(formData.get("reportDate") as string)
  const startTime = formData.get("startTime") as string
  const endTime = formData.get("endTime") as string
  const delayTime = Number.parseInt(formData.get("delayTime") as string, 10)
  const delayReason = formData.get("delayReason") as string
  const totalRunningHours = Number.parseFloat(formData.get("totalRunningHours") as string)

  // In a real app, you would get the labor ID from the authenticated user
  const laborId = 2 // Hardcoded for demo

  try {
    // In a real app, you would also handle image uploads
    const newReport = await db.createWorkReport({
      labor_id: laborId,
      machine_id: machineId,
      project_id: projectId,
      job_name: jobName,
      job_number: jobNumber,
      settings_count: settingsCount,
      report_date: reportDate,
      start_time: startTime,
      end_time: endTime,
      delay_time: delayTime,
      delay_reason: delayReason,
      total_running_hours: totalRunningHours,
      status: "Pending",
      labor_name: "John Doe", // Hardcoded for demo
      images: ["/industrial-machinery-operation.png"],
    })

    return { success: true, report: newReport }
  } catch (error) {
    console.error("Error submitting work report:", error)
    return { success: false, message: "Failed to submit work report" }
  }
}

export async function getWorkReports() {
  try {
    const reports = await db.getWorkReports()
    return { success: true, reports }
  } catch (error) {
    console.error("Error fetching work reports:", error)
    return { success: false, message: "Failed to fetch work reports" }
  }
}

export async function getWorkReportsByLaborId(laborId: number) {
  try {
    const reports = await db.getWorkReportsByLaborId(laborId)
    return { success: true, reports }
  } catch (error) {
    console.error("Error fetching work reports:", error)
    return { success: false, message: "Failed to fetch work reports" }
  }
}
 */


"use server"

import db from "@/lib/db-mysql" // Changed from mock db to MySQL connection

export async function submitWorkReport(formData: FormData) {
  // Extract and validate form data
  const machineId = Number.parseInt(formData.get("machineId") as string, 10)
  const projectId = Number.parseInt(formData.get("projectId") as string, 10)
  const jobName = formData.get("jobName") as string
  const jobNumber = formData.get("jobNumber") as string
  const settingsCount = Number.parseInt(formData.get("settingsCount") as string, 10)
  const reportDate = new Date(formData.get("reportDate") as string)
  const startTime = formData.get("startTime") as string
  const endTime = formData.get("endTime") as string
  const delayTime = Number.parseInt(formData.get("delayTime") as string, 10)
  const delayReason = formData.get("delayReason") as string
  const totalRunningHours = Number.parseFloat(formData.get("totalRunningHours") as string)

  // In a real app, you would get the labor ID from the authenticated user
  // For now, we'll use a hardcoded value as in the original code
  const laborId = 2 // Hardcoded for demo

  try {
    // Prepare report data
    const reportData = {
      labor_id: laborId,
      machine_id: machineId,
      project_id: projectId,
      job_name: jobName,
      job_number: jobNumber || null,
      settings_count: settingsCount,
      report_date: reportDate,
      start_time: startTime,
      end_time: endTime,
      delay_time: delayTime,
      delay_reason: delayReason || null,
      total_running_hours: totalRunningHours,
      // In a real app, you would handle image uploads to a storage service
      // and store the URLs in the database
      images: ["/industrial-machinery-operation.png"]
    }

    // Create the work report in the database
    const newReport = await db.createWorkReport(reportData)

    // Get the labor name for the response
    const labor = await db.getUserById(laborId)
    
    // Add status and labor_name to the report for UI consistency
    const reportWithStatus = {
      ...newReport,
      status: "Pending",
      labor_name: labor ? labor.name : "Unknown"
    }

    return { success: true, report: reportWithStatus }
  } catch (error) {
    console.error("Error submitting work report:", error)
    return { success: false, message: "Failed to submit work report" }
  }
}

export async function getWorkReports() {
  try {
    // Get all work reports from the database
    const reports = await db.getWorkReports()
    
    // Process reports to ensure they have the expected format
    // This helps maintain compatibility with the UI that was built for the mock data
    const processedReports = reports.map(report => {
      // Convert MySQL datetime strings to JavaScript Date objects if needed
      const reportDate = report.report_date instanceof Date 
        ? report.report_date 
        : new Date(report.report_date)
        
      // Format the date for display
      const formattedDate = reportDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
      
      // Get images for the report (in a real implementation, you would query the report_images table)
      // For now, we'll use a placeholder
      const images = ["/industrial-machinery-operation.png"]
      
      return {
        ...report,
        report_date: reportDate,
        date: formattedDate, // Add formatted date for UI
        images: images,
        // Ensure status exists (you might want to add a status field to your database)
        status: report.status || "Pending"
      }
    })
    
    return { success: true, reports: processedReports }
  } catch (error) {
    console.error("Error fetching work reports:", error)
    return { success: false, message: "Failed to fetch work reports" }
  }
}

export async function getWorkReportsByLaborId(laborId: number) {
  try {
    // Get work reports for a specific labor from the database
    const reports = await db.getWorkReportsByLaborId(laborId)
    
    // Process reports similar to getWorkReports
    const processedReports = reports.map(report => {
      const reportDate = report.report_date instanceof Date 
        ? report.report_date 
        : new Date(report.report_date)
        
      const formattedDate = reportDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
      
      const images = ["/industrial-machinery-operation.png"]
      
      return {
        ...report,
        report_date: reportDate,
        date: formattedDate,
        images: images,
        status: report.status || "Pending"
      }
    })
    
    return { success: true, reports: processedReports }
  } catch (error) {
    console.error("Error fetching work reports:", error)
    return { success: false, message: "Failed to fetch work reports" }
  }
}

// Add a new function to update report status (useful for admin approval/rejection)
export async function updateReportStatus(reportId: number, status: string) {
  try {
    // In a real implementation, you would add a status column to your work_reports table
    // and update it with a query like:
    await db.query(
      'UPDATE work_reports SET status = ?, updated_at = NOW() WHERE id = ?',
      [status, reportId]
    )
    
    const updatedReport = await db.getWorkReportById(reportId)
    return { success: true, report: updatedReport }
  } catch (error) {
    console.error("Error updating report status:", error)
    return { success: false, message: "Failed to update report status" }
  }
}

// Add a function to get report images
export async function getReportImages(reportId: number) {
  try {
    const images = await db.query(
      'SELECT * FROM report_images WHERE report_id = ?',
      [reportId]
    )
    return { success: true, images }
  } catch (error) {
    console.error("Error fetching report images:", error)
    return { success: false, message: "Failed to fetch report images" }
  }
}