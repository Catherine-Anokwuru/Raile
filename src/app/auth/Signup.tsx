"use client";

/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./Login.module.css";
import { ubuntu } from "app/fonts/fonts";
import Logo from "components/Logo";
import axios from "axios";

const Signup: React.FC<{
  view: "login" | "register";
  setView: Dispatch<SetStateAction<"login" | "register">>;
}> = ({ setView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );

      if (response.status !== 201) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      console.log(response.headers);

      const data = await response.data;
      alert("Register successful:");
      setView("login");
      console.log(data);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Register failed:", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.logobox}>
        <Logo />
      </div>
      <div className={styles.box}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <h2 className={`${styles.heading} ${ubuntu.className}`}>Register</h2>

        <form className={styles.form} onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          <div
            className={styles.input}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <input
              style={{
                border: 0,
                background: "transparent",
                width: "100%",
              }}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={styles.inputdiv}
              value={formData.password}
              onChange={handleChange}
            />
            <button
              style={{
                border: 0,
                background: "transparent",
                cursor: "pointer",
              }}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword === false ? "show" : "hide"}
            </button>
          </div>

          <p style={{ fontSize: "12px", paddingBottom: "6px" }}>
            password must be a minimum of eight characters with a combination of
            uppercase, lowercase, numbers and special characters
          </p>

          <button
            type="submit"
            className={styles.signInButton}
            disabled={
              loading ||
              formData.email === "" ||
              formData.name === "" ||
              formData.password === ""
            }
          >
            {loading ? "Loading..." : "Register"}
          </button>

          <div className={styles.newTo}>
            Already have an account?{" "}
            <button
              onClick={() => setView("login")}
              className={styles.signUpLink}
            >
              Sign in.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
