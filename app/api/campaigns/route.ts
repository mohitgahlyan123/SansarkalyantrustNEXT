import { NextRequest, NextResponse } from 'next/server'

// Mock campaigns data for Phase 2 development
// TODO: Replace with MongoDB queries when MONGODB_URI is configured
const mockCampaigns = [
  {
    slug: 'har-daan-ek-pehchaan',
    title: 'Har Daan Ek Pehchaan',
    description: 'Every donation creates an identity for someone in need. Support our core mission of healthcare, education, and community development.',
    image: '/placeholder.svg?height=400&width=600',
    goal: 500000,
    raised: 125000,
    donors: 450,
  },
  {
    slug: 'swasth-samaj-sashakt-bharat',
    title: 'Swasth Samaj Sashakt Bharat',
    description: 'Supporting health camps and medical awareness programs in rural communities to ensure universal access to quality healthcare.',
    image: '/placeholder.svg?height=400&width=600',
    goal: 300000,
    raised: 180000,
    donors: 320,
  },
  {
    slug: 'sadak-suraksha-pashu-raksha',
    title: 'Sadak Suraksha Pashu Raksha',
    description: 'Street animal rescue and care program to protect and support stray animals across districts.',
    image: '/placeholder.svg?height=400&width=600',
    goal: 150000,
    raised: 45000,
    donors: 120,
  },
  {
    slug: 'free-night-street-education',
    title: 'Free Night Street Education',
    description: 'Empowering underprivileged children through free education programs conducted in evening hours for those who work during the day.',
    image: '/placeholder.svg?height=400&width=600',
    goal: 200000,
    raised: 75000,
    donors: 200,
  },
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(mockCampaigns)
  } catch (error) {
    console.error('Error fetching campaigns:', error)
    return NextResponse.json(
      { error: 'Failed to fetch campaigns' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newCampaign = {
      ...body,
      _id: Math.random().toString(),
      createdAt: new Date(),
    }

    return NextResponse.json(newCampaign, { status: 201 })
  } catch (error) {
    console.error('Error creating campaign:', error)
    return NextResponse.json(
      { error: 'Failed to create campaign' },
      { status: 500 }
    )
  }
}
