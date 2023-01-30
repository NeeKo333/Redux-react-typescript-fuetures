import { UserActionTypes, UsersAction } from "../../types/users";
import { AnyAction, Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = (dispatch: Dispatch<UsersAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: data.data,
        });
      });
    }, 500);
  } catch (error) {
    dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error!" });
  }
};
