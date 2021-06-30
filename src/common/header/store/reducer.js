import actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  totalItem: 0,
  loggedIn: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
