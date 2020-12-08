import { TodoTask } from "../types/types";
import { getTodos } from "./getTodos";
import { setTodos } from "./setTodos";

export function setTodo(todo: TodoTask) {
  const todos = getTodos();
  todos.push({
    id: todo.id,
    name: todo.name,
    description: todo.description,
    completed: todo.completed,
  });
  setTodos(todos);
}
