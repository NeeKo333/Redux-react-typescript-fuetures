import { TodoState, TodoAction, TodoActionTypes } from "../../types/todo";

const initialState: TodoState = {
  todo: [],
  loading: false,
  error: null,
  page: 0,
  limit: 10,
  headers: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO: {
      return {
        todo: [],
        loading: true,
        error: null,
        page: state.page,
        limit: state.limit,
      };
    }
    case TodoActionTypes.FETCH_TODO_SUCCESS: {
      return {
        todo: [...state.todo, ...action.payload],
        loading: false,
        error: null,
        page: state.page,
        limit: state.limit,
        headers: action.headers,
      };
    }
    case TodoActionTypes.FETCH_TODO_ERROR: {
      return { todo: [], loading: false, error: "Error!", page: 0, limit: 0 };
    }
    case TodoActionTypes.SET_TODO_PAGE: {
      console.log("ewqeqw");
      return {
        todo: [...state.todo],
        loading: false,
        error: null,
        page: action.payload,
        limit: state.limit,
        headers: { ...state.headers },
      };
    }
    default:
      return state;
  }
};
