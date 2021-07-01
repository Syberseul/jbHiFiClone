import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  items: [],
  itemsInCart: [],
});

const addItemToCart = (state, action) => {
  // console.log(state.toJS().itemsInCart);
  // console.log(action.item);
  // console.log([...state.toJS().itemsInCart, action.item])
  return state.set(
    "itemsInCart",
    fromJS([...state.toJS().itemsInCart, action.item])
  );
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HOME_DATA:
      return state.set("items", action.data);
    case actionTypes.ADD_ITEM_TO_CART:
      // return state.set("itemsInCart", action.item);
      return addItemToCart(state, action);
    default:
      return state;
  }
};
