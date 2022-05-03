import React from "react";
import { Link } from "react-router-dom";
import "./Searchbar.css";
export default function Searchbar() {
  return (
    <div className="searchbar">
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        <div class="cart-area d-n">
          <a href="shopping-detail.html">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
      </form>
    </div>
  );
}
