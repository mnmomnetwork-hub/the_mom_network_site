import { NextResponse } from "next/server"

// In a real implementation, this would connect to a database
// For now, we'll use an in-memory store
const entries: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // Create entry with timestamp
    const entry = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      date: new Date().toISOString(),
      agreeToRules: body.agreeToRules || false,
    }

    // In a real implementation, this would save to a database
    entries.push(entry)

    return NextResponse.json({ success: true, message: "Entry submitted successfully", entry }, { status: 201 })
  } catch (error) {
    console.error("Error submitting entry:", error)
    return NextResponse.json({ error: "Failed to submit entry" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // In a real implementation, this would fetch from a database
    return NextResponse.json({ entries })
  } catch (error) {
    console.error("Error fetching entries:", error)
    return NextResponse.json({ error: "Failed to fetch entries" }, { status: 500 })
  }
}
