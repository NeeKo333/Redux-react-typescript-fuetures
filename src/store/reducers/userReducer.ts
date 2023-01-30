import { UsersState, UsersAction, UserActionTypes } from "../../types/users";

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS: {
      return { loading: true, error: null, users: [] };
    }
    case UserActionTypes.FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        error: null,
        users: [...state.users, ...action.payload],
      };
    }
    case UserActionTypes.FETCH_USERS_ERROR: {
      return {
        loading: false,
        error: action.payload,
        users: [],
      };
    }
    default:
      return state;
  }
};
