import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  items: [],
});

const updateHomeData = (state, action) => {
  for (let i = 0; i < action.data.length; i++) {
    action.data[i].amount = 0;
  }
  return state.set("items", action.data);
};

const addItemToWishLista = (state, action) => {
  let foundIndex = state.toJS().items.findIndex((i) => i.id === action.item.id);
  return state.setIn(["items", `${foundIndex}`, "inWishList"], true);
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HOME_DATA:
      return updateHomeData(state, action);
    default:
      return state;
  }
};
