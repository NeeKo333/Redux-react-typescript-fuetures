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

  //   const pageCount = useMemo(
  //     () => Math.ceil(+headers?.["x-total-count"] / limit),
  //     [headers]
  //   );

  const pages = useMemo(() => {
    const pageCount = Math.ceil(+headers?.["x-total-count"] / limit);
    const result = [];
    for (let i = 1; i <= pageCount; i++) {
      result.push(i);
    }
    return result;
  }, []);

  return (
    <>
      {!loading ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {todo &&
            todo.map((el) => (
              <p>
                {el.id}
                {el.title}
              </p>
            ))}
        </div>
      ) : (
        <h1>loading...</h1>
      )}

      <div
        style={{
          position: "absolute",
          bottom: "45%",
          left: "35%",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {pages &&
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
