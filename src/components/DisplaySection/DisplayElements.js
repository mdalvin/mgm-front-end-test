import styled from "styled-components";

export const DisplayContainer = styled.div`
  height: 1700px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 50px;
`;

export const DisplayWrapper = styled.div`
  height: 1700px;
  padding-top: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
`;

export const DisplayCard = styled.div`
  height: 150px;
  width: 150px;
  cursor: pointer;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const DisplayTextWrapper = styled.div`
  height: 150px;
  width: 150px;
  cursor: pointer;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    transform: 0.2s all ease-in-out;
    display: none;
  }
`;

export const DisplayText = styled.p`
    font-size: 12px;
    padding: 20px 20px;
    font-weight: 500;
    color: #222
    place-items: center;
`;