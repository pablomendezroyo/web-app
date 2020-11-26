import React from "react";
import { TodoTask } from "../../../types/types";

export default function Todo({
  todo,
  toggleTodo,
}: {
  todo: TodoTask;
  toggleTodo: Function;
}): JSX.Element {
  const todoStatusRef = React.useRef<HTMLInputElement>(null);
  function handleTodoClick() {
    toggleTodo(todo.id);
    apiSetStatusTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          ref={todoStatusRef}
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}

async function apiSetStatusTodo(todoId: string) {
  const response = await fetch("/api/set-status-todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoId),
  });
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}
