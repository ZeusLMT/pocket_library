import React from "react";
import styles from "./Header.module.css";

const Header = ({ title, subtitle }) => {
  return (
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
  );
};

export default Header;
