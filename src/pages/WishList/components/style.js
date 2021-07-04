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

export const UpperWrapper = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;
