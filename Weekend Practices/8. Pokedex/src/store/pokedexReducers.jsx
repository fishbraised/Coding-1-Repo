export const pokedexReducers = (state, action) => {
  switch (action.type) {
    case "UPDATESEARCHINPUT":
      return { ...state, searchInput: action.payload };
  }
};
