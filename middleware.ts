// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('user')?.value
  
  // Check if the path starts with /dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // If no user is logged in, redirect to login
    if (!currentUser) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    
    // If user is logged in, check role for specific paths
    if (currentUser) {
      const user = JSON.parse(currentUser)
      
      // If user is labor but trying to access admin dashboard
      if (user.role === 'labor' && request.nextUrl.pathname.startsWith('/dashboard/admin')) {
        return NextResponse.redirect(new URL('/dashboard/labor', request.url))
      }
      
      // If user is admin but trying to access labor dashboard
      if (user.role === 'admin' && request.nextUrl.pathname.startsWith('/dashboard/labor')) {
        return NextResponse.redirect(new URL('/dashboard/admin', request.url))
      }
    }
  }
  
  return NextResponse.next()
}

// Configure the middleware to run only on dashboard routes
export const config = {
  matcher: '/dashboard/:path*',
}