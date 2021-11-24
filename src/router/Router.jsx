import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";
import CustomersPage from "pages/Customers";

function Router() {
  const history = useHistory();
  console.log("history: ", history);
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/customers" component={CustomersPage} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default Router;
