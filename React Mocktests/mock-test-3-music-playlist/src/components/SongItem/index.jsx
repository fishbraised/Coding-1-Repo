import {
  SongItemContainer,
  SongLeftInfoContainer,
  SongImage,
  SongLeftSubInfo,
  SongRightInfoContainer,
  SongTitle,
  SongGenre,
  SongDuration,
  DeleteIconButton,
} from "./styledComponents";

import { FaRegTrashCan } from "react-icons/fa6";

const SongItem = (props) => {
  const { listInfo, deleteSongItem } = props;
  const { id, imageUrl, name, genre, duration } = listInfo;

  // I couldn't get the button id if I clicked on the delete icon, so I had to google what to do.

  const doDeleteSongItem = (event) => {
    event.stopPropagation();

    deleteSongItem(event.currentTarget.id);
  };

  const playlistClicked = () => {
    console.log("Playlist clicked.");
  };

  return (
    <SongItemContainer onClick={playlistClicked}>
      <SongLeftInfoContainer>
        <SongImage src={imageUrl} />

        <SongLeftSubInfo>
          <SongTitle>{name}</SongTitle>
          <SongGenre>{genre}</SongGenre>
        </SongLeftSubInfo>
      </SongLeftInfoContainer>

      <SongRightInfoContainer>
        <SongDuration>{duration}</SongDuration>

        <DeleteIconButton type="button" id={id} onClick={doDeleteSongItem}>
          <FaRegTrashCan />
        </DeleteIconButton>
      </SongRightInfoContainer>
    </SongItemContainer>
  );
};

export default SongItem;
