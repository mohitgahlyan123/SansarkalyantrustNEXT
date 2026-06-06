import { NextRequest, NextResponse } from 'next/server'

// Mock campaigns data
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
]

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const campaign = mockCampaigns.find(c => c.slug === slug)

    if (!campaign) {
      return NextResponse.json(
        { error: 'Campaign not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(campaign)
  } catch (error) {
    console.error('Error fetching campaign:', error)
    return NextResponse.json(
      { error: 'Failed to fetch campaign' },
      { status: 500 }
    )
  }
}
