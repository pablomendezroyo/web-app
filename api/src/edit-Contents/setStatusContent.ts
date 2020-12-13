import { Content } from "../types/types";
import { getContents } from "./getContents";
import { setContents } from "./setContents";

export function setStatusTodo(todo: Content) {
  const contents = getContents();
  const todoChangeStatus = contents.find((match) => match.id === todo.id);
  if (todoChangeStatus) {
    const indexTodo = contents.indexOf(todoChangeStatus);
    contents.splice(indexTodo, 1, todo);
    setContents(contents);
  } else {
    throw Error("Todo not found");
  }
}
