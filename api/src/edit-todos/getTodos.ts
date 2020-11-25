import fs from "fs";
import { TodoTask } from "../types/types";

export function getTodos(): TodoTask[] {
  //console.log(process.cwd());
  try {
    const todos = fs.readFileSync("src/data/todos.json", "utf-8");
    console.log(JSON.parse(todos));
    if (!todos) return [];
    return JSON.parse(todos);
  } catch (e) {
    if (e.code === "ENOENT") {
      return [];
    } else {
      throw e;
    }
  }
}
