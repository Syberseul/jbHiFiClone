import * as actionTypes from "./actionTypes";

export const toggleMenuOpen = () => ({
  type: actionTypes.OPEN_MENU,
});

export const toggleMenuClose = () => ({
  type: actionTypes.CLOSE_MENU,
});
