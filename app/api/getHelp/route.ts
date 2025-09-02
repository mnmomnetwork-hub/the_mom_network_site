import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { county, category } = await req.json();

  const systemMessage = {
    role: "system",
    content:
      "You are a friendly, resourceful assistant who provides real community help to families. If you're unsure about a specific county, generalize to trusted state-wide or metro-area organizations. Never return nothing. Always suggest at least a few good leads.",
  };

  const userMessage = {
    role: "user",
    content: `A parent in ${county} County, Minnesota is looking for help with "${category}". Give a helpful list of organizations, programs, or services that apply. Format it as a list: name, what they do, and phone number or link if known. End with a short encouragement.`,
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        temperature: 0.6,
        max_tokens: 1000,
        messages: [systemMessage, userMessage],
      }),
    });

    const data = await response.json();

    const result = data.choices?.[0]?.message?.content;

    if (!result) {
      return NextResponse.json({
        result:
          "Hmm, I couldn’t find anything specific — but try a nearby county or message us and we’ll look into it 💛",
      });
    }

    return NextResponse.json({ result });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: "Something went wrong while contacting OpenAI." },
      { status: 500 }
    );
  }
}
