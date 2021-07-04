import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  userLoggedIn: false,
  userName: "",
});

const UserLogIn = (state, action) => {
  if (action.user !== undefined) {
    return state.merge({
      userLoggedIn: true,
      userName: action.user.displayName,
    });
  }
  return state;
};

const UserLogOut = (state, action) => {
  return state.merge({
    userLoggedIn: false,
    userName: "",
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return UserLogIn(state, action);
    case actionTypes.USER_LOGOUT:
      return UserLogOut(state, action);

    default:
      return state;
  }
};
