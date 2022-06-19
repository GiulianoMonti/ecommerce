import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./SideBar.css";
export default function SideBar() {
  const { prodID } = useParams();

  return (
    <div className="sidebar">
      <div className="sidebar-content"></div>
      <div className="user">
        {/* avatar and username here later */}
        <p>Hey user</p>
        <nav className="links">
          <ul>
            <li>
              <NavLink to={"1"}>c</NavLink>
            </li>
            <li>
              <NavLink to={"2"}>
                <span>Coofe mugs</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
