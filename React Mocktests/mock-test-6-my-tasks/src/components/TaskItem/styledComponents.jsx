import styled from "styled-components";

export const TaskItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 3em;
  margin-bottom: 1.5em;
  background-color: #1a171d;
`;

export const TaskText = styled.p`
  color: #f8f8f8;
  font-size: 1.8rem;
  font-family: "Roboto";
`;

export const TaskTag = styled.span`
  padding: 0.375em 1.25em;
  border-radius: 4em;
  color: #1a171d;
  background-color: #f3aa4e;
  font-size: 1.6rem;
  font-family: "Roboto";
`;
