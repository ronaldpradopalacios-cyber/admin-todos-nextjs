import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { object, string, boolean } from "yup";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await prisma.todo.findFirst({
    where: { id },
  });

  if (!result) {
    return NextResponse.json(
      { error: `Todo with id ${id} not found` },
      { status: 404 },
    );
  }

  return NextResponse.json(result);
}

// Schema de validacion del PUT
const putSchema = object({
  title: string().optional(),
  completed: boolean().optional(),
});

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const result = await prisma.todo.findFirst({
    where: { id },
  });

  if (!result) {
    return NextResponse.json(
      { error: `Todo with id ${id} not found` },
      { status: 404 },
    );
  }

  try {
    const { title, completed, ...rest } = await putSchema.validate(
      await request.json(),
    );

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { title, completed },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
