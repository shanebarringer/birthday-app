import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { friendMessages } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET() {
  try {
    const messages = await db
      .select()
      .from(friendMessages)
      .where(eq(friendMessages.approved, true))
      .orderBy(desc(friendMessages.createdAt));

    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Error fetching approved messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
