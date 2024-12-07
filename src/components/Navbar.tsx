import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "./Logo";
import { IoSearchSharp } from "react-icons/io5";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { inter, ubuntu } from "app/fonts/fonts";
import { FaUserCircle } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { IoIosFlame } from "react-icons/io";
import axios from "axios";

const Navbar: React.FC = () => {
  async function searchMovies(query: string) {
    try {

      let data = null;
      const response = await axios.get(
        ` https://api.themoviedb.org/3/search/movie
?query=${query}&api_key=0e5fcb22f511960302347f8448364632 `
      );
        const movies = response.data.results;
        return movies ;

    } catch (error) {
console.log(error);

    }
  }
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
            <Link href={"/movies"}>Recommended</Link>
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
