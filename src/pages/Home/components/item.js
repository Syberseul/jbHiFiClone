import React from "react";
import { connect } from "react-redux";

import { actionCreators } from "../store";
import { actionCreators as wishListActionCreators } from "../../WishList/store";

import {
  ItemWrapper,
  UpWrapper,
  Img,
  UpRightWrapper,
  Category,
  Title,
  LowerWrapper,
  Price,
} from "./style";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Item(props) {
  const { title, price, image, category, inWishList } = props.item;

  const { addItemToCart, addItemToWishList, removeItemFromWishList } = props;

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
            style={{ color: inWishList ? "red" : "black" }}
            onClick={() => {
              {
                inWishList
                  ? removeItemFromWishList(props.item)
                  : addItemToWishList(props.item);
              }
            }}
          />
          {inWishList ? (
            <p className="__Home__ToolTip">Remove from Wish List</p>
          ) : (
            <p className="__Home__ToolTip">Add to Wish List</p>
          )}
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
  addItemToCart(item) {
    dispatch(actionCreators.addItemToCart(item));
  },
  addItemToWishList(item) {
    dispatch(wishListActionCreators.addItemToWishList(item));
  },
  removeItemFromWishList(item) {
    dispatch(wishListActionCreators.removeFromWishLish(item));
  },
});

export default connect(null, mapDispatch)(Item);
