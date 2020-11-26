import React from "react";
import TodoList from "./components/TodoList";
import { TodoTask } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

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

  function addTodoHandler() {
    if (todoNameRef.current) {
      const todo: TodoTask = {
        id: uuidv4(),
        name: todoNameRef.current.value,
        completed: false,
      };
      apiSetTodo(todo);
    }
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={addTodoHandler}>Add todo</button>
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

async function apiSetTodo(todo: TodoTask) {
  const response = await fetch("/api/set-todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

async function apiRemoveTodos() {
  const response = await fetch("/api/remove-completed-todos", {
    method: "POST",
  });
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}
