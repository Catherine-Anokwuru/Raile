"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "./Logo";
import { IoSearchSharp } from "react-icons/io5";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { inter, ubuntu } from "app/fonts/fonts";
import { FaUserCircle } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { IoIosFlame } from "react-icons/io";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  async function searchMovies() {
    try {
      router.push(`/search/${query}`);
    } catch (error) {
      console.log(error);
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }
  return (
    <nav className={styles.navBox}>
      <div className={styles.mobileNav}>
        <button>
          <FaBarsStaggered fontSize={"1.2rem"} />
        </button>
        <Logo fontSize="1.5rem" />
        <button type="button" onClick={searchMovies}>
          <IoSearchSharp fontSize={"1.5rem"} />
        </button>
      </div>
      <div className={styles.nav}>
        <Logo />
        <div className={styles.searchBar}>
          <button
          type="button"
            onClick={searchMovies}
            style={{
              fontSize: "1.2rem",
              borderRight: "1px solid #fff",
              paddingRight: "8px",
              height: "100%",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImSearch
            />
          </button>
          <input value={query} onChange={handleChange} type="text" />
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
              <FaUserCircle style={{ color: "#00C853", fontSize: "1.5rem" }} />
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
