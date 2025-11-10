import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { friendMessages } from '@/lib/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // Validation
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message must be less than 1000 characters' },
        { status: 400 }
      );
    }

    // Insert into database (auto-approved for close friends)
    const [newMessage] = await db.insert(friendMessages).values({
      name: name.trim(),
      message: message.trim(),
      approved: true,
      approvedAt: new Date(),
    }).returning();

    return NextResponse.json({
      success: true,
      message: 'Message submitted successfully',
      id: newMessage.id,
    }, { status: 201 });

  } catch (error) {
    console.error('Error submitting message:', error);
    return NextResponse.json(
      { error: 'Failed to submit message. Please try again.' },
      { status: 500 }
    );
  }
}
