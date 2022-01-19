import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  const { navigation, listItems, itemLink, itemLink_active } = styles;
  return (
    <nav className={navigation}>
      <ul className={listItems}>
        <NavLink
          className={(navData) =>
            navData.isActive ? itemLink_active : itemLink
          }
          to={"/"}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? itemLink_active : itemLink
          }
          to={"/movies"}
        >
          <li>Movies</li>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Navigation;
