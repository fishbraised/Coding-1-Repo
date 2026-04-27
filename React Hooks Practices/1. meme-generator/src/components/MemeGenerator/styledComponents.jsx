import styled from "styled-components";

export const MemeGeneratorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 4em 14em;
  background-color: #d32f2f;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const MainTitle = styled.h1`
  margin-top: 0;
  color: #ffeb3b;
  font-size: 3.6rem;
  font-family: "Open Sans";
`;

export const FormLabel = styled.label`
  margin-bottom: 0.75em;
  color: #ffeb3b;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: "Open Sans";
`;

export const FormInput = styled.input`
  padding: 0.75em;
  margin-bottom: 1.5em;
  border: none;
  border-radius: 0.25em;
  outline: none;
`;

export const FormSelect = styled.select`
  padding: 0.75em;
  margin-bottom: 1.875em;
  border: none;
  border-radius: 0.25em;
  outline: none;
  cursor: pointer;
`;

export const FormOption = styled.option``;

export const FormSubmitButton = styled.button`
  align-self: flex-start;
  padding: 0.625em 2em;
  border: none;
  border-radius: 0.25em;
  outline: none;
  cursor: pointer;
  background-color: #ffeb3b;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "Open Sans";
`;

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  margin-top: 5em;
  background-size: cover;
  background-image: url(${(props) =>
    props.$imageUrl !== ""
      ? props.$imageUrl
      : "https://cdn-icons-png.flaticon.com/512/1933/1933453.png"});
`;

export const MemeTopText = styled.p`
  margin-top: 1em;
  margin-bottom: auto;
  text-align: center;
  color: #ffffff;
  font-size: ${(props) => props.$fontSize}px;
`;

export const MemeBottomText = styled.p`
  margin-bottom: 1em;
  text-align: center;
  color: #ffffff;
  font-size: ${(props) => props.$fontSize}px;
`;
