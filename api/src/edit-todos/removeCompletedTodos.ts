import { getTodos } from "./getTodos";
import { setTodos } from "./setTodos";

export function removeCompletedTodos() {
  const todos = getTodos();
  const todosToKeep = todos.filter((todo) => todo.completed === false);
  setTodos(todosToKeep);
}
