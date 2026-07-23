import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  //   const todo = await prisma.todo.create({
  //     data: {
  //       title: "Piedra del alma",
  //       completed: true,
  //     },
  //   });

  //   console.log("Todo created:", todo);

  await prisma.todo.createMany({
    data: [
      { title: "Piedra del alma", completed: true },
      { title: "Piedra del tiempo", completed: true },
      { title: "Piedra del poder" },
      { title: "Piedra del espacio" },
      { title: "Piedra de la realidad" },
    ],
  });

  return NextResponse.json({ message: "Seed executed!" });
}
