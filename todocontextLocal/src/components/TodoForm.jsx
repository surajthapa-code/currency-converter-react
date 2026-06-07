import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex gap-3">
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Write todo..."
        className="w-full rounded-2xl border border-slate-700 bg-slate-800/90 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition duration-150 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
      />
      <button
        type="submit"
        className="rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
