import React from "react";
import { connect } from "react-redux";

function Amount(props) {
  const { itemsAmount, index, item } = props;

  const string = JSON.stringify(itemsAmount);

  let num = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) num += string[i];
  }
  num = parseInt(num);
  console.log(num.length);

  //   const res = [];

  //   for (let i = 0;)

  return <div>{num}</div>;
}

const mapState = (state) => ({
  itemsAmount: state.getIn(["home", "itemsAmount"]),
});

export default connect(mapState, null)(Amount);
