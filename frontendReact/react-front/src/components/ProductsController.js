import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";
import ProductsList from "./ProductsList";

const ProductsController = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data._embedded.products);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> Products </h2>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsController;
