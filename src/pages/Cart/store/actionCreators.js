import * as actionTypes from "./actionTypes";

export const decreamentItem = (item) => ({
  type: actionTypes.DECREAMENET_ITEM,
  item,
});

export const increamentItem = (item) => ({
  type: actionTypes.INCREAMENT_ITEM,
  item,
});

export const deleteItem = (item) => ({
  type: actionTypes.DELETE_ITEM,
  item,
});
