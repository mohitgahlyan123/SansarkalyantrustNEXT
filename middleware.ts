import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if route requires authentication
  if (pathname.startsWith('/admin')) {
    // Get session from cookies
    const session = request.cookies.get('session')

    if (!session) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      const sessionData = JSON.parse(session.value)
      const expiresAt = new Date(sessionData.expiresAt)

      // Check if session is expired
      if (expiresAt < new Date()) {
        const response = NextResponse.redirect(new URL('/login', request.url))
        response.cookies.delete('session')
        return response
      }

      // Check if user is admin (only allow admins to access certain routes)
      if (pathname.startsWith('/admin/users') && sessionData.role !== 'admin') {
        return NextResponse.redirect(new URL('/admin', request.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
