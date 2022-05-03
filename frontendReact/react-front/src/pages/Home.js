import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import ProductsList from "../components/ProductsList";
import SideBar from "../components/SideBar";
import "./Home.css";

const Home = () => {
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
      <ProductsList products={products} />
    </div>
  );
};
export default Home;
