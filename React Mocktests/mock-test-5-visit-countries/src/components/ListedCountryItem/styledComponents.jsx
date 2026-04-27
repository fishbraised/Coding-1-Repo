import styled from "styled-components";

export const ListedCountryItemCon = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 2.5em;
  border-bottom: 2px solid #2e3242;
  background-color: #1d1c2b;

  &:last-child {
    border-bottom: none;
  }
`;

export const ListedCountryText = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  font-family: "Roboto";
`;

export const ListedCountryVisitBtn = styled.button`
  all: unset;

  padding: 0.5em 1.5em;
  border-radius: 0.25em;
  color: ${(props) => (props.isVisited ? "#899499" : "#ffffff")};
  background-color: ${(props) => (props.isVisited ? "transparent" : "#2784e8")};
  font-size: 1.4rem;
  font-family: "Roboto";
  cursor: pointer;
`;
