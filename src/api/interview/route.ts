import { NextRequest, NextResponse } from "next/server";

const apiURL =
  process.env.NODE_ENV == "development"
    ? process.env.DEVELOPMENT_CHATBOT_URL
    : process.env.PRODUCTION_CHATBOT_URL;

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    const resp = await fetch(`${apiURL}/api/interview`, {
      method: "POST",
      // headers: {
      //     "Authorization": `Bearer ${token}`
      // }
      body: data,
    });
    const botResponse = await resp.json();

    return NextResponse.json({ message: botResponse.content }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error, status: error.status }, { status: 500 });
  }
}
