import styled from "styled-components";

export const SongItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
`;

export const SongLeftInfoContainer = styled.div`
  display: flex;
  margin: 0;
`;

export const SongImage = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 1em;
  object-fit: cover;
`;

export const SongLeftSubInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2em;
`;

export const SongRightInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SongTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5em;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 400;
  font-family: "Roboto";
`;

export const SongGenre = styled.p`
  margin: 0;
  color: #3b82f6;
  font-size: 1.8rem;
  font-family: "Roboto";
`;

export const SongDuration = styled.p`
  margin-right: 3em;
  color: #ffffff;
  font-size: 1.6rem;
  font-family: "Roboto";
`;

export const DeleteIconButton = styled.button`
  all: unset;

  color: #ffffff;
  font-size: 1.6rem;
  cursor: pointer;
`;
