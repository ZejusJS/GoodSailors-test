import { useEffect, useState } from "react";
import axios from "axios";
import { Todo } from "./Todo";
import { Filter } from "./Filter";
import { type IFilters } from "../../types/filter";
import { ITodo } from "../../types/todo";
import ErrorMsg from "./ErrorMsg";

export default function TodoList() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<ITodo[]>();
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>();
  const [filters, setFilters] = useState<IFilters>({
    show: "all",
  });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    setFilteredTodos(
      todos?.filter(
        (t) =>
          filters.show === "all" ||
          (t.completed && filters.show === "completed") ||
          (!t.completed && filters.show === "notCompleted")
      )
    );
  }, [todos, filters]);

  function fetchTodos() {
    setIsLoading(true);

    axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/todos`,
    })
      .then((data) => {
        setTodos(data.data);
        setIsError(false);
      })
      .catch((e) => {
        setIsError(true);
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div>
      <h1>Můj to-do list</h1>
      <Filter filters={filters} setFilters={setFilters} />
      {isLoading ? (
        "Načítání..."
      ) : isError ? (
        <ErrorMsg fetchTodos={fetchTodos} />
      ) : (
        filteredTodos?.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })
      )}
    </div>
  );
}
