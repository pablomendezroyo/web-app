import { TodoTask } from "../types/types";
import { getTodos } from "./getTodos";
import { setTodo } from "./setTodo";
import { setTodos } from "./setTodos";

export function setStatusTodos(todos: TodoTask[]) {
  const oldTodos = getTodos();
  oldTodos.map((oldTodo) =>
    todos.map((todo) => {
      if (oldTodo.completed !== todo.completed) {
        oldTodo.completed = todo.completed;
      }
    })
  );
  setTodos(oldTodos);
}
