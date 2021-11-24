import { useSelector } from "react-redux";
import Spinner from "components/spinner/Spinner";
import "./styles.scss";

function Loading() {
  const { isLoading, messageLoading } = useSelector((state) => state.ui);
  return isLoading ? (
    <div className="modal-page">
      <div className="modal-loading-form">
        <Spinner message={messageLoading || "Loading..."} />
      </div>
    </div>
  ) : (
    false
  );
}

export default Loading;
