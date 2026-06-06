import { NextRequest, NextResponse } from 'next/server'

// Mock contact inquiries
const mockInquiries: any[] = []

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(mockInquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
  } catch (error) {
    console.error('Error fetching contact inquiries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contact inquiries' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      )
    }

    const newInquiry = {
      ...body,
      _id: Math.random().toString(),
      createdAt: new Date(),
    }

    mockInquiries.push(newInquiry)

    return NextResponse.json(
      {
        data: newInquiry,
        message: 'Thank you for contacting us. We will get back to you soon.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating contact inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
