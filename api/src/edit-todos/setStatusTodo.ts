import { TodoTask } from "../types/types";
import { getTodos } from "./getTodos";
import { setTodo } from "./setTodo";
import { setTodos } from "./setTodos";

export function setStatusTodo(todoId: string) {
  const todos = getTodos();
  todos.map((todo) => {
    if (todo.id === todoId) {
      todo.completed = !todo.completed;
    }
  });
  setTodos(todos);
}
