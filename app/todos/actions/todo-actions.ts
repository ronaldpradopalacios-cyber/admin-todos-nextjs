"use server";
import prisma from "@/app/lib/prisma";
import { Todo } from "@/app/generated/prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  complete: boolean,
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    throw new Error(`Todo con el id ${id} no encontrado`);
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed: complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const addTodo = async (title: string) => {
  try {
    const todoNew = await prisma.todo.create({
      data: {
        title,
        completed: false,
      },
    });
    revalidatePath("/dashboard/server-todos");

    return todoNew;
  } catch (error) {
    return {
      message: "Error al crear el todo",
    };
  }
};

export const deleteCompleted = async (): Promise<void> => {
  await prisma.todo.deleteMany({
    where: {
      completed: true,
    },
  });

  revalidatePath("/dashboard/server-todos");
};
