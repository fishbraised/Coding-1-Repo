import React from "react";

const VideosContext = React.createContext({
  savedVideos: [],
  likedVideos: [],
  dislikedVideos: [],
  activeTab: "HOME",
  isDarkTheme: true,

  toggleSavedVideo: () => {},
  toggleLikedVideo: () => {},
  toggleDislikedVideo: () => {},
  updateActiveTab: () => {},
  toggleLightingTheme: () => {},
});

export default VideosContext;
