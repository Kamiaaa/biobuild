// app/api/news-events/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/mongoose';
import NewsEvent from '@/models/NewsEvent';

export async function GET(request: NextRequest) {
  try {
    await connectMongo();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');
    const skip = (page - 1) * limit;

    const items = await NewsEvent.find()
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await NewsEvent.countDocuments();

    return NextResponse.json({
      data: items,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching news and events:', error);
    return NextResponse.json(
      { message: 'Error fetching news and events' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectMongo();

    const body = await request.json();

    const { type, title, date, location, summary, image } = body;

    // Basic validation
    if (!type || !title || !date || !summary || !image) {
      return NextResponse.json(
        { message: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    const newItem = new NewsEvent({
      type,
      title,
      date,
      summary,
      image,
      ...(type === 'event' && location ? { location } : {}),
    });

    await newItem.save();

    return NextResponse.json(
      { message: 'News/Event created successfully', data: newItem },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating news/event:', error);
    return NextResponse.json(
      { message: 'Error creating news/event' },
      { status: 500 }
    );
  }
}
