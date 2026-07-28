export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/app/todos/components/TodosGrid";
import { NewTodo } from "@/app/todos/components/NewTodo";

export const metadata = {
  title: "Listado de TODOS",
  description: "SEO Title",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { title: "asc" } });

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      {/* formulario para agregar todos... */}
      <div className="w-full px-5 mx-3 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}
