import React from "react";
import { connect } from "react-redux";

import Item from "./components/Item";
import EmptyCart from "./components/EmptyCart";
import Summary from "./components/Summary";

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
        </div>
      ) : (
        <div>
          <EmptyCart />
        </div>
      )}
    </WrapperWithContent>
  );
}

const mapState = (state) => ({
  items: state.getIn(["home", "itemsInCart"]),
  totalAmount: state.getIn(["home", "totalAmount"]),
});

const mapDispatch = (dispatch) => ({
  // ...
});

export default connect(mapState, mapDispatch)(Cart);
