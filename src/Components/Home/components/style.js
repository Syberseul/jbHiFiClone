import styled from "styled-components";

export const ItemWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid #bbb;
  margin: 20px auto;
  height: 220px;
  @media only screen and (max-width: 630px) {
    width: 100%;
  }
  @media only screen and (min-width: 700px) {
    width: 40%;
  }
  @media only screen and (min-width: 1000px) {
    width: 20%;
  }
`;

export const UpWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px 20px;
`;

export const UpRightWrapper = styled.div`
  margin: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const Category = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  line-height: 30px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media only screen and (max-width: 630px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 700px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1000px) {
    font-size: 10px;
  }
`;

export const LowerWrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: #ffec0f;
  position: relative;
  .__Home__AddToWishListWrapper {
    &:hover {
      .__Home__ToolTip {
        display: block;
      }
    }
  }
  .__Home__AddToWishList {
    position: absolute;
    right: 50px;
    top: 0;
    width: 30px;
    height: 30px;
    padding: 10px;
    background-color: #fff;
    &:hover {
      color: #cd0000;
      cursor: pointer;
    }
  }
  .__Home__AddToCart {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #333;
    }
  }
  .__Home__ToolTip {
    position: absolute;
    right: 20px;
    top: -40px;
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 10px;
    box-shadow: 2px 2px rgba(100, 100, 100, 0.5);
    cursor: default;
    display: none;
  }
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: red;
  position: absolute;
  top: -15px;
  left: 15px;
  border: 1px solid #000;
  padding: 8px;
  background-color: #ffec0f;
  box-shadow: 2px 2px rgba(0, 0, 0, 1);
`;
