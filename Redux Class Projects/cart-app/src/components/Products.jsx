import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

import axios from "axios";

const Products = () => {
  const productsList = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  const handleAdd = (products) => {
    dispatch(addToCart(products)); //
  };

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await axios.get("https://fakestoreapi.com/products");
    //   console.log(res.data);
    //   setProducts(res.data);
    // };
    // fetchProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {productsList.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
