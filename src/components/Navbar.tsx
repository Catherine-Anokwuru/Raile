import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "./Logo";
import { IoSearchSharp } from "react-icons/io5";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { inter, ubuntu } from "app/fonts/fonts";
import { FaUserCircle } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { CgBolt } from "react-icons/cg";
import { IoIosFlame } from "react-icons/io";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navBox}>
      <div className={styles.mobileNav}>
        <button>
          <FaBarsStaggered fontSize={"1.2rem"} />
        </button>
        <Logo fontSize="1.5rem" />
        <button>
          <IoSearchSharp fontSize={"1.5rem"} />
        </button>
      </div>
      <div className={styles.nav}>
        <Logo />
        <div className={styles.searchBar}>
          <ImSearch
            style={{
              fontSize: "1.3rem",
              borderRight: "1px solid #fff",
              paddingRight: "8px",
              height: "100%",
            }}
          />
          <input type="text" />
        </div>
        <ul className={inter.className}>
          <li>
            <Link href={"/dashboard"}>Home</Link>
          </li>
          <li>
            <Link href={"/movies"}>Movies</Link>
          </li>
          <li>
            <Link href={"/tv-shows"}>TV Shows</Link>
          </li>
          <li>
            <Link href={"/watchlist"}>Watchlist</Link>
          </li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: "14px",
                marginRight: "8px",
              }}
            >
              |
            </p>{" "}
            <button>
              <FaUserCircle
                style={{ color: "#00C853", fontSize: "1.5rem" }}
              />
            </button>
            <div
              style={{
                display: "flex",
                marginLeft: "1rem",
                alignItems: "center",
              }}
            >
              <IoIosFlame
                fontSize={"1.5rem"}
                color="gold"
                className={styles.flame}
              />
              <p
                className={ubuntu.className}
                style={{ fontWeight: 700, color: "gold" }}
              >
                1
              </p>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
