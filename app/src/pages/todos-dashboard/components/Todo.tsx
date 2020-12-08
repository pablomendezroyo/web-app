import axios from "axios";
import React from "react";
import { TodoTask } from "../../../types/types";
import { Card, CardTitle, CardText, CardBody } from "bootstrap-react";
import "./todoStyles.css";

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
      <Card className="card-todo">
        <CardBody className="card-body">
          <CardTitle className="card-title">{todo.name}</CardTitle>
          <CardText className="card-text">{todo.description}</CardText>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleTodoClick}
          />
        </CardBody>
      </Card>
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
