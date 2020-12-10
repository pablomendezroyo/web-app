import axios from "axios";
import React from "react";
import { TodoTask } from "../../../types/types";
import Card from "react-bootstrap/Card";
import "./todoStyles.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Todo({
  todo,
  toggleTodo,
}: {
  todo: TodoTask;
  toggleTodo: Function;
}): JSX.Element {
  function handleTodoClick() {
    toggleTodo(todo.id);
    apiSetStatusTodo(todo);
  }
  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <Card>
          <Card.Header>jj</Card.Header>
          <Card.Title>{todo.name}</Card.Title>

          <Card.Body>
            <Card.Text>{todo.description}</Card.Text>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleTodoClick}
            />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

async function apiSetStatusTodo(todo: TodoTask) {
  try {
    await axios.post("/api/set-status-todo", todo);
  } catch (e) {
    console.log(e);
  }
}
