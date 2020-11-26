import fs from "fs";
import { TodoTask } from "../types/types";
import { data_path } from "../env/data";

export function setTodos(todos: TodoTask[]) {
  fs.writeFileSync(data_path, JSON.stringify(todos));
}
