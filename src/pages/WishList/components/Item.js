import {
  ItemWrapper,
  UpWrapper,
  Img,
  UpRightWrapper,
  Category,
  Title,
  LowerWrapper,
  Price,
} from "../../Home/components/style";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Item(props) {
  const { title, price, category, image } = props.item;

  return (
    <ItemWrapper>
      <UpWrapper>
        <Img src={image} alt="" />
        <UpRightWrapper>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </UpRightWrapper>
      </UpWrapper>
      <LowerWrapper>
        <Price> ${price}</Price>
        <div className="__Home__AddToWishListWrapper">
          <FavoriteBorderIcon
            className="__Home__AddToWishList"
            // onClick={() => {
            //   addItemToWishList(props.item);
            //   handleClick(color);
            // }}
          />
          <p className="__Home__ToolTip">Add to Wish List</p>
        </div>
        <AddShoppingCartIcon
          className="
        __Home__AddToCart"
          //   onClick={() => addItemToCart(props.item)}
        />
      </LowerWrapper>
    </ItemWrapper>
  );
}

export default Item;
