import { Provider } from "react-redux";

import { store } from "./redux/store";
import Router from "./router/Router";
import "./styles/App.scss";

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
