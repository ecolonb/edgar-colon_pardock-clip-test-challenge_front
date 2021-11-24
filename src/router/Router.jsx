import { Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "pages/login/Login";
import RegisterPage from "pages/register/Register";
import CustomersPage from "pages/customers/Customers";
import NotFound from "pages/not-found/NotFound";
import Navbar from "components/navbar/Navbar";
import Loading from "components/loading/Loading";
import PrivateRoute from "router/PrivateRoute";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route
          path="/"
          exact
          render={() => <PrivateRoute component={CustomersPage} />}
        />
        <Route
          path="/customers"
          exact
          render={() => <PrivateRoute component={CustomersPage} />}
        />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      <Loading show={true} message="Loading..." />
    </>
  );
}

export default Router;
