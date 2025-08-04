// app/api/news-events/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/mongoose';
import NewsEvent from '@/models/NewsEvent';

// GET a single news/event by ID
export async function GET(req: NextRequest) {
  await connectMongo();
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop(); // extract ID from URL

  try {
    const newsEvent = await NewsEvent.findById(id);
    if (!newsEvent) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(newsEvent, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
