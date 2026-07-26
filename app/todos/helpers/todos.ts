import { Todo } from "@/app/generated/prisma/client";

export const createTodo = async (title: string): Promise<Todo> => {
  const body = JSON.stringify({ title });

  const createdTodo = await fetch("/api/todos", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return createdTodo;
};

export const updateTodo = async (
  id: string,
  completed: boolean,
): Promise<Todo> => {
  const body = JSON.stringify({ completed });

  const dbTodoResult = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return dbTodoResult;
};

export const deleteCompletedTodos = async (): Promise<void> => {
  await fetch("/api/todos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
