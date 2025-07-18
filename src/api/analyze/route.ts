import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();

    return NextResponse.json({ message: "Hi there" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error }, { status: error.status });
  }
}
