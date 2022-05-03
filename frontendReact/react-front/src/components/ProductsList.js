import React from "react";
import "./ProductList.css";

export default function ProductsList({ products }) {
  return (
    <div className="products-list">
      {products.map((products) => (
        <th key={products.sku}>
          <img src={products.imageUrl} alt={products.name} />
          <p> {products.name} </p>
          <p> ${products.unitPrice} </p>
          <a href="#" className="btn btn-primary btn-sm">
            Add to Cart
          </a>
        </th>
      ))}
    </div>
  );
}
{
  /* <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div> */
}

{
  /* <div>
<table className="table">
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
</div> */
}
