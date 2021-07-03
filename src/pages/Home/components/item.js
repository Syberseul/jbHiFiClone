import React, { useState } from "react";
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

  const { wishList, addItemToCart, addItemToWishList } = props;

  const [color, setColor] = useState("black");
  const [itemInWishList, setItemInWishList] = useState(false);

  const handleClick = () => {
    const foundItem = wishList.find((obj) => obj.title === title);

    if (foundItem === undefined) {
      setColor("red");
      setItemInWishList(true);
    } else {
      setColor("black");
      setItemInWishList(false);
    }
  };

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
            style={{ color: color }}
            onClick={() => {
              addItemToWishList(props.item, itemInWishList);
              handleClick();
            }}
          />
          <p className="__Home__ToolTip">Add to Wish List</p>
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
  addItemToWishList(item, itemInWishList) {
    dispatch(wishListActionCreators.addItemToWishList(item, itemInWishList));
  },
});

export default connect(mapState, mapDispatch)(Item);
