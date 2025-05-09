"use client"

import type React from "react"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Timer, Clock, Upload, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitWorkReport } from "@/actions/reports"

// Form schema
const formSchema = z.object({
  machineId: z.string({
    required_error: "Please select a machine",
  }),
  projectId: z.string({
    required_error: "Please select a project",
  }),
  jobName: z.string().min(2, {
    message: "Job name must be at least 2 characters",
  }),
  jobNumber: z.string().optional(),
  settingsCount: z.string().transform((val) => Number.parseInt(val, 10)),
  reportDate: z.date({
    required_error: "Please select a date",
  }),
  startTime: z.string({
    required_error: "Please enter start time",
  }),
  endTime: z.string({
    required_error: "Please enter end time",
  }),
  delayTime: z.string().default("0"),
  delayReason: z.string().optional(),
  totalRunningHours: z.string(),
  notes: z.string().optional(),
})

type FileWithPreview = {
  file: File
  preview: string
}

export default function WorkReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [images, setImages] = useState<FileWithPreview[]>([])

  // Mock data for dropdowns
  const machines = [
    { id: "1", name: "Murukku Machine #1" },
    { id: "2", name: "Murukku Machine #2" },
    { id: "3", name: "Murukku Machine #3" },
    { id: "4", name: "Industrial Mixer #1" },
    { id: "5", name: "Industrial Mixer #2" },
    { id: "6", name: "Conveyor System #1" },
  ]

  const projects = [
    { id: "1", name: "A2B Murukku Production" },
    { id: "2", name: "Jum Jum Sweets Production" },
    { id: "3", name: "Global Foods Mixer Installation" },
    { id: "4", name: "Tasty Treats Production" },
  ]

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      machineId: "",
      projectId: "",
      jobName: "",
      jobNumber: "",
      settingsCount: "0",
      reportDate: new Date(),
      startTime: "",
      endTime: "",
      delayTime: "0",
      delayReason: "",
      totalRunningHours: "0",
      notes: "",
    },
  })

  // Calculate total running hours when start and end time change
  const calculateRunningHours = () => {
    const startTime = form.watch("startTime")
    const endTime = form.watch("endTime")
    const delayTime = form.watch("delayTime") || "0"

    if (startTime && endTime) {
      // Convert time strings to minutes
      const [startHours, startMinutes] = startTime.split(":").map(Number)
      const [endHours, endMinutes] = endTime.split(":").map(Number)

      const startTotalMinutes = startHours * 60 + startMinutes
      let endTotalMinutes = endHours * 60 + endMinutes

      // Handle case where end time is on the next day
      if (endTotalMinutes < startTotalMinutes) {
        endTotalMinutes += 24 * 60
      }

      // Calculate difference in minutes
      const diffMinutes = endTotalMinutes - startTotalMinutes

      // Subtract delay time
      const totalMinutes = diffMinutes - Number.parseInt(delayTime, 10)

      // Convert back to hours with 1 decimal
      const totalHours = (totalMinutes / 60).toFixed(1)

      form.setValue("totalRunningHours", totalHours)
    }
  }

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return

    const newImages: FileWithPreview[] = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))

    setImages((prev) => [...prev, ...newImages])

    // Reset the input
    e.target.value = ""
  }

  // Remove image from preview
  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev]
      URL.revokeObjectURL(newImages[index].preview)
      newImages.splice(index, 1)
      return newImages
    })
  }

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Create a FormData object to pass to the server action
      const formData = new FormData()

      // Append form values to FormData
      Object.entries(values).forEach(([key, value]) => {
        if (key === "reportDate") {
          formData.append(key, value.toISOString())
        } else {
          formData.append(key, String(value))
        }
      })

      // In a real app, you'd also append the images
      images.forEach((image, index) => {
        formData.append(`image-${index}`, image.file)
      })

      // Submit the form data
      const result = await submitWorkReport(formData)

      if (result.success) {
        setSubmitSuccess(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          form.reset()
          setImages([])
          setSubmitSuccess(false)
        }, 3000)
      } else {
        console.error("Error submitting report:", result.message)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        {submitSuccess ? (
          <Alert className="bg-green-50 border-green-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600 h-5 w-5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <AlertDescription className="font-medium text-green-800">
                Work report submitted successfully!
              </AlertDescription>
            </div>
          </Alert>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Machine Selection */}
                <FormField
                  control={form.control}
                  name="machineId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Machine</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a machine" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {machines.map((machine) => (
                            <SelectItem key={machine.id} value={machine.id}>
                              {machine.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Project Selection */}
                <FormField
                  control={form.control}
                  name="projectId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a project" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {projects.map((project) => (
                            <SelectItem key={project.id} value={project.id}>
                              {project.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Name */}
                <FormField
                  control={form.control}
                  name="jobName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter job name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Job Number */}
                <FormField
                  control={form.control}
                  name="jobNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter job number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Settings Count */}
                <FormField
                  control={form.control}
                  name="settingsCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No. of Settings</FormLabel>
                      <FormControl>
                        <Input type="number" min="0" placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Report Date */}
                <FormField
                  control={form.control}
                  name="reportDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Start Time */}
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Time</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="time"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              calculateRunningHours()
                            }}
                          />
                        </FormControl>
                        <Clock className="absolute top-1/2 right-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* End Time */}
                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Time</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="time"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              calculateRunningHours()
                            }}
                          />
                        </FormControl>
                        <Clock className="absolute top-1/2 right-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Delay Time */}
                <FormField
                  control={form.control}
                  name="delayTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delay Time (minutes)</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            placeholder="0"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e)
                              calculateRunningHours()
                            }}
                          />
                        </FormControl>
                        <Timer className="absolute top-1/2 right-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Delay Reason */}
                <FormField
                  control={form.control}
                  name="delayReason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delay Reason (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Explain the reason for delay" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Total Running Hours */}
                <FormField
                  control={form.control}
                  name="totalRunningHours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Running Hours</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} readOnly className="bg-gray-50" />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-muted-foreground mt-1">
                        Automatically calculated based on start/end time and delay
                      </p>
                    </FormItem>
                  )}
                />
              </div>

              {/* Notes */}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter any additional information" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Image Upload */}
              <div>
                <FormLabel className="block mb-2">Attachments (Optional)</FormLabel>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mt-2">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-4">Upload images of your work (PNG, JPG, or JPEG)</p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("file-upload")?.click()}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Images
                    </Button>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/png, image/jpeg, image/jpg"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>

                  {images.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Uploaded Images:</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square rounded-md overflow-hidden border border-gray-200">
                              <img
                                src={image.preview || "/placeholder.svg"}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4 text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Work Report"}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  )
}
