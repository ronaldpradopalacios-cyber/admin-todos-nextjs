import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/app/todos/components/TodosGrid";

export const metadata = {
  title: "Listado de TODOS",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { title: "asc" } });

  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then((response) => response.json())
  //     .then((todos) => console.log(todos));
  // }, []);

  return (
    <div>
      {/* formulario para agregar todos... */}
      <TodosGrid todos={todos} />
    </div>
  );
}
