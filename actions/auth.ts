"use server"

import db from "@/lib/db"
import { cookies } from "next/headers"

export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { success: false, message: "Email and password are required" }
  }

  try {
    // In a real app, you would hash the password and compare it securely
    const user = await db.getUserByEmail(email)

    if (!user || user.password !== password) {
      return { success: false, message: "Invalid email or password" }
    }

    // Set a cookie to simulate authentication
    // In a real app, you would use a proper authentication token
    cookies().set("user", JSON.stringify({ id: user.id, name: user.name, role: user.role }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, message: "An error occurred during login" }
  }
}

export async function logout() {
  cookies().delete("user")
  return { success: true }
}

export async function getCurrentUser() {
  const userCookie = cookies().get("user")

  if (!userCookie) {
    return null
  }

  try {
    return JSON.parse(userCookie.value)
  } catch {
    return null
  }
}
