import { useSelector } from "react-redux";
import NewOrUpdateCustomer from "./NewOrUpdate";
import "./styles.scss";

function ModalNewOrUpdate() {
  const { isEditing, isNew } = useSelector((state) => state.customers);

  return isEditing || isNew ? (
    <div className="modal-page">
      <div className="modal-loading-form">
        <NewOrUpdateCustomer />
      </div>
    </div>
  ) : (
    ""
  );
}

export default ModalNewOrUpdate;
