import React from "react";
import TodoList from "./components/TodoList";
import axios from "axios";
import { TodoTask } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

export default function TodosBoard() {
  const [idFromButtonClick, setIdFromButtonClick] = React.useState(0);
  const [todos, setTodos] = React.useState<TodoTask[]>([]);
  const todoNameRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    apiGetTodos()
      .then((res) => setTodos(res))
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

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

  // API calls
  async function apiGetTodos() {
    try {
      const response = await axios.get("/api/get-todos");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async function apiSetTodo(todo: TodoTask) {
    try {
      await axios.post("/api/set-todo", todo);
      setIdFromButtonClick(idFromButtonClick + 1);
    } catch (e) {
      console.log(e);
    }
  }

  async function apiRemoveTodos() {
    try {
      await axios.post("/api/remove-completed-todos");
      setIdFromButtonClick(idFromButtonClick + 1);
    } catch (e) {
      console.log(e);
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
