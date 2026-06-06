import { NextRequest, NextResponse } from 'next/server'

// Mock volunteer applications
const mockApplications: any[] = []

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(mockApplications.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
  } catch (error) {
    console.error('Error fetching volunteer applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch volunteer applications' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.city || !body.skills || !body.motivation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const newApplication = {
      ...body,
      _id: Math.random().toString(),
      status: 'pending',
      createdAt: new Date(),
    }

    mockApplications.push(newApplication)

    return NextResponse.json(
      {
        data: newApplication,
        message: 'Thank you for your interest in volunteering. We will review your application and get back to you soon.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating volunteer application:', error)
    return NextResponse.json(
      { error: 'Failed to submit volunteer application' },
      { status: 500 }
    )
  }
}
