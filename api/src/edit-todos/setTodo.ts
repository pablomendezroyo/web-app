import { Content } from "../types/types";
import { getTodos } from "./getTodos";
import { setTodos } from "./setTodos";

export function setTodo(todo: Content) {
  const todos = getTodos();
  todos.push({
    subject: todo.subject,
    id: todo.id,
    name: todo.name,
    description: todo.description,
    completed: todo.completed,
    link: todo.link,
    linkName: todo.linkName,
  });
  setTodos(todos);
}
