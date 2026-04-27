import {
  MainContainer,
  Header,
  ArtistName,
  ArtistDescription,
  MainContent,
  SearchContainer,
  SearchHeading,
  SearchBox,
  SearchInput,
  SearchIconContainer,
  SongList,
} from "./styledComponents";

import NoSongsFound from "../NoSongsFound";
import SongItem from "../SongItem";

import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";

const initialTracksList = [
  {
    id: "3b22e3fd-3d12-4ad1-9e38-90314219c4f4",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389134/music-playlist-perfect-img_wxlkhb.png",
    name: "Perfect",
    genre: "Pop",
    duration: "4:04",
  },
  {
    id: "40f97965-ff45-469e-a635-b2ef9f1642ed",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389160/music-playlist-shape-of-you-img_uomvrf.png",
    name: "Shape of You",
    genre: "Divide",
    duration: "4:24",
  },
  {
    id: "782f916b-4056-44ec-a95f-5115c3f84904",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389188/music-playlist-visiting-hours_snswqm.png",
    name: "Visiting Hours",
    genre: "Folk-Pop",
    duration: "3:49",
  },
  {
    id: "fcf0dc77-3427-457c-9ee0-91b1dc39fece",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389269/music-playlist-shivers-img_kqp1vo.png",
    name: "Shivers",
    genre: "Dance-Pop",
    duration: "3:58",
  },
  {
    id: "9c1bb890-d4d5-4edf-9d95-6959d716b442",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389296/music-playlist-bad-habits-img_ntybv5.png",
    name: "Bad Habits",
    genre: "Dance-Pop",
    duration: "4:01",
  },
  {
    id: "2216db9c-647f-4814-b880-179740e4d748",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389321/music-playlist-castle-on-the-hill-img_o4kqcm.png",
    name: "Castle on the Hill",
    genre: "Pop&Rock",
    duration: "4:48",
  },
  {
    id: "a5e30966-b760-4660-bf08-073135f7d010",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389347/music-playlist-happier-img_yzbiod.png",
    name: "Happier",
    genre: "Pop",
    duration: "3:36",
  },
  {
    id: "2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389371/music-playlist-photograph-img_kf2grs.png",
    name: "Photograph",
    genre: "Folk music",
    duration: "4:26",
  },
  {
    id: "efd3d621-2c05-4941-acdc-0a1a0786bc53",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389395/music-playlist-galway-girl-img_lpmvll.png",
    name: "Galway Girl",
    genre: "Pop",
    duration: "3:20",
  },
  {
    id: "e4b8e3b8-7776-4c09-8abc-ba328a8babe9",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747389412/music-playlist-i-dont-care-img_icawe9.jpg",
    name: "I Don't Care",
    genre: "Pop",
    duration: "3:38",
  },
];

const MusicPlaylist = () => {
  const [songInput, setSongInput] = useState("");
  const [tracksList, setTracksList] = useState(initialTracksList);

  // const updateSongInput = (event) => {
  //   this.setState({songInput: event.target.value}, filterData)
  //   // filter logic (NO)
  // }

  const updateSongInput2 = (event) => {
    setSongInput(event.target.value);
    const filteredTrackList = initialTracksList.filter((eachObj) => {
      return eachObj.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setTracksList(filteredTrackList);
  };

  // const updateSongInput = (event) => setSongInput(event.target.value);

  const deleteSongItem = (id) => {
    const filteredTrackList = tracksList.filter((eachObj) => eachObj.id !== id);
    setTracksList(filteredTrackList);
  };

  // I googled up the error about useEffect dependencies to figure out what it was.

  // useEffect(() => {
  //   const filteredTrackList = initialTracksList.filter((eachObj) => {
  //     return eachObj.name.toLowerCase().includes(songInput.toLowerCase());
  //   });

  //   setTracksList(filteredTrackList);
  // }, [songInput]);

  return (
    <MainContainer>
      <Header>
        <ArtistName>Ed Sheeran</ArtistName>
        <ArtistDescription>Singer</ArtistDescription>
      </Header>

      <MainContent>
        <SearchContainer>
          <SearchHeading>Songs Playlist</SearchHeading>

          <SearchBox>
            <SearchInput
              placeholder="Search a song"
              onChange={updateSongInput2}
              value={songInput}
            />

            <SearchIconContainer>
              <IoIosSearch />
            </SearchIconContainer>
          </SearchBox>
        </SearchContainer>

        {/* I forgot I had to use tracksList.length instead of tracksList === []. */}

        {tracksList.length === 0 ? (
          <NoSongsFound />
        ) : (
          <SongList>
            {tracksList.map((eachObj) => (
              <SongItem
                key={eachObj.id}
                listInfo={eachObj}
                deleteSongItem={deleteSongItem}
              />
            ))}
          </SongList>
        )}
      </MainContent>
    </MainContainer>
  );
};

export default MusicPlaylist;
