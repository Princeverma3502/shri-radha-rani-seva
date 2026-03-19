import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { donations } from "@/src/lib/db/schema";
import { db } from "@/src/lib/db";

export async function GET() {
  try {
    const data = await db.select().from(donations).orderBy(desc(donations.createdAt));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch donors" }, { status: 500 });
  }
}