const fs = require("fs");
import { TodoTask } from "../types/types";

export function getTodos(): TodoTask[] {
  //console.log(process.cwd());
  return JSON.parse(fs.readFileSync("src/data/todos.json", "utf-8"));
}
