import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5d0fe;
`;

export const Form = styled.form`
  padding: 4em 5em;
  border-radius: 1em;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  margin-top: 0;
  text-align: center;
  color: #000000;
  font-size: 2.4rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextInput = styled.input`
  padding: 0.5em 0.75em;
  outline: none;
  border: 1px solid #cbd2d9;
  font-family: "Roboto";
`;

export const SavedText = styled.p`
  text-align: center;
  color: #000000;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const InteractionButton = styled.button`
  padding: 0.5em 0.75em;
  margin-left: 0.5em;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 0.25em;
  color: #ffffff;
  background-color: #d946ef;
`;
