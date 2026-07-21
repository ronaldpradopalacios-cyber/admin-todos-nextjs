import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const result = await prisma.todo.findFirst({
    where: { id },
  });

  //   console.log("Todo found:", result);

  if (!result) {
    return NextResponse.json(
      { error: `Todo with id ${id} not found` },
      { status: 404 },
    );
  }

  return NextResponse.json(result);
}
