import { Todo } from "@/app/generated/prisma/client";

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

  console.log("dbTodoResult", { dbTodoResult });

  return dbTodoResult;
};
