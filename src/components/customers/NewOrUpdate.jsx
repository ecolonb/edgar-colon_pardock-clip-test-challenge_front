import { useSelector, useDispatch } from "react-redux";
import {
  customerSetIsEditingOrNew,
  customerAddNew
} from "redux/actions/customer";
import { isValidForm } from "validators/customers/validateForm";
import useForm from "hooks/useForm";
import { newCustomer, updateCustomer } from "services/customer";
import { uiSetloading } from "redux/actions/ui";
import { alert } from "components/alert/Alert";

export default function NewOrUpdateCustomer() {
  const dispatch = useDispatch();
  const { isEditing, isNew, activeCustomer } = useSelector(
    (state) => state.customers
  );

  const handleClickCancel = () => {
    dispatch(
      customerSetIsEditingOrNew({
        user: undefined,
        isEditing: false,
        isNew: false
      })
    );
  };
  const initialState = {
    name: "",
    last_name: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
    line1: "",
    line2: "",
    postal_code: ""
  };

  const [customerFormValues, handleInputChange] = useForm(
    isNew ? initialState : activeCustomer
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(uiSetloading(true));
    let resp;
    if (isNew) {
      resp = await newCustomer(customerFormValues);
    } else {
      resp = await updateCustomer(activeCustomer.id, customerFormValues);
    }

    dispatch(uiSetloading(false));
    if (resp.ok) {
      handleClickCancel();
      await alert(
        "Good Job",
        `${isNew ? "Registered" : "Updated"} customer successfully`,
        "Ok",
        "success"
      );

      if (isNew) dispatch(customerAddNew(resp.customer));
    } else {
      await alert("Error!", "An error has occurred!", "Ok", "error");
    }
  };

  return (
    <div className="font-sans antialiased bg-grey-lightest">
      <div className="w-full bg-grey-lightest pt-16">
        <div className="container mx-auto py-8">
          <form
            method="POST"
            className="w-full mx-auto bg-white rounded shadow"
            onSubmit={handleSubmit}
          >
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
              {isEditing && "Editing"} {isNew && "New"} Customer
            </div>
            <div className="py-4 px-8">
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="name"
                    type="text"
                    placeholder="Customer first name"
                    value={customerFormValues.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-1/2 ml-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="last_name"
                    type="text"
                    placeholder="Customer last name"
                    value={customerFormValues.last_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="email"
                  type="email"
                  placeholder="Customer email address"
                  value={customerFormValues.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Phonenumber
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="phone_number"
                  type="text"
                  placeholder="Customer phone number"
                  minLength="10"
                  value={customerFormValues.phone_number}
                  onChange={handleInputChange}
                />
              </div>
              <p className="my-8 mx-auto text-center text-gray-600">
                Customer Adress
              </p>
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    Line1
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="line1"
                    type="text"
                    placeholder="Adress line1"
                    value={customerFormValues.line1}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-1/2 ml-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="last_name"
                  >
                    Line2
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="line2"
                    type="text"
                    placeholder="Adress line2"
                    value={customerFormValues.line2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  City
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="city"
                  type="text"
                  placeholder="Customer city"
                  value={customerFormValues.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    State
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="state"
                    type="text"
                    placeholder="Customer State"
                    value={customerFormValues.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-1/2 ml-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="last_name"
                  >
                    Postal code
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="postal_code"
                    type="text"
                    placeholder="Customer postal code"
                    value={customerFormValues.postal_code}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex mb-4 my-8">
                <div className="w-1/2 mr-1">
                  <button
                    className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:bg-gray-500 rounded w-full"
                    type="submit"
                    onClick={handleClickCancel}
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2 ml-1">
                  <button
                    className={"w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ".concat(
                      !isValidForm(customerFormValues)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    )}
                    disabled={isValidForm(customerFormValues) ? false : true}
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
