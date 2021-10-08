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
  const { title, price, image, category } = props.item;

  const { wishList, addItemToCart, addItemToWishList, removeItemFromWishList } =
    props;

  const foundItem = wishList.toJS().find((obj) => obj.title === title);

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
            style={{ color: foundItem ? "red" : "black" }}
            onClick={() => {
              {
                foundItem
                  ? removeItemFromWishList(props.item)
                  : addItemToWishList(props.item);
              }
            }}
          />
          {foundItem ? (
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

const mapState = (state) => ({
  wishList: state.getIn(["wishList", "itemsInWishList"]),
});

const mapDispatch = (dispatch) => ({
  addItemToCart(item) {
    dispatch(actionCreators.addItemToCart(item));
  },

  addItemToWishList(item) {
    dispatch(wishListActionCreators.addItemToWishList(item));
  },

  removeItemFromWishList(item) {
    dispatch(wishListActionCreators.removeFromWishList(item));
  },
});

export default connect(mapState, mapDispatch)(Item);
