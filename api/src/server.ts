import express from "express";
import bodyParser from "body-parser";
import { getTodos } from "./edit-todos/getTodos";
import { setTodo } from "./edit-todos/setTodo";
import { removeCompletedTodos } from "./edit-todos/removeCompletedTodos";
import { setStatusTodo } from "./edit-todos/setStatusTodo";
require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/api/get-todos", (req, res) => {
  try {
    const todos = getTodos();
    res.send(todos);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

app.post("/api/set-todo", (req, res) => {
  try {
    setTodo(req.body);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(401);
  }
});

app.post("/api/remove-completed-todos", (req, res) => {
  try {
    removeCompletedTodos();
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

app.post("/api/set-status-todo", (req, res) => {
  try {
    setStatusTodo(req.body);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    console.log(req.body);
    res.sendStatus(404);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
