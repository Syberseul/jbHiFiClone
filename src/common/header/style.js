import styled from "styled-components";

export const HeaderWrapperLine1 = styled.div`
  height: 30px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding-top: 5px;
  background-color: #ffec0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 20px;
  font-size: 15px;
  .__Header__Icon {
    font-size: 20px;
  }
`;

export const StoreFinder = styled.p`
  text-align: center;
  cursor: pointer;
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
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 40px;
  margin-left: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search products",
  type: "search",
})`
  height: 40px;
  width: 100%;
  padding: 5px;
  padding-left: 35px;
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
`;

export const SubIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #555;
  }
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
