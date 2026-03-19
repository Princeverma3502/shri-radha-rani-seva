import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log(`New Message from ${name} (${email}): ${message}`);

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}