import styled from "styled-components";

export const ActionItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin-right: 2em;

  cursor: pointer;
`;

export const ActionButton = styled.button`
  all: unset;

  padding-right: 1em;
  color: ${(props) =>
    props.isActiveActionStyling ? "#2563EB" : "rgb(100, 116, 139)"};
`;

export const ActionText = styled.p`
  color: ${(props) =>
    props.isActiveActionStyling ? "#2563EB" : "rgb(100, 116, 139)"};
  font-size: 1.4rem;
  font-family: "Roboto";
`;
