import React from "react";
import TodoList from "./components/TodoList";
import { TodoTask } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function TodosBoard() {
  const [todos, setTodos] = React.useState<TodoTask[]>([]);
  const todoNameRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id: string) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo() {
    if (todoNameRef.current) {
      const name = todoNameRef.current.value;
      console.log(name);

      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
      });
      todoNameRef.current.value = "";
    }
    return;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleClearTodos}>Clear completed todos</button>
      <div>{todos.filter((todo) => !todo.complete).length}</div>
    </>
  );
}
