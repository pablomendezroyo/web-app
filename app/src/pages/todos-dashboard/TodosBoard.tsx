import React from "react";
import TodoList from "./components/TodoList";
import { TodoTask } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function TodosBoard() {
  const [todos, setTodos] = React.useState<TodoTask[]>([]);
  const todoNameRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    apiGetTodos()
      .then((res) => setTodos(res))
      .catch((err) => console.log(err));
  }, []);

  function toggleTodo(id: string) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={apisetTodo}>Add todo</button>
      <button onClick={apiRemoveTodos}>Clear completed todos</button>
      <div>{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

async function apiGetTodos() {
  const response = await fetch("/api/get-todos");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

async function apisetTodo() {
  const response = await fetch("/api/get-todos");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

async function apiRemoveTodos() {
  const response = await fetch("/api/get-todos");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}
