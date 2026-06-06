import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { addMockUser, findMockUserByEmail } from '@/lib/mock-users'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, confirmPassword } = body

    // Validation
    if (!email || !password || !name || !confirmPassword) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    if (name.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = findMockUserByEmail(email)

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    // Create user in mock storage
    const newUser = {
      _id: Math.random().toString(),
      email: email.toLowerCase(),
      password: hashedPassword,
      name,
      role: 'editor' as const,
      isActive: true,
      createdAt: new Date(),
    }

    addMockUser(newUser)

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful. Please login to continue.',
        user: {
          id: newUser._id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to register' },
      { status: 500 }
    )
  }
}
