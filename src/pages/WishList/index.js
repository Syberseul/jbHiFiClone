import React from "react";
import { connect } from "react-redux";
import EmptyWishList from "./components/EmptyWishList";

import Item from "./components/Item";

import { RecommendWrapper, ItemContainer } from "./style";

function WishList({ wishList }) {
  const wishListLength = wishList.toJS().length;

  return (
    <RecommendWrapper>
      {wishListLength > 0 ? (
        <ItemContainer>
          {wishList.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
        </ItemContainer>
      ) : (
        <EmptyWishList />
      )}
    </RecommendWrapper>
  );
}

const mapState = (state) => ({
  wishList: state.getIn(["wishList", "itemsInWishList"]),
});

export default connect(mapState, null)(WishList);
