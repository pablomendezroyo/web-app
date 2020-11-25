import { TodoTask } from "../../../types/types";

export default function Todo({
  todo,
  toggleTodo,
}: {
  todo: TodoTask;
  toggleTodo: Function;
}): JSX.Element {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
