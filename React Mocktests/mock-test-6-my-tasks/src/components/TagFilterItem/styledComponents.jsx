import styled from "styled-components";

export const TagFilterItemContainer = styled.li`
  margin: 0 1.5em 1.5em 0;
`;

export const TagFilterButton = styled.button`
  all: unset;

  padding: 0.25em 1em;
  border: 1px solid #f3aa4e;
  border-radius: 4em;
  color: #f8f8f8;
  background: ${(props) => (props.$isActive ? "#f3aa4e" : "transparent")};
  font-size: 1.6rem;
  font-family: "Roboto";
  cursor: pointer;
`;
