import { NextResponse } from 'next/server';
import { db } from '../../../lib/db'; 
import { events } from '../../../lib/db/schema';

export async function GET() {
  try {
    // Attempt to fetch all events from your Neon database
    const allEvents = await db.select().from(events);
    
    return NextResponse.json({ 
      success: true, 
      message: "Database connection is PERFECT!", 
      data: allEvents 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Connection failed", 
      error: String(error) 
    });
  }
}