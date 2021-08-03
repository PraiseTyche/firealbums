import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <img src={"/images/logo.png"} alt={"logo"} />
        <h1 className={styles.heading}>Fire_Albums</h1>
      </div>
    </header>
  );
};

export default Navbar;
