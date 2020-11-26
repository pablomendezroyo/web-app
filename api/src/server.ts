import express from "express";
import bodyParser from "body-parser";
import { getTodos } from "./edit-todos/getTodos";
import { setTodo } from "./edit-todos/setTodo";
import { removeCompletedTodos } from "./edit-todos/removeCompletedTodos";
import { setStatusTodos } from "./edit-todos/setStatusTodos";
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get-todos", (req, res) => {
  const todos = getTodos();
  res.send(todos);
});
app.post("/api/set-todo", (req, res) => {
  console.log(req.body);
  setTodo(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.post("/api/remove-todo", (req, res) => {
  removeCompletedTodos();
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.post("/api/set-status-todos", (req, res) => {
  setStatusTodos(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
