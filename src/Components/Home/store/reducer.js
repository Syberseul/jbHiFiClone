import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  items: [],
  itemsInCart: [],
});

const addItemToCart = (state, action) => {
  action.item.amount++;

  // if (
  //   state.toJS().itemsInCart.find((obj) => obj.id === action.index) ===
  //   undefined
  // ) {
  //   return state.merge({
  //     itemsInCart: fromJS([...state.toJS().itemsInCart, action.item]),
  //   });
  // } else {
  //   // console.log(
  //   //   state.toJS().itemsInCart.find((obj) => obj.id === action.index).amount
  //   // );
  //   // console.log(`this is ${action.index - 1}`);
  //   // delete state.toJS().itemsInCart[action.index - 1];
  //   // console.log("a");
  //   // console.log(state.getIn(["itemsInCart"]));
  //   console.log(state.getIn(["itemsInCart", 0]));
  //   return state;
  // }
  if (
    state.toJS().itemsInCart.find((obj) => obj.id === action.index) !==
    undefined
  ) {
    console.log("111");
    return state.merge({
      itemsInCart: fromJS(
        state.setIn(
          [
            state.toJS().itemsInCart.find((obj) => obj.id === action.index) !==
              undefined,
          ],
          state.toJS().itemsInCart[action.index - 1].amount + 1
        )
      ),
    });
  } else {
    console.log("222");
    return state.merge({
      itemsInCart: fromJS([...state.toJS().itemsInCart, action.item]),
    });
  }
};

const updateHomeData = (state, action) => {
  for (let i = 0; i < action.data.length; i++) {
    action.data[i].amount = 0;
  }
  return state.set("items", action.data);
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
