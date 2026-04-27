import CartItems from "../components/CartItems";

import React from "react";

// TO-DO:

// Try implementing making the design and code for the cart page and its items.

// Make use of useSelector to access the cart state from the Redux store. Then use a Map() function to render the items.

function Cart() {
  return (
    <div>
      <h2>Cart Products</h2>
      <CartItems />
    </div>
  );
}

export default Cart;
