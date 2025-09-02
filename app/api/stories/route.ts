import { NextResponse } from "next/server"

// In a real implementation, this would connect to a database
// For now, we'll use an in-memory store
const stories: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.title || !body.story) {
      return NextResponse.json({ error: "Name, email, title, and story are required" }, { status: 400 })
    }

    // Create story with timestamp
    const story = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      title: body.title,
      story: body.story,
      allowComments: body.allowComments || false,
      sharePublicly: body.sharePublicly || false,
      date: new Date().toISOString(),
      status: "pending", // Requires admin approval
    }

    // In a real implementation, this would save to a database
    stories.push(story)

    return NextResponse.json({ success: true, message: "Story submitted successfully", story }, { status: 201 })
  } catch (error) {
    console.error("Error submitting story:", error)
    return NextResponse.json({ error: "Failed to submit story" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // In a real implementation, this would fetch from a database
    // and only return approved, public stories
    const publicStories = stories.filter((story) => story.status === "approved" && story.sharePublicly)

    return NextResponse.json({ stories: publicStories })
  } catch (error) {
    console.error("Error fetching stories:", error)
    return NextResponse.json({ error: "Failed to fetch stories" }, { status: 500 })
  }
}
