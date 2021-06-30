import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";

import Header from "./common/header";
import Home from "./Components/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/wishList" exact>
          My wish list
        </Route>
        <Route path="/login" exact>
          login
        </Route>
        <Route path="/myAccount">my account</Route>
        <Route path="/myCart">my cart</Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
