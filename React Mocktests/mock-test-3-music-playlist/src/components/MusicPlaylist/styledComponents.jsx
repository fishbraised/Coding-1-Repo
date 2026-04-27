import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  height: 40vh;
  padding: 0 6em;
  background-size: cover;
  background-image: url("https://res.cloudinary.com/saiuttej/image/upload/v1747388818/music-playlist-Edsheeran-bg_qemddp.png");
`;

export const ArtistName = styled.h1`
  margin: 0;
  margin-top: 22.5vh;
  color: #ffffff;
  font-size: 3.2rem;
  font-family: "Roboto";
`;

export const ArtistDescription = styled.p`
  margin: 0;
  margin-top: 0.5em;
  color: #ffffff;
  font-size: 2rem;
  font-family: "Roboto";
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 0 4em;
  background-color: #152850;
  overflow-y: scroll;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchHeading = styled.h2`
  color: #ffffff;
  font-size: 2.4rem;
  font-family: "Roboto";
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25em 1em;
  border: 1px solid #cbd5e1;
  border-radius: 0.25em;
`;

export const SearchInput = styled.input`
  all: unset;
  color: #ffffff;
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 1.4rem;
  font-family: "Roboto";
`;

export const SongList = styled.ul`
  padding: 0;
  list-style-type: none;
`;
