import { NextRequest, NextResponse } from 'next/server'

// Mock donations data
const mockDonations: any[] = []

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(mockDonations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
  } catch (error) {
    console.error('Error fetching donations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donations' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.amount) {
      return NextResponse.json(
        { error: 'Amount is required' },
        { status: 400 }
      )
    }

    const newDonation = {
      ...body,
      _id: Math.random().toString(),
      status: 'completed',
      createdAt: new Date(),
    }

    mockDonations.push(newDonation)

    return NextResponse.json(newDonation, { status: 201 })
  } catch (error) {
    console.error('Error creating donation:', error)
    return NextResponse.json(
      { error: 'Failed to process donation' },
      { status: 500 }
    )
  }
}
