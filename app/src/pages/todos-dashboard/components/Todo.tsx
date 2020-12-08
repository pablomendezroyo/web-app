import axios from "axios";
import "./todoStyles.css";
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
    <div className="single-todo">
      <div className="single-todo-title">
        <h3>{todo.name}</h3>
      </div>
      <div className="single-todo-content">
        <p>
          {todo.description}{" "}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleTodoClick}
          />
        </p>
      </div>
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
