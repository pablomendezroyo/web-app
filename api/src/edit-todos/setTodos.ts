import fs from "fs";
import { TodoTask } from "../types/types";

export function setTodos(todos: TodoTask[]) {
  fs.writeFileSync("src/data/todos.json", JSON.stringify(todos));
}
