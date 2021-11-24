import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  customerSetAllItems,
  customerSetIsEditingOrNew
} from "redux/actions/customer";
import { getAllCustomers } from "services/customer";
import NewCustomerButton from "components/customers/NewCustomerButton";
import ModalNewOrUpdate from "./Modal";

import "./styles.scss";

export default function Customers() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { customersList } = useSelector((state) => state.customers);
  useEffect(() => {
    const getData = async () => {
      const data = await getAllCustomers();
      if (data.ok) dispatch(customerSetAllItems(data.items));
      else if (data?.message === "Bad token") {
        history.push("/login");
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (customer) => {
    dispatch(
      customerSetIsEditingOrNew({
        user: { ...customer, ...customer.address },
        isEditing: true,
        isNew: false
      })
    );
  };

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:my-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 my-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Address
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phonenumber
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {customersList.map((customer) => (
                    <tr key={customer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {customer.name} {customer.last_name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {customer.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {customer.address.line1}
                        </div>
                        <div className="text-sm text-gray-500">
                          {customer.address.line2 ? ", " : ""}
                          {customer.address.state}, {customer.address.city},{" "}
                          {customer.address.postal_code}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.phone_number}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleEdit(customer)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <NewCustomerButton />
      <ModalNewOrUpdate />
    </>
  );
}
