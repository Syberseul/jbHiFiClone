import React from "react";
import { connect } from "react-redux";

import Item from "./components/Item";
import EmptyCart from "./components/EmptyCart";
import Summary from "./components/Summary";
import SubTotal from "./components/SubTotal";

import { WrapperWithContent } from "./style";

function Cart(props) {
  const { items, totalAmount } = props;
  return (
    <WrapperWithContent>
      {totalAmount > 0 ? (
        <div>
          <Summary />
          {items.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
          <SubTotal />
        </div>
      ) : (
        <EmptyCart />
      )}
    </WrapperWithContent>
  );
}

const mapState = (state) => ({
  items: state.getIn(["cart", "itemsInCart"]),
  totalAmount: state.getIn(["cart", "totalAmount"]),
});

const mapDispatch = (dispatch) => ({
  // ...
});

export default connect(mapState, mapDispatch)(Cart);
