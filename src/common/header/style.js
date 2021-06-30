import styled from "styled-components";

export const HeaderWrapperLine1 = styled.div`
  height: 30px;
  width: 100%;
  background-color: #ffec0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .__Header__Line1 {
    display: flex;
    align-items: center;
    margin: 5px 20px;
    font-size: 15px;
    .__Header__Icon {
      font-size: 20px;
    }
  }
`;

export const StoreFinder = styled.p`
  text-align: center;
  cursor: pointer;
`;

export const HeaderWrapperLine2 = styled.div`
  height: 70px;
  width: 100%;
  background-color: #ffec0f;
  display: flex;
  align-items: center;
  .__Header__Logo {
    width: 200px;
    height: 40px;
    margin-left: 20px;
    margin-right: 40px;
    cursor: pointer;
  }
  .__Header__SearchIcon {
    margin-left: -210px;
    margin-right: 220px;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search products",
  type: "search",
})`
  height: 40px;
  padding: 10px;
  padding-left: 35px;
`;

export const IconsWrapper = styled.div`
  width: 100%;
  padding-right: 20px;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: #555;
    }
  }
  .__Header__Link {
    text-decoration: none;
    color: #000;
  }
`;
