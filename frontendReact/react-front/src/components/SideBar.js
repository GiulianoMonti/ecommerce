import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content"></div>
      <div className="user">
        {/* avatar and username here later */}
        <p>Hey user</p>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <span>Books</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <span>Coofe mugs</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
