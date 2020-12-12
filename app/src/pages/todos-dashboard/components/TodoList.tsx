import React from "react";
import Todo from "./Todo";
import { Content } from "../../../types/types";

export default function TodoList({
  todos,
  toggleTodo,
}: {
  todos: Content[];
  toggleTodo: Function;
}): JSX.Element {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
      ))}
    </>
  );
}
