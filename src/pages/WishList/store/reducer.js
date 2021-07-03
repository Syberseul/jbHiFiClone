import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  itemsInWishList: [],
});

const addItemToWishList = (state, action) => {
  let foundItem = state
    .toJS()
    .itemsInWishList.find((obj) => obj.id === action.item.id);

  console.log(action.inWishList);

  if (foundItem === undefined) {
    return state.set("itemsInWishList", [
      ...state.toJS().itemsInWishList,
      action.item,
    ]);
  }

  return state;
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      return addItemToWishList(state, action);
    default:
      return state;
  }
};
