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
  cursor: pointer;
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
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 20px;
  @media only screen and (max-width: 630px) {
    font-size: 20px;
  }
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
    background-color: white;
    box-shadow: 2px 2px rgba(100, 100, 100, 0.5);
    cursor: default;
    display: none;
    z-index: 1;
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

export const BannerWrapper = styled.div`
  width: 100%;
  min-height: 200px;
`;

export const BannerImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  cursor: pointer;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SubBannerWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    margin-top: 0;
    .__SubBanner__div {
      display: none;
    }
    .__SubBanner__div1 {
      width: 100%;
    }
    .__SubBanner__img {
      width: 100%;
    }
  }
`;
