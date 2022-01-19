import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";
const Header = () => {
  const { header_section, logo_title } = styles;
  return (
    <header className={header_section}>
      <h1 className={logo_title}>SearchFilms</h1>
      <Navigation />
    </header>
  );
};

export default Header;
