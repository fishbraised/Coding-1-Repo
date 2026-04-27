import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "../store/cartSlice";

import React from "react";

const CartItems = () => {
  const cartList = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cartWrapper">
      {cartList.map((product) => (
        <div className="cartCard" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="cartBtn" onClick={() => handleRemove(product)}>
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
