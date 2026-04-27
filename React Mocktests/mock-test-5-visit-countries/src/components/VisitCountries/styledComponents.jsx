import styled from "styled-components";

export const MainCon = styled.div`
  min-height: 100vh;
  padding: 1em 4em 2em 4em;
  background-color: #161624;
`;

export const Content = styled.div``;

export const ListedCountriesCon = styled.div`
  margin-bottom: 2em;
`;

export const Subheading = styled.h1`
  color: #ffffff;
  font-size: 2.6rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const ListedCountries = styled.ul`
  height: 45vh;
  padding: 0;
  margin-bottom: 3em;
  border: 2px solid #2e3242;
  border-radius: 1em;
  background-color: #1d1c2b;
  list-style-type: none;
  overflow-y: scroll;
`;

export const VisitedCountriesCon = styled.div``;

export const VisitedCountries = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  gap: 2em;
`;

export const VisitedCountryEmptyCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VisitedCountryEmptyText = styled.p`
  color: #ffffff;
  font-size: 1.4rem;
  font-family: "Roboto";
`;
