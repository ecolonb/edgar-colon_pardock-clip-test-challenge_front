import { useDispatch, useSelector } from "react-redux";
import { uiSetloading } from "redux/actions/ui";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui);

  console.log("Isloading: ", isLoading);
  const handleClick = () => {
    console.log("isLoading: ", isLoading, !isLoading);
    dispatch(uiSetloading(!isLoading));
  };
  return (
    <div>
      {JSON.stringify(isLoading)}
      {isLoading ? <p>Loading</p> : <p>Loasing finish</p>}
      <button onClick={handleClick}>setLoading</button>
    </div>
  );
}
