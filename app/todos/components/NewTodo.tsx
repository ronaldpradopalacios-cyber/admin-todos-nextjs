"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from "@/app/todos/helpers/todos";

export const NewTodo = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim().length === 0) return;

    const createdTodo = await todosApi.createTodo(title);
    console.log({ createdTodo });

    setTitle("");
    router.refresh();
  };

  const deleteCompleted = async () => {
    await todosApi.deleteCompletedTodos();
    router.refresh();
  };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        value={title}
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        //TODO: onClick={ () => deleteCompleted() }
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
        onClick={deleteCompleted}
      >
        <IoTrashOutline />

        <span className="ml-2">Borrar completados</span>
      </button>
    </form>
  );
};
