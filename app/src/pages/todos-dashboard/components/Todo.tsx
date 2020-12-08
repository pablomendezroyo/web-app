import axios from "axios";
import React from "react";
import { TodoTask } from "../../../types/types";

export default function Todo({
  todo,
  toggleTodo,
}: {
  todo: TodoTask;
  toggleTodo: Function;
}): JSX.Element {
  function handleTodoClick() {
    toggleTodo(todo.id);
    apiSetStatusTodo(todo);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}

async function apiSetStatusTodo(todo: TodoTask) {
  try {
    await axios.post("/api/set-status-todo", todo);
  } catch (e) {
    console.log(e);
  }
}
