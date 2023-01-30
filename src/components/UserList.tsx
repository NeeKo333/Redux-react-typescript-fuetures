import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useState, useEffect } from "react";
import { fetchUsers } from "../store/actionCreators/user";
import { fetchTodo } from "../store/actionCreators/todo";
import { store } from "../store";

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useTypeSelector(
    (state) => state.userReducer
  );
  const { todo } = useTypeSelector((state) => state.todoReducer);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    store.dispatch(fetchUsers);
    store.dispatch(fetchTodo(20, 2));
  }, []);

  if (error) return <h1>Error!</h1>;
  if (loading) return <h1>Loading!</h1>;

  console.log(todo);

  return (
    <div>
      <button
        onClick={() =>
          store.dispatch({
            type: "FETCH_USERS_SUCCESS",
            payload: [{ name: Math.random() * 100 }],
          })
        }
      >
        add
      </button>
      <button
        onClick={() => {
          setFetching(!fetching);
        }}
      >
        Get Users from DB
      </button>

      <div>
        {users.map((el, index) => {
          console.log(el.name);
          return <p key={index}>{el.name}</p>;
        })}
      </div>
    </div>
  );
};

export default UserList;
