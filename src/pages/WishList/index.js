import React from "react";
import { connect } from "react-redux";

import Item from "./components/Item";

function WishList(props) {
  const { wishList } = props;

  return (
    <div>
      {wishList.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
}

const mapState = (state) => ({
  wishList: state.getIn(["wishList", "itemsInWishList"]),
});

export default connect(mapState, null)(WishList);
