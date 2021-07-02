import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import {
  SummaryWrapper,
  SummaryFirstLine,
  WrapperInFirstLine,
  SummaryLastLine,
  WrapperInLastLine,
} from "../style";

function Summary() {
  return (
    <SummaryWrapper>
      <SummaryFirstLine>
        <p className="__Summary__Title">Cart Summary</p>
        <WrapperInFirstLine>
          <LocalShippingIcon />
          <p className="__Summary__Delivery">Delivery estimate?</p>
        </WrapperInFirstLine>
      </SummaryFirstLine>
      <SummaryLastLine>
        <p className="__Summary__Text">Product</p>
        <WrapperInLastLine>
          <p className="__Summary__Text">Quantity</p>
          <p className="__Summary__Text">price</p>
        </WrapperInLastLine>
      </SummaryLastLine>
    </SummaryWrapper>
  );
}

export default Summary;
