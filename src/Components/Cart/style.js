import styled from "styled-components";

export const WrapperWithContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CartItemWrapper = styled.div`
  width: 100%;
  height: 200px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border-bottom: 1px solid #aaa;
`;

export const Img = styled.img`
  width: 10%;
  object-fit: contain;
  padding: 25px 20px;
`;

export const MiddleSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Descriptions = styled.p`
  padding: 0 20px;
  &:first-child {
    font-weight: bold;
    font-size: 1.5rem;
  }
  &:last-child {
    margin-top: 20px;
    font-size: 0.75rem;
    line-height: 1.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const LeftSection = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 90px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  .__Item__RemoveButton {
    font-size: 1.5rem;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
  .__Item__PriceTag {
    font-size: 1.5rem;
  }
`;

export const QuantityControl = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #aaa;
  margin-top: -20px;
  padding: 10px;
  .__Item__Button {
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }
  .__Item__Amount {
    margin: 0 20px;
    font-size: 20px;
  }
  &:hover {
    border: 1px solid #666;
  }
`;

export const EmptyCartWrapper = styled.div`
  width: 100%;
  height: 80vh;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

export const PTag = styled.p`
  &:first-child {
    margin: 25px auto;
  }
  &:last-child {
    font-weight: bold;
    padding: 15px 20px;
    border: 1px solid #000;
    cursor: pointer;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: rgba(200, 200, 200, 0.2);
    }
  }
`;

export const SummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid #aaa;
`;

export const SummaryFirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .__Summary__Title {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 40px 5px;
  }
`;

export const WrapperInFirstLine = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #aaa;
  background-color: #eee;
  box-shadow: 3px 3px rgba(200, 200, 200, 0.2);
  cursor: pointer;
  .__Summary__Delivery {
    padding-left: 10px;
    font-size: 1.2rem;
  }
`;

export const SummaryLastLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    width: 70%;
  }
  .__Summary__Text {
    color: #aaa;
  }
`;

export const WrapperInLastLine = styled.div`
  width: 30%;
  display: flex;
  .__Summary__Text {
    text-align: end;
  }
`;
