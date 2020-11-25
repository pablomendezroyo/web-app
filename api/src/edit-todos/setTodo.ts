import fs from "fs";
import { TodoTask } from "../types/types";
import { getTodos } from "./getTodos";
import { setTodos } from "./setTodos";

export function setTodo(todo: TodoTask) {
  const todos = getTodos();
  todos.push({
    id: todo.id,
    name: todo.name,
    completed: todo.completed,
    description: todo.description,
  });
  fs.writeFileSync("src/data/todos.json", JSON.stringify(todos));
}
