import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { friendMessages } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { desc } from 'drizzle-orm';

// GET all messages (for admin)
export async function GET(request: NextRequest) {
  try {
    const messages = await db
      .select()
      .from(friendMessages)
      .orderBy(desc(friendMessages.createdAt));

    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// PATCH to approve/unapprove a message
export async function PATCH(request: NextRequest) {
  try {
    const { id, action } = await request.json();

    if (!id || !action) {
      return NextResponse.json(
        { error: 'ID and action are required' },
        { status: 400 }
      );
    }

    if (action === 'approve') {
      await db
        .update(friendMessages)
        .set({
          approved: true,
          approvedAt: new Date(),
        })
        .where(eq(friendMessages.id, id));
    } else if (action === 'unapprove') {
      await db
        .update(friendMessages)
        .set({
          approved: false,
          approvedAt: null,
        })
        .where(eq(friendMessages.id, id));
    } else {
      return NextResponse.json(
        { error: 'Invalid action' },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json(
      { error: 'Failed to update message' },
      { status: 500 }
    );
  }
}

// DELETE a message
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }

    await db.delete(friendMessages).where(eq(friendMessages.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
}
