import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 100vw;
  height: 85vh;
`;

export const UpperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 30px;
  padding-top: 20px;
`;

export const UpSingleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    height: 2.5rem;
    padding: 10px 20px;
    .__SideMenu__Icon {
      margin-right: 20px;
      height: 40px;
    }
  }
  &:hover {
    border-radius: 10px;
    background-color: #ffec0f;
  }
`;

export const LowwerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 30px;
  padding-top: 20px;
  .__SideMenu__Link {
    text-decoration: none;
  }
`;

export const LowSingleWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: #666;
  cursor: pointer;
  .__SideMenu__Icon {
    margin-right: 20px;
    height: 40px;
  }
  &:hover {
    border-radius: 10px;
    background-color: #ffec0f;
    color: #000;
  }
`;
