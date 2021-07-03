import * as actionTypes from "./actionTypes";

export const addItemToWishList = (item, inWishList) => ({
  type: actionTypes.ADD_TO_WISHLIST,
  item,
  inWishList,
});
