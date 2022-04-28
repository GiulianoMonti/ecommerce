import React from "react";

export default function ProductsList({ products }) {
  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th></th>
            <th>Name</th>
            <th>price</th>
            <th>Units in Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products) => (
            <tr key={products.sku}>
              <td>
                <img
                  src={products.imageUrl}
                  alt={products.name}
                  className="img-thumbnail"
                  width="50"
                  height="50"
                />
              </td>
              <td className="align-middle"> {products.name} </td>
              <td className="align-middle">{products.unitPrice}</td>
              <td className="align-middle">{products.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
