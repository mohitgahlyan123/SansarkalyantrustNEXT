import { connectDB } from '@/lib/mongodb'
import { Event } from '@/lib/models'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB()
    const { slug } = await params

    const event = await Event.findOne({ slug }).lean()

    if (!event) {
      return NextResponse.json(
        {
          success: false,
          error: 'Event not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: event,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching event:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch event',
      },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB()
    const { slug } = await params
    const body = await request.json()

    const event = await Event.findOneAndUpdate({ slug }, body, { new: true })

    if (!event) {
      return NextResponse.json(
        {
          success: false,
          error: 'Event not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: event,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update event',
      },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB()
    const { slug } = await params

    const event = await Event.findOneAndDelete({ slug })

    if (!event) {
      return NextResponse.json(
        {
          success: false,
          error: 'Event not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: event,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete event',
      },
      { status: 500 }
    )
  }
}
