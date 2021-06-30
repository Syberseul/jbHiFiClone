import styled from "styled-components";

export const HeaderWrapperLine1 = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding-top: 5px;
  background-color: #ffec0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 20px;
  font-size: 15px;
  .__Header__Icon {
    font-size: 20px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const StoreFinder = styled.p`
  text-align: center;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileText = styled.p`
  text-align: center;
  font-size: 10px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderWrapperLine2 = styled.div`
  height: 70px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  background-color: #ffec0f;
  display: flex;
  align-items: center;
`;

export const NavSearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  .__Header__SearchIcon {
    position: absolute;
    left: 10px;
    @media only screen and (max-width: 768px) {
      left: 30px;
    }
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 40px;
  margin-left: 20px;
  margin-right: 40px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const PCImg = styled.img`
  width: 200px;
  height: 40px;
  margin-left: 20px;
  margin-right: 40px;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search products",
  type: "search",
})`
  height: 40px;
  width: 100%;
  padding: 5px;
  padding-left: 35px;
  border: none;
  border-radius: 5px;
  @media only screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const IconsWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 20px;
  div {
  }
  .__Header__Link {
    text-decoration: none;
    color: #000;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubIconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    color: #555;
  }
`;

export const SubIconText = styled.p`
  cursor: pointer;
`;

export const HeaderWrapperLine3 = styled.div`
  height: 40px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  background-color: #000;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: start;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Line3Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .__Header__Line3Icon {
    font-size: 20px;
    color: #fff;
    padding: 5px;
    margin-left: 20px;
  }
  &:hover {
    background-color: #ffec0f;
  }
  &:hover .__Header__Line3Icon {
    color: #000;
  }
  &:hover .__Header__Line3Text {
    color: #000;
  }
`;

export const Line3Text = styled.div`
  color: #fff;
  margin-right: 20px;
`;
