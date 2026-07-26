"use client";

import { useRouter } from "next/navigation";
import { Todo } from "@/app/generated/prisma/client";
import { TodoItem } from "./TodoItem";

import * as todosHelper from "@/app/todos/helpers/todos";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  const toggleTodo = async (id: string, completed: boolean) => {
    console.log("toggleTodo", { id, completed });

    const updatedTodo = await todosHelper.updateTodo(id, completed);
    console.log({ updatedTodo });
    router.refresh();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
