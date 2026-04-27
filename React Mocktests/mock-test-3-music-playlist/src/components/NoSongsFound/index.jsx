import {
  NoSongsFoundContainer,
  NoSongsFoundImage,
  NoSongsFoundText,
} from "./styledComponents";

const NoSongsFound = () => {
  return (
    <NoSongsFoundContainer>
      <NoSongsFoundImage src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1733842144/Jobby%20App/folder-not-found.png" />
      <NoSongsFoundText>No songs found.</NoSongsFoundText>
    </NoSongsFoundContainer>
  );
};

export default NoSongsFound;
