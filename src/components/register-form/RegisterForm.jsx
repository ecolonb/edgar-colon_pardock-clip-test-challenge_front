import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import useForm from "hooks/useForm";
import { uiSetloading } from "redux/actions/ui";
import { isValidForm } from "validators/register/validateForm";
import { signUpService } from "services/auth";

import { alert } from "components/alert/Alert";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [registerFormValues, handleInputChange] = useForm({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(uiSetloading(true));
    const resp = await signUpService(registerFormValues);
    dispatch(uiSetloading(false));
    if (resp.ok) {
      await alert(
        "Good Job",
        "Registered user successfully",
        "Entrar",
        "success"
      );

      history.push("/login");
    } else {
      const error = resp?.errors?.email.message || "An error has occurred!";
      await alert("Error!", error, "Ok", "error");
    }
  };
  return (
    <div className="font-sans antialiased bg-grey-lightest">
      <div className="w-full bg-grey-lightest pt-16">
        <div className="container mx-auto py-8">
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow"
          >
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
              Register for a free account
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
                    placeholder="Your first name"
                    value={registerFormValues.name}
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
                    name="lastName"
                    type="text"
                    placeholder="Your last name"
                    value={registerFormValues.lastName}
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
                  placeholder="Your email address"
                  value={registerFormValues.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="password"
                  type="password"
                  placeholder="Your secure password"
                  value={registerFormValues.password}
                  onChange={handleInputChange}
                  minLength="6"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  name="confirmedPassword"
                  type="password"
                  placeholder="Your secure password"
                  value={registerFormValues.confirmedPassword}
                  onChange={handleInputChange}
                  minLength="6"
                />
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ".concat(
                    !isValidForm(registerFormValues)
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  )}
                  disabled={isValidForm(registerFormValues) ? false : true}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <p className="text-center my-4">
            <Link
              to="/login"
              className="text-grey-dark text-sm no-underline hover:text-grey-darker"
            >
              I already have an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
