import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #b0efc5, #e5f9f2);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 10em;
  border-radius: 2em;
  background-color: #0e8188;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.5em;
  color: #ffffff;
  font-size: 3.4rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const Description = styled.p`
  margin: 0;
  margin-bottom: 3em;
  color: #fefec8;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Roboto";
`;

export const PasswordField = styled.input`
  width: 350px;
  padding: 0.25em 0.75em;
  margin-bottom: 1em;
  border: none;
  border-radius: 0.5em;
  color: #475569;
  outline: none;
  font-size: 2.2rem;
`;

export const PasswordRequirements = styled.span`
  padding: 0.5em 1em;
  border-radius: 2em;
  color: #ffffff;
  background-color: #9c3639;
  font-size: 1.4rem;
  font-family: "Roboto";

  box-shadow: 0 0 2px #434451;
`;
