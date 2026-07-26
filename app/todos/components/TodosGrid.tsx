"use client";

import { Todo } from "@/app/generated/prisma/client";
import { TodoItem } from "./TodoItem";

import * as todosHelper from "@/app/todos/helpers/todos";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  console.log("TodosGrid", todos);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={todosHelper.updateTodo}
        />
      ))}
    </div>
  );
};
