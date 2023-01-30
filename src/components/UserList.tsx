import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useState, useEffect } from "react";
import { fetchUsers } from "../store/actionCreators/user";
import { store } from "../store";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypeSelector(
    (state) => state.userReducer
  );
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    store.dispatch(fetchUsers);
  }, []);

  if (error) return <h1>Error!</h1>;
  if (loading) return <h1>Loading!</h1>;

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
