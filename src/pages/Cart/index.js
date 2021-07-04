import React from "react";
import { connect } from "react-redux";

import Item from "./components/Item";
import EmptyCart from "./components/EmptyCart";
import Summary from "./components/Summary";
import SubTotal from "./components/SubTotal";
import SideMenu from "../../common/sideMenu/sideMenu";

import { WrapperWithContent } from "./style";

function Cart(props) {
  const { items, totalAmount, menuOpen } = props;

  if (menuOpen === false) {
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
  } else {
    return <SideMenu />;
  }
}

const mapState = (state) => ({
  menuOpen: state.getIn(["header", "menuOpen"]),
  items: state.getIn(["cart", "itemsInCart"]),
  totalAmount: state.getIn(["cart", "totalAmount"]),
});

export default connect(mapState, null)(Cart);
