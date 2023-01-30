import { TodoAction, TodoActionTypes } from "../../types/todo";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchTodo = (page = 1, limit: number) => {
  return (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: TodoActionTypes.FETCH_TODO });
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: limit,
          _page: page,
        },
      })
      .then((data) => {
        dispatch({
          type: TodoActionTypes.FETCH_TODO_SUCCESS,
          payload: data.data,
          headers: data.headers,
        });
      });
  };
};

export const setTodoPage = (page: number) => {
  return (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: TodoActionTypes.SET_TODO_PAGE, payload: page });
  };
};
