import { setStatusTodos } from "./edit-todos/setStatusTodos";
import { TodoTask } from "./types/types";

const newData: TodoTask[] = [
  {
    id: "shterjers",
    name: "MANIN2",
    completed: false,
    description: "sgwse",
  },
  {
    id: "shdfhjers",
    name: "MANIN2",
    completed: true,
    description: "sgwse",
  },
  {
    id: "36ffbfd5tyuik0-24ee53fab720",
    name: "grdgdrg",
    completed: true,
  },
  {
    id: "36fsdf809-9050-24ee53fab720",
    name: "grdgdrg",
    completed: false,
  },
  {
    id: "36ffbfd5-ersh24ee53fab720",
    name: "grdgdrg",
    completed: true,
  },
];

setStatusTodos(newData);
