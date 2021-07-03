import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  SubTotalWrapper,
  SubTotalFirstLineWrapper,
  SubTotalSecondLineWrapper,
  RightDiv,
  LeftDiv,
} from "../style";

import LockOpenIcon from "@material-ui/icons/LockOpen";

function SubTotal(props) {
  const { totalAmount } = props;

  return (
    <SubTotalWrapper>
      <SubTotalFirstLineWrapper>
        <div>
          <p className="__SubTotal__PriceTag">${totalAmount.toFixed(2)}</p>
          <p className="__SubTotal__GST">GST Included</p>
        </div>
        <div>
          <p className="__SubTotal__PriceTag">Subtotal</p>
          <p className="__SubTotal__Delivery">Excludes Delivery</p>
        </div>
      </SubTotalFirstLineWrapper>
      <SubTotalSecondLineWrapper>
        <RightDiv>
          <LockOpenIcon className="__SubTotal__Icon" />
          <p className="__SubTotal__Checkout">Proceed toCheckout</p>
        </RightDiv>
        <LeftDiv>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <p className="__SubTotal__BackToShopping"> Continue Shopping </p>
          </Link>
        </LeftDiv>
      </SubTotalSecondLineWrapper>
    </SubTotalWrapper>
  );
}

const mapState = (state) => ({
  totalAmount: state.getIn(["cart", "totalPrice"]),
});

export default connect(mapState, null)(SubTotal);
