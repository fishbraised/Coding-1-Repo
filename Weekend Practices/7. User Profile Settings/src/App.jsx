import UserProfileSettings from "./components/UserProfileSettings";
import ProfileSettings from "./components/ProfileSettings";

import { Provider } from "react-redux";
import store from "./store/store";

import React from "react";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <UserProfileSettings />
      <ProfileSettings />
    </Provider>
  );
};

export default App;
