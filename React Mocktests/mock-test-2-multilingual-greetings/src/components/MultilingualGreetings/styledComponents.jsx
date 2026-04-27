import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.5em;
  color: #1e293b;
  font-size: 4rem;
  font-family: "Roboto";
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 3em;
`;

export const GreetingButton = styled.button`
  all: unset;

  padding: 0.3em 0.75em;
  border: 1px solid #db1c48;
  border-radius: 5em;
  color: #db1c48;
  font-size: 1.8rem;
  font-family: "Roboto";
  cursor: pointer;

  &:focus {
    color: #ffffff;
    background-color: #db1c48;
  }
`;

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GreetingImage = styled.img`
  height: 250px;
  object-fit: cover;
`;
