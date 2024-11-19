import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "./Logo";
import { IoSearchSharp } from "react-icons/io5";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.nav}>
      <button>
        <FaBarsStaggered fontSize={"1.2rem"} />
      </button>
      <Logo fontSize="1.5rem" />
      <button>
        <IoSearchSharp fontSize={"1.5rem"} />
      </button>
    </div>
  );
};
export default Navbar;
