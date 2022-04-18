import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

const ListProductsController = () => {
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
      <table className="table table-bordered table-striped">
        <thead></thead>
        <tbody>
          {products.map((products) => (
            <tr key={products.id}>
              <td> {products.id} </td>
              <td> {products.sku} </td>
              <td>{products.name}</td>
              <td>{products.description}</td>
              <td>{products.unitPrice}</td>
              <td>{products.unitsInStock}</td>
              {/* <td>{products.emailId}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProductsController;
