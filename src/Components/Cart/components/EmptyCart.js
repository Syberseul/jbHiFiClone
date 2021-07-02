import { EmptyCartWrapper, PTag } from "../style";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <EmptyCartWrapper>
      <PTag>There are no items in your cart</PTag>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <PTag>Continue Shopping</PTag>
      </Link>
    </EmptyCartWrapper>
  );
}

export default EmptyCart;
