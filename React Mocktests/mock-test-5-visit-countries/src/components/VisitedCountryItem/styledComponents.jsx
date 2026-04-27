import styled from "styled-components";

export const VisitedCountryItemCon = styled.li`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

export const VisitedCountryImg = styled.img`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`;

export const VisitedCountryText = styled.p`
  color: #ffffff;
  font-size: 1.6rem;
  font-family: "Roboto";
`;

export const VisitedCountryRemoveBtn = styled.button`
  all: unset;

  padding: 0.5em 0.75em;
  border: 1px solid #9b9cac;
  border-radius: 0.5em;
  color: #ffffff;
  font-size: 1.2rem;
  font-family: "Roboto";
  cursor: pointer;
`;
