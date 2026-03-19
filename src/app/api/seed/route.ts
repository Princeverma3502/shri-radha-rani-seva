import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { events } from '../../../lib/db/schema';

export async function GET() {
  try {
    // Injecting our first event into the database!
    await db.insert(events).values({
      title: "श्रीमद् भागवत कथा - महायज्ञ",
      slug: "shrimad-bhagwat-katha-2026",
      location: "श्री राधा रानी आश्रम, गोरखपुर",
      startDate: new Date("2026-04-10"),
      endDate: new Date("2026-04-17"),
      vachak: "पूज्य श्री मृदुल कृष्ण शास्त्री जी",
      description: "सात दिवसीय संगीतमय श्रीमद् भागवत कथा एवं विशाल भंडारे का भव्य आयोजन। आप सपरिवार आमंत्रित हैं।",
      isPublished: true,
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Boom! Test event added successfully!" 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Failed to add event", 
      error: String(error) 
    });
  }
}