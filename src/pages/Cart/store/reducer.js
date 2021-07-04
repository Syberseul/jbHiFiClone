import * as actionTypes from "./actionTypes";
import { actionTypes as actionTypesFromHome } from "../../Home/store";
import { actionTypes as actionTypesFromWishlist } from "../../WishList/store";
import { fromJS } from "immutable";

const defaultState = fromJS({
  itemsInCart: [],
  totalAmount: 0,
  totalPrice: 0,
});

const addItemToCart = (state, action) => {
  let foundIndex = state
    .toJS()
    .itemsInCart.findIndex((i) => i.id === action.item.id);
  let foundItem = state
    .toJS()
    .itemsInCart.find((obj) => obj.id === action.item.id);

  if (foundItem !== undefined) {
    return state
      .setIn(["itemsInCart", `${foundIndex}`, "amount"], foundItem.amount + 1)
      .setIn(["totalAmount"], fromJS(state.toJS().totalAmount + 1))
      .setIn(
        ["totalPrice"],
        fromJS(state.toJS().totalPrice + action.item.price)
      );
  } else {
    action.item.amount = 1;
    return state.merge({
      itemsInCart: fromJS([...state.toJS().itemsInCart, action.item]),
      totalAmount: fromJS(state.toJS().totalAmount + 1),
      totalPrice: fromJS(state.toJS().totalPrice + action.item.price),
    });
  }
};

const removeItemFromCart = (state, action) => {
  let foundIndex = state
    .toJS()
    .itemsInCart.findIndex((i) => i.id === action.item.id);
  let foundItem = state
    .toJS()
    .itemsInCart.find((obj) => obj.id === action.item.id);

  if (foundItem.amount > 1) {
    return state
      .setIn(
        ["itemsInCart", `${foundIndex}`, "amount"],
        fromJS(foundItem.amount - 1)
      )
      .merge({
        totalAmount: fromJS(state.toJS().totalAmount - 1),
        totalPrice: fromJS(state.toJS().totalPrice - action.item.price),
      });
  } else {
    return state
      .setIn(
        ["itemsInCart", `${foundIndex}`, "amount"],
        fromJS(foundItem.amount - 1)
      )
      .merge({
        totalAmount: fromJS(state.toJS().totalAmount - 1),
        totalPrice: fromJS(state.toJS().totalPrice - action.item.price),
        itemsInCart: fromJS([
          ...state.toJS().itemsInCart.slice(0, foundIndex),
          ...state.toJS().itemsInCart.slice(foundIndex + 1),
        ]),
      });
  }
};

const deleteItemFromCart = (state, action) => {
  let foundIndex = state
    .toJS()
    .itemsInCart.findIndex((i) => i.id === action.item.id);
  let foundItem = state
    .toJS()
    .itemsInCart.find((obj) => obj.id === action.item.id);

  return state.merge({
    totalAmount: fromJS(state.toJS().totalAmount - foundItem.amount),
    totalPrice: fromJS(
      state.toJS().totalPrice - foundItem.amount * foundItem.price
    ),
    itemsInCart: fromJS([
      ...state.toJS().itemsInCart.slice(0, foundIndex),
      ...state.toJS().itemsInCart.slice(foundIndex + 1),
    ]),
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INCREAMENT_ITEM:
    case actionTypesFromHome.ADD_ITEM_TO_CART:
    case actionTypesFromWishlist.ADD_TO_CART:
      return addItemToCart(state, action);

    case actionTypes.DECREAMENET_ITEM:
      return removeItemFromCart(state, action);

    case actionTypes.DELETE_ITEM:
      return deleteItemFromCart(state, action);
    default:
      return state;
  }
};
