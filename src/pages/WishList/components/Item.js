import React from "react";
import { connect } from "react-redux";

import { actionCreators } from "../store";
import { actionCreators as cartActionCreators } from "../../Home/store";

import {
  ItemWrapper,
  UpWrapper,
  Img,
  UpRightWrapper,
  Category,
  Title,
  LowerWrapper,
  Price,
} from "../../Home/components/style";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Item(props) {
  const { title, price, category, image } = props.item;

  const { removeFromWishLish, addItemToCart } = props;

  return (
    <ItemWrapper>
      <UpWrapper>
        <Img src={image} alt="" />
        <UpRightWrapper>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </UpRightWrapper>
      </UpWrapper>
      <LowerWrapper>
        <Price> ${price}</Price>
        <div className="__Home__AddToWishListWrapper">
          <FavoriteBorderIcon
            className="__Home__AddToWishList"
            style={{ color: "red" }}
            onClick={() => {
              removeFromWishLish(props.item);
            }}
          />
          <p className="__Home__ToolTip">Remove from Wish List</p>
        </div>
        <AddShoppingCartIcon
          className="
        __Home__AddToCart"
          onClick={() => addItemToCart(props.item)}
        />
      </LowerWrapper>
    </ItemWrapper>
  );
}

const mapDispatch = (dispatch) => ({
  removeFromWishLish(item) {
    dispatch(actionCreators.removeFromWishLish(item));
  },
  addItemToCart(item) {
    dispatch(cartActionCreators.addItemToCart(item));
  },
});

export default connect(null, mapDispatch)(Item);
