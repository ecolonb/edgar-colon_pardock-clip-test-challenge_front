import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { LockClosedIcon } from "@heroicons/react/solid";
import { uiSetloading } from "redux/actions/ui";
import { authSetLoginError, authSetUserLogged } from "redux/actions/auth";
import useForm from "hooks/useForm";
import { loginService } from "services/auth";

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loginError, errorMessage } = useSelector((state) => state.auth);

  const [loginFormValues, handleInputChange] = useForm({
    email: "",
    password: ""
  });

  const handleSubmit = async (event) => {
    dispatch(uiSetloading(true));
    event.preventDefault();
    const resp = await loginService(loginFormValues);

    dispatch(uiSetloading(false));
    if (resp.ok) {
      dispatch(authSetUserLogged(resp.user));
      dispatch(authSetLoginError({ error: false, message: "" }));
      sessionStorage.setItem("token", resp.token);
      return history.push("/customers");
    } else {
      dispatch(authSetLoginError({ error: true, message: resp.message }));
    }
  };

  return (
    <form
      className="mt-8 space-y-6"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            onChange={handleInputChange}
            value={loginFormValues.email}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            name="password"
            type="password"
            onChange={handleInputChange}
            value={loginFormValues.password}
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            minLength="6"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </Link>
        </div>
      </div>
      {loginError && (
        <div className="flex items-center justify-center">
          <p className="font-medium text-red-600">{errorMessage}</p>
        </div>
      )}
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>
    </form>
  );
}
