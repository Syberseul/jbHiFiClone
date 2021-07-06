import React from "react";
import { connect } from "react-redux";
import EmptyWishList from "./components/EmptyWishList";
import SideMenu from "../../common/sideMenu/sideMenu";

import Item from "./components/Item";

import { RecommendWrapper, ItemContainer } from "./style";

function WishList({ wishList, menuOpen }) {
  const wishListLength = wishList.toJS().length;

  return !menuOpen ? (
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
  ) : (
    <SideMenu />
  );
}

const mapState = (state) => ({
  wishList: state.getIn(["wishList", "itemsInWishList"]),
  menuOpen: state.getIn(["header", "menuOpen"]),
});

export default connect(mapState, null)(WishList);
