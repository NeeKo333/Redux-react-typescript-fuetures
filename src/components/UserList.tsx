import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useTypeSelector(
    (state) => state.userReducer
  );
  console.log(users);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: "FETCH_USERS_SUCCESS", payload: "Max" })
        }
      >
        add
      </button>
      <div>
        {users.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
