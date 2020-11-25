import { getTodos } from "./getTodos";

export function deleteCompletedTodos() {
  const todos = getTodos();
  return todos.filter((todo) => todo.completed === true);
}
