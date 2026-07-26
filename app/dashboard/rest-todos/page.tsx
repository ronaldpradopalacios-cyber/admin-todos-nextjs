import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/app/todos/components/TodosGrid";
import { NewTodo } from "@/app/todos/components/NewTodo";

export const metadata = {
  title: "Listado de TODOS",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { title: "asc" } });

  return (
    <div>
      {/* formulario para agregar todos... */}
      <div className="w-full px-5 mx-3 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
