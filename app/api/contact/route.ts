import { NextResponse } from "next/server"

// In a real implementation, this would send emails
const contacts: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create contact record with timestamp
    const contact = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      date: new Date().toISOString(),
      status: "new",
    }

    // In a real implementation, this would:
    // 1. Save to database
    // 2. Send email to MNMomNetwork@gmail.com
    // 3. Send confirmation email to user
    contacts.push(contact)

    // TODO: Send email notification to admin
    console.log("New contact form submission:", contact)

    return NextResponse.json({ success: true, message: "Message sent successfully", contact }, { status: 201 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Return contacts for admin review
    return NextResponse.json({ contacts })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
