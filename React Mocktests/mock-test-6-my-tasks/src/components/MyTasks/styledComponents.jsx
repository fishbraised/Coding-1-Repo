import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LeftContent = styled.div`
  width: 40%;
  padding: 4em;
  background-color: #1a171d;
`;

export const MainTitle = styled.h1`
  color: #f3aa4e;
  font-size: 3.2rem;
  font-family: "Roboto";
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.25em;
  color: #f8f8f8;
  font-size: 2.2rem;
  font-family: "Roboto";
`;

export const FormField = styled.input`
  padding: 0.5em 1em;
  margin-bottom: 1em;
  border: none;
  border-radius: 0.25em;
  outline: none;
  font-size: 1.6rem;
  font-family: "Roboto";
`;

export const FormSelect = styled.select`
  padding: 0.5em 1em;
  margin-bottom: 2em;
  border: none;
  border-radius: 0.25em;
  outline: none;
  font-size: 1.6rem;
  font-family: "Roboto";
  cursor: pointer;
`;

export const FormOption = styled.option``;

export const AddButton = styled.button`
  all: unset;

  align-self: center;
  padding: 0.5em 1em;
  border-radius: 0.25em;
  color: #f8f8f8;
  background-color: #f3aa4e;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "Roboto";
  cursor: pointer;
`;

export const RightContent = styled.div`
  width: 60%;
  padding: 2.5em 4em;
  background-color: #131213;
`;

export const SubTitle = styled.h2`
  margin-top: 0;
  color: #f8f8f8;
  font-size: 2.6rem;
  font-family: "Roboto";
`;

export const TagsFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

export const NoTasksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  border: 4px solid green;
`;

export const NoTasksText = styled.p`
  color: #f1f5f9;
  font-size: 2.6rem;
  font-family: "Roboto";
`;

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  height: 60vh;
  padding: 0;
  overflow-y: auto;

  border: 2px solid green;
`;
