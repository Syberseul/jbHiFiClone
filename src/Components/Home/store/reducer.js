import * as actionTypes from "./actionTypes";
import { actionTypes as actionTypesFromItem } from "../../Cart/store";
import { fromJS } from "immutable";

const defaultState = fromJS({
  items: [],
  itemsInCart: [],
  totalAmount: 0,
});

const updateHomeData = (state, action) => {
  for (let i = 0; i < action.data.length; i++) {
    action.data[i].amount = 0;
  }
  return state.set("items", action.data);
};

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
      .setIn(["totalAmount"], fromJS(state.toJS().totalAmount + 1));
  } else {
    action.item.amount = 1;
    return state.merge({
      itemsInCart: fromJS([...state.toJS().itemsInCart, action.item]),
      totalAmount: fromJS(state.toJS().totalAmount + 1),
    });
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HOME_DATA:
      return updateHomeData(state, action);

    case actionTypes.ADD_ITEM_TO_CART:
      return addItemToCart(state, action);

    case actionTypesFromItem.DECREAMENET_ITEM:
      return state;

    default:
      return state;
  }
};
