import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { object, string, boolean } from "yup";

export async function GET(request: Request) {
  // queryParams
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take, tienen que ser numero" },
      { status: 400 },
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip, tienen que ser numero" },
      { status: 400 },
    );
  }

  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
  });

  return NextResponse.json(todos);
}

// Schema de validacion del POST
const postSchema = object({
  title: string().required(""),
  completed: boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const { completed, title } = await postSchema.validate(
      await request.json(),
    );

    const todoNew = await prisma.todo.create({
      data: {
        title,
        completed,
      },
    });

    return NextResponse.json(todoNew);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
