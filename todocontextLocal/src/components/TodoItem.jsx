import { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditabIe] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, toggleComplete, deleteTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditabIe(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex items-center gap-3 rounded-3xl border px-4 py-4 shadow-sm transition duration-300 ${
        todo.completed
          ? "border-emerald-500/20 bg-emerald-500/10"
          : "border-slate-700/70 bg-slate-800/90"
      }`}
    >
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer rounded border-slate-500 text-cyan-500 focus:ring-cyan-400"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`w-full rounded-2xl bg-transparent py-2 text-sm font-medium outline-none transition ${
          isTodoEditable
            ? "border border-slate-600 px-3"
            : "border border-transparent px-0"
        } ${todo.completed ? "line-through text-slate-400" : "text-slate-100"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 text-sm text-slate-200 transition hover:border-cyan-400 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditabIe((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "✔️" : "✏️"}
      </button>
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 text-sm text-slate-200 transition hover:border-rose-400 hover:bg-slate-700"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
