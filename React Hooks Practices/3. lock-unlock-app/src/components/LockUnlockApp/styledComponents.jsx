import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to right bottom, #20002c, #cbb4d4);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LockStatusImage = styled.img`
  width: 125px;
`;

export const LockStatusText = styled.h1`
  margin-bottom: 3em;
  color: #e2e8f0;
  font-size: 2.6rem;
  font-family: "Roboto";
`;

export const LockStatusButton = styled.button`
  all: unset;

  width: 100px;
  height: 100px;
  outline: 4px solid #06b6d4;
  outline-offset: 0.5em;
  border-radius: 100%;
  color: #ffffff;
  background-color: #06b6d4;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "Roboto";
  cursor: pointer;
  transition: outline-offset 0.1s ease;

  &:active {
    outline-offset: 0;
  }
`;
