import styled from "styled-components";

export const WrapperWithContent = styled.div`
  width: 100%;
  height: 80vh;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2.5rem;
    font-weight: bold;
  }
  button {
    margin-top: 4rem;
    padding: 10px 25px;
    font-size: 1.5rem;
    font-style: italic;
    cursor: pointer;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
      box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
    }
  }
`;

// div > form > ul > li > button > span + span + span
export const LogInContainer = styled.div``;
