// import { pokedexReducers } from "./pokedexReducers";

import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "LOADING",
};

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: { data: {}, apiStatus: apiStatusConstants.initial },
  extraReducers: (builder) => {
    builder.addCase(fetchPokedexData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.apiStatus = apiStatusConstants.success;
    });

    builder.addCase(fetchPokedexData.rejected, (state, action) => {
      state.apiStatus = apiStatusConstants.failure;
    });

    builder.addCase(fetchPokedexData.pending, (state, action) => {
      state.apiStatus = apiStatusConstants.inProgress;
    });
  },
});

export const fetchPokedexData = createAsyncThunk(
  "pokedex/fetchData",
  async (pokedexSearch) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokedexSearch}`,
    );
    const data = response.data;

    return data;
  },
);

// pokedexReducers.searchInput

export default pokedexSlice.reducer;
