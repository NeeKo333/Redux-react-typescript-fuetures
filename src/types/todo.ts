export interface TodoState {
  todo: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
  headers?: any;
}

export enum TodoActionTypes {
  FETCH_TODO = "FETCH_TODO",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchingTodo {
  type: TodoActionTypes.FETCH_TODO;
}
interface FetchingTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODO_SUCCESS;
  payload: any[];
  headers?: any;
}
interface FetchingTodoErrorAction {
  type: TodoActionTypes.FETCH_TODO_ERROR;
  payload: string;
}
interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
  headers?: any;
}

export type TodoAction =
  | FetchingTodo
  | FetchingTodoSuccessAction
  | FetchingTodoErrorAction
  | SetTodoPage;
