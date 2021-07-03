import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  itemsInWishList: [],
});

const addItemToWishList = (state, action) => {
  let foundItem = state
    .toJS()
    .itemsInWishList.find((obj) => obj.id === action.item.id);

  if (foundItem === undefined) {
    return state.set(
      "itemsInWishList",
      fromJS([...state.toJS().itemsInWishList, action.item])
    );
  }

  return state;
};

const removeFromWishLish = (state, action) => {
  let foundIndex = state
    .toJS()
    .itemsInWishList.findIndex((i) => i.id === action.item.id);

  return state.merge({
    itemsInWishList: fromJS([
      ...state.toJS().itemsInWishList.slice(0, foundIndex),
      ...state.toJS().itemsInWishList.slice(foundIndex + 1),
    ]),
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      return addItemToWishList(state, action);
    case actionTypes.REMOVE_FROM_WISHLIST:
      return removeFromWishLish(state, action);
    default:
      return state;
  }
};
