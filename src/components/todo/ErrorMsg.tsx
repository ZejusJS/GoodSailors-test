import React from "react";

export default function ErrorMsg({ fetchTodos }: { fetchTodos: () => void }) {
  return (
    <div>
      Nepodařilo se načíst úkoly, zkuste to znovu později.{" "}
      <button type="button" onClick={fetchTodos}>
        Zkusit znovu
      </button>
    </div>
  );
}
