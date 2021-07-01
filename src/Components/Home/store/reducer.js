import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  items: [],
  itemsInCart: [],
  itemsAmount: [],
});

const addItemToCart = (state, action) => {
  const { itemsAmount } = state.toJS();
  itemsAmount[action.index] = itemsAmount[action.index] + 1;
  return state.merge({
    itemsInCart: fromJS([...state.toJS().itemsInCart, action.item]),
    itemsAmount: fromJS(itemsAmount),
  });
};

const updateHomeData = (state, action) => {
  const num = action.data.length;
  return state.merge({
    items: action.data,
    itemsAmount: Array(num).fill(0),
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HOME_DATA:
      return updateHomeData(state, action);
    case actionTypes.ADD_ITEM_TO_CART:
      return addItemToCart(state, action);
    default:
      return state;
  }
};
