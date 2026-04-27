import Pokedex from "./components/Pokedex";

import { Provider } from "react-redux";
import store from "./store/store";

import React from "react";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );
};

export default App;
