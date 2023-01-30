import { fetchTodo, setTodoPage } from "../store/actionCreators/todo";
import { store } from "../store";
import { useState, useEffect, useMemo } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
const TodoList = () => {
  const { todo, error, loading, page, headers, limit } = useTypeSelector(
    (state) => state.todoReducer
  );

  useEffect(() => {
    store.dispatch(fetchTodo(page, limit));
  }, [page]);

  const pageCount = useMemo(
    () => Math.ceil(+headers?.["x-total-count"] / limit),
    [headers]
  );

  const pages = (() => {
    const result = [];
    for (let i = 1; i <= pageCount; i++) {
      result.push(i);
    }
    return result;
  })();

  if (loading) return <h1>loading!</h1>;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {todo &&
          todo.map((el) => (
            <p>
              {el.id}
              {el.title}
            </p>
          ))}
      </div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {pageCount &&
          pages.map((el, index) => (
            <button
              onClick={() => {
                store.dispatch(setTodoPage(index + 1));
              }}
              style={{
                width: "20px",
                border:
                  page === index + 1 ? "3px solid green" : "3px solid grey",
              }}
            >
              {el}
            </button>
          ))}
      </div>
    </>
  );
};

export default TodoList;
