import { NextRequest, NextResponse } from 'next/server'

// Mock blog posts data
const mockBlogPosts = [
  {
    slug: 'health-camp-impact-story',
    title: 'Health Camp Impact: 500+ Lives Touched',
    description: 'Read how our health camps are bringing medical care to remote villages and changing lives.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Healthcare',
    date: new Date('2024-06-10').toISOString(),
  },
  {
    slug: 'education-initiative-success',
    title: 'Breaking Barriers: Night Education Success',
    description: 'Stories of children who are now pursuing their dreams through our free night education program.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Education',
    date: new Date('2024-06-05').toISOString(),
  },
  {
    slug: 'environmental-conservation-drive',
    title: 'Green Future: Our Tree Plantation Journey',
    description: 'How our community is working together to plant 10,000 trees and create a sustainable environment.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Environment',
    date: new Date('2024-06-01').toISOString(),
  },
]

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search')

    let filtered = mockBlogPosts

    if (search) {
      const searchLower = search.toLowerCase()
      filtered = mockBlogPosts.filter(
        p =>
          p.title.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower)
      )
    }

    return NextResponse.json(
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    )
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newPost = {
      ...body,
      _id: Math.random().toString(),
      createdAt: new Date(),
    }

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}
