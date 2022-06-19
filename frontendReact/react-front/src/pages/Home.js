import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import ProductsList from "../components/ProductsList";
import SideBar from "../components/SideBar";
import "./Home.css";

import { useParams } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   getProductsById(1);
  // }, []);
  useEffect(() => {
    ProductService.getCategoryById(id)
      .then((response) => {
        console.log(id);
        setProducts(response.data._embedded.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const getAllProducts = () => {
  //   ProductService.getAllProducts()
  //     .then((response) => {
  //       setProducts(response.data._embedded.products);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const getProductsById = (producltId) => {
  //   ProductService.getProductsById(producltId)
  //     .then((response) => {
  //       setProducts(response.data._embedded.products);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container">
      <ProductsList products={products} />
    </div>
  );
};
export default Home;
