import { NextRequest, NextResponse } from 'next/server'

// Mock events data
const mockEvents = [
  {
    slug: 'health-camp-rohtak',
    title: 'Free Health Camp - Rohtak',
    description: 'Medical checkup and health awareness program for the community.',
    image: '/placeholder.svg?height=400&width=600',
    date: new Date('2024-06-15').toISOString(),
    type: 'Health Camp',
  },
  {
    slug: 'education-drive',
    title: 'Free Night Education Drive',
    description: 'Interactive learning session for underprivileged children.',
    image: '/placeholder.svg?height=400&width=600',
    date: new Date('2024-06-20').toISOString(),
    type: 'Education',
  },
  {
    slug: 'tree-plantation',
    title: 'Tree Plantation Drive',
    description: 'Community environmental conservation initiative.',
    image: '/placeholder.svg?height=400&width=600',
    date: new Date('2024-06-22').toISOString(),
    type: 'Environment',
  },
  {
    slug: 'health-camp-past-1',
    title: 'Health Camp - March 2024',
    description: '500+ families benefited from medical checkup and awareness.',
    image: '/placeholder.svg?height=400&width=600',
    date: new Date('2024-03-15').toISOString(),
    type: 'Health Camp',
  },
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(mockEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newEvent = {
      ...body,
      _id: Math.random().toString(),
      createdAt: new Date(),
    }

    return NextResponse.json(newEvent, { status: 201 })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    )
  }
}
