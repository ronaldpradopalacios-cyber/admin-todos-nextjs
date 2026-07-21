import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ hola: "World!" });
}

export async function POST(request: Request) {
  //   const body = await request.json();
  return NextResponse.json({ hola: "World!", method: "POST" });
}
