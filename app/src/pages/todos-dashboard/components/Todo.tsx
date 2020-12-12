import axios from "axios";
import React from "react";
import { Content } from "../../../types/types";
import { Card, ToggleButton } from "react-bootstrap";
import { headerColors } from "./headerColors";
import "./todoStyles.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Todo({
  todo,
  toggleTodo,
}: {
  todo: Content;
  toggleTodo: Function;
}): JSX.Element {
  function handleTodoClick() {
    toggleTodo(todo.id);
    apiSetStatusTodo(todo);
  }
  return (
    <>
      <div className="container-cards d-flex justify-content-center">
        <Card>
          <Card.Header
            style={{
              backgroundColor: headerColors.find(
                (item) => item.subject === todo.subject
              )?.color,
            }}
          >
            {todo.subject}
          </Card.Header>
          <Card.Title>{todo.name}</Card.Title>

          <Card.Body>
            <Card.Text>{todo.description}</Card.Text>
            <ToggleButton
              checked={todo.completed}
              type="checkbox"
              value={todo.completed}
              onChange={handleTodoClick}
            ></ToggleButton>

            {todo.link ? (
              <Card.Link href={`${todo.link}`}>{todo.linkName}</Card.Link>
            ) : null}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

async function apiSetStatusTodo(todo: Content) {
  try {
    await axios.post("/api/set-status-todo", todo);
  } catch (e) {
    console.log(e);
  }
}
