import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 4em;
  background-color: #ffbf1f;
`;

export const AppDescription = styled.h1`
  margin-bottom: 2em;
  color: #334155;
  font-size: 3.4rem;
  font-family: "Roboto";
`;

export const AppImage = styled.img`
  align-self: center;
  width: 85%;
  background-image: cover;
`;

export const CountList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 4em;
  background-color: #0f172a;
`;

export const AppTitle = styled.h1`
  color: #ffbf1f;
  font-size: 3.4rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CharacterInput = styled.input`
  flex-grow: 1;
  padding: 0.75em;
  margin-right: 0.5em;
  border: none;
  border-radius: 0.25em;
  font-size: 1.4rem;
`;

export const AddButton = styled.button`
  all: unset;

  padding: 0.75em 1.25em;
  border-radius: 0.25em;
  color: #334155;
  background-color: #ffbf1f;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "Roboto";
  cursor: pointer;
`;
