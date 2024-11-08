import { ITodo } from "../../types/todo";

export function Todo({ completed, id, title, userId }: ITodo) {
  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>Dokončené?: {completed ? "Ano" : "Ne"}</p>
    </div>
  );
}
