import { EmptyCartWrapper, PTag } from "../../Cart/style";
import { Link } from "react-router-dom";

function EmptyWishList() {
  return (
    <EmptyCartWrapper>
      <PTag>There are no items in your wish list</PTag>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <PTag>Back to Shopping</PTag>
      </Link>
    </EmptyCartWrapper>
  );
}

export default EmptyWishList;
