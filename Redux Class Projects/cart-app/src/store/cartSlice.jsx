import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      console.log("state: ", state);
      console.log("action: ", action);

      const filteredCart = state.filter((eachObj) => {
        console.log("eachObj: ", eachObj);

        return eachObj.id !== action.payload.id;
      });

      return filteredCart;
    },
  },
});

console.log(cartSlice.actions);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
