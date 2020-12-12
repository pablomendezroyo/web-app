import React from "react";
import TodoList from "./components/TodoList";
import axios from "axios";
import { Content } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";

export default function TodosBoard() {
  const [idFromButtonClick, setIdFromButtonClick] = React.useState(0);
  const [todos, setTodos] = React.useState<Content[]>([]);
  const todoNameRef = React.useRef<HTMLInputElement>(null);
  const todoDescriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const todoLinksRef = React.useRef<HTMLInputElement>(null);
  const todoLinkNameRef = React.useRef<HTMLInputElement>(null);
  const todoSubjectRef = React.useRef<HTMLSelectElement>(null);

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
    if (
      todoNameRef.current &&
      todoDescriptionRef.current &&
      todoLinksRef.current &&
      todoLinkNameRef.current &&
      todoSubjectRef.current
    ) {
      const todo: Content = {
        subject: todoSubjectRef.current.value,
        id: uuidv4(),
        name: todoNameRef.current.value,
        description: todoDescriptionRef.current.value,
        completed: false,
        link: todoLinksRef.current.value,
        linkName: todoLinkNameRef.current.value,
      };

      apiSetTodo(todo);
      todoDescriptionRef.current.value = "";
      todoNameRef.current.value = "";
      if (todoLinksRef.current) {
        todoLinksRef.current.value = "";
        todoLinkNameRef.current.value = "";
      }
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

  async function apiSetTodo(todo: Content) {
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
      <Container>
        <Form>
          <Form.Group controlId="formTitleContent">
            <Form.Label>Asignatura</Form.Label>
            <Form.Control as="select" ref={todoSubjectRef}>
              <option>Lengua Castellana</option>
              <option>Geografía e Historia</option>
              <option>Latín</option>
              <option>Deberes</option>
              <option>Otros</option>{" "}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTitleContent">
            <Form.Label>Titulo del contenido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sintaxis"
              ref={todoNameRef}
            />
          </Form.Group>

          <Form.Group controlId="formDescriptionContent">
            <Form.Label>Descripcion del contenido</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Descripción"
              ref={todoDescriptionRef}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group controlId="formLinkContent">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https//:example.com"
                ref={todoLinksRef}
              />
            </Form.Group>
            <Form.Group controlId="formLinkNameContent">
              <Form.Label>Link Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="sintaxis definition"
                ref={todoLinkNameRef}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" onClick={addTodoHandler}>
            Añadir contenido
          </Button>
          <Button variant="secondary" onClick={apiRemoveTodos}>
            {`Eliminar ${
              todos.filter((todo) => todo.completed).length
            } contenidos`}
          </Button>
        </Form>
      </Container>
    </>
  );
}
