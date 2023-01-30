import { TodoAction, TodoActionTypes } from "../../types/todo";
import { Dispatch } from "redux";
import axios from "axios";
export const fetchTodo = (limit = 10, page = 1) => {
  return (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: TodoActionTypes.FETCH_TODO });
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: limit,
          _page: page,
        },
      })
      .then((data) =>
        dispatch({
          type: TodoActionTypes.FETCH_TODO_SUCCESS,
          payload: data.data,
        })
      );
  };
};
