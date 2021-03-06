import { combineReducers } from "redux-immutable";

import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/Home/store";
import { reducer as cartReducer } from "../pages/Cart/store";
import { reducer as wishListReducer } from "../pages/WishList/store";
import { reducer as AccountReducer } from "../pages/Account/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  cart: cartReducer,
  wishList: wishListReducer,
  account: AccountReducer,
});

export default reducer;
