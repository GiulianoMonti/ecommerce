import React from "react";

export default function ProductsList({ products }) {
  return (
    <div>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>Name</th>
            <th>price</th>
            <th>Units in Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => (
            <tr key={products.sku}>
              <td> {products.sku} </td>
              <td>{products.name}</td>
              <td>{products.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
