import { NextResponse } from "next/server"

// In a real implementation, this would connect to a database
// For now, we'll use an in-memory store
const nominations: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.nomineeName || !body.nomineeLocation || !body.nominatorName || !body.nominatorEmail) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 })
    }

    if (!body.hasPermission) {
      return NextResponse.json({ error: "Permission from nominee is required" }, { status: 400 })
    }

    // Create nomination with timestamp
    const nomination = {
      id: Date.now().toString(),
      nomineeName: body.nomineeName,
      nomineeLocation: body.nomineeLocation,
      nominatorName: body.nominatorName,
      nominatorEmail: body.nominatorEmail,
      reason: body.reason || "",
      hasPermission: body.hasPermission,
      date: new Date().toISOString(),
      status: "pending", // Requires admin review
    }

    // In a real implementation, this would save to a database
    nominations.push(nomination)

    return NextResponse.json(
      {
        success: true,
        message: "Nomination submitted successfully",
        nomination,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error submitting nomination:", error)
    return NextResponse.json({ error: "Failed to submit nomination" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // In a real implementation, this would fetch from a database
    // and only return approved nominations for admin review
    return NextResponse.json({ nominations })
  } catch (error) {
    console.error("Error fetching nominations:", error)
    return NextResponse.json({ error: "Failed to fetch nominations" }, { status: 500 })
  }
}
