import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import LoginPage from "pages/login/Login";
import RegisterPage from "pages/register/Register";
import CustomersPage from "pages/customers/Customers";
import NotFound from "pages/not-found/NotFound";

function Router() {
  const history = useHistory();
  console.log("history: ", history);
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/customers" component={CustomersPage} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default Router;
