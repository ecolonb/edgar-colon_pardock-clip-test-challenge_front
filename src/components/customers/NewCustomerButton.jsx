import React from "react";
import { useDispatch } from "react-redux";
import { customerSetIsEditingOrNew } from "redux/actions/customer";
import { PlusIcon } from "@heroicons/react/solid";

export default function NewCustomerButton() {
  const dispatch = useDispatch();

  const handleClickNew = () => {
    dispatch(
      customerSetIsEditingOrNew({
        user: {
          name: "",
          email: "",
          last_name: "",
          address: {
            city: "",
            state: "",
            line1: "",
            line2: "",
            postal_code: "",
            country_code: "MX"
          },
          phone_number: ""
        },
        isEditing: false,
        isNew: true
      })
    );
  };

  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 fab"
      onClick={handleClickNew}
    >
      <PlusIcon
        className="h-8 w-8 text-white group-hover:text-white"
        aria-hidden="true"
      />
    </button>
  );
}
