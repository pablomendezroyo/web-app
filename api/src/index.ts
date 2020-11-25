import { deleteCompletedTodos } from "./edit-todos/deleteCompletedTodos";
import { getTodos } from "./edit-todos/getTodos";

const todos = deleteCompletedTodos();

console.log(todos);
