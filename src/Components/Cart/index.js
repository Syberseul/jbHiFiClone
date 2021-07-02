import React from "react";
import { connect } from "react-redux";

import Item from "./components/Item";
import EmptyCart from "./components/EmptyCart";
import Summary from "./components/Summary";

import { WrapperWithContent } from "./style";

function Cart(props) {
  const { items } = props;
  return (
    <WrapperWithContent>
      {items.toJS().length > 0 ? (
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
});

const mapDispatch = (dispatch) => ({
  // ...
});

export default connect(mapState, mapDispatch)(Cart);
