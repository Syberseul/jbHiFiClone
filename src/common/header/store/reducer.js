import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  menuOpen: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MENU:
      return state.set("menuOpen", true);
    case actionTypes.CLOSE_MENU:
      return state.set("menuOpen", false);
    default:
      return state;
  }
};
