import { NextRequest, NextResponse } from 'next/server'

// Mock gallery items
const mockGallery = [
  {
    id: '1',
    title: 'Health Camp 2024',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Healthcare',
    description: 'Free health checkup camp for villagers',
  },
  {
    id: '2',
    title: 'Education Program',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Education',
    description: 'Night education classes for underprivileged children',
  },
  {
    id: '3',
    title: 'Environment Drive',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Environment',
    description: 'Tree plantation and environmental awareness',
  },
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(mockGallery)
  } catch (error) {
    console.error('Error fetching gallery items:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newItem = {
      ...body,
      id: Math.random().toString(),
      createdAt: new Date(),
    }

    return NextResponse.json(newItem, { status: 201 })
  } catch (error) {
    console.error('Error creating gallery item:', error)
    return NextResponse.json(
      { error: 'Failed to create gallery item' },
      { status: 500 }
    )
  }
}
