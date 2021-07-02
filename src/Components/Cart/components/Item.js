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

function Item(props) {
  const { title, price, image, description, amount } = props.item.toJS();
  return (
    <CartItemWrapper>
      <Img src={image} alt="" />
      <MiddleSection>
        <Descriptions>{title}</Descriptions>
        <Descriptions>{description}</Descriptions>
      </MiddleSection>
      <LeftSection>
        <p className="__Item__RemoveButton">Remove</p>
        <QuantityControl>
          <p
            className="__Item__Button"
            onClick={() => props.decreamentItem(props.item.toJS())}
          >
            -
          </p>
          <p className="__Item__Amount">{amount}</p>
          <p
            className="__Item__Button"
            onClick={() => props.increamentItem(props.item.toJS())}
          >
            +
          </p>
        </QuantityControl>
        <p className="__Item__PriceTag">${price}</p>
      </LeftSection>
    </CartItemWrapper>
  );
}

const mapDispatch = (dispatch) => ({
  // ...
  decreamentItem(item) {
    dispatch(actionCreators.decreamentItem(item));
  },
  increamentItem(item) {
    console.log(item);
  },
});

export default connect(null, mapDispatch)(Item);
