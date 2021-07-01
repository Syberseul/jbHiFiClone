import React from "react";
import { connect } from "react-redux";

import Item from "./components/Item";

function Cart(props) {
  const { items } = props;
  return (
    <div>
      {items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
}

const mapState = (state) => ({
  items: state.getIn(["home", "itemsInCart"]),
});

const mapDispatch = (dispatch) => ({
  // ...
});

export default connect(mapState, mapDispatch)(Cart);
