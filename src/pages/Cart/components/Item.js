import React from "react";
import { actionCreators } from "../store";

import { connect } from "react-redux";

import {
  CartItemWrapper,
  Img,
  MiddleSection,
  Descriptions,
  LeftSection,
  QuantityControl,
} from "../style";

function Item({ item, deleteItem, decreamentItem, increamentItem }) {
  const { title, price, image, description, amount } = item.toJS();

  return amount > 0 ? (
    <CartItemWrapper>
      <Img src={image} alt="" />
      <MiddleSection>
        <Descriptions>{title}</Descriptions>
        <Descriptions>{description}</Descriptions>
      </MiddleSection>
      <LeftSection>
        <p
          className="__Item__RemoveButton"
          onClick={() => deleteItem(item.toJS())}
        >
          Remove
        </p>
        <QuantityControl>
          <p
            className="__Item__Button"
            onClick={() => decreamentItem(item.toJS())}
          >
            -
          </p>
          <p className="__Item__Amount">{amount}</p>
          <p
            className="__Item__Button"
            onClick={() => increamentItem(item.toJS())}
          >
            +
          </p>
        </QuantityControl>
        <p className="__Item__PriceTag">${(price * amount).toFixed(2)}</p>
      </LeftSection>
    </CartItemWrapper>
  ) : (
    <></>
  );
}

const mapDispatch = (dispatch) => ({
  decreamentItem(item) {
    dispatch(actionCreators.decreamentItem(item));
  },

  increamentItem(item) {
    dispatch(actionCreators.increamentItem(item));
  },

  deleteItem(item) {
    dispatch(actionCreators.deleteItem(item));
  },
});

export default connect(null, mapDispatch)(Item);
