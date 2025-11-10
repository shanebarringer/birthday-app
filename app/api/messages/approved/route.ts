import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { friendMessages } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

// Disable caching for this route - always fetch fresh data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const messages = await db
      .select()
      .from(friendMessages)
      .where(eq(friendMessages.approved, true))
      .orderBy(desc(friendMessages.createdAt));

    // Set cache control headers to prevent any caching
    return NextResponse.json(
      { messages },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching approved messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
