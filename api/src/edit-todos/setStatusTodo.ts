import { TodoTask } from "../types/types";
import { getTodos } from "./getTodos";
import { setTodos } from "./setTodos";

export function setStatusTodo(todo: TodoTask) {
  const todos = getTodos();
  const todoChangeStatus = todos.find((match) => match.id === todo.id);
  if (todoChangeStatus) {
    const indexTodo = todos.indexOf(todoChangeStatus);
    todos.splice(indexTodo, 1, todo);
    setTodos(todos);
  } else {
    throw Error("Todo not found");
  }
}
