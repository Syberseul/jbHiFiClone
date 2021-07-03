import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";

import Header from "./common/header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./pages/Account";
import WishList from "./pages/WishList";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/wishList" exact>
          <WishList />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/myAccount">my account</Route>
        <Route path="/myCart">
          <Cart />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
