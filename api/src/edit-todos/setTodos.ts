import fs from "fs";
import { Content } from "../types/types";
import { data_path } from "../env/data";

export function setTodos(todos: Content[]) {
  fs.writeFileSync(data_path, JSON.stringify(todos));
}
