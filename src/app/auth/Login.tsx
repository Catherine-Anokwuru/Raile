"use client";

/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./Login.module.css";
import { ubuntu } from "app/fonts/fonts";
import Logo from "components/Logo";
import { useRouter } from "next/navigation";

const Login: React.FC<{
  view: "login" | "register";
  setView: Dispatch<SetStateAction<"login" | "register">>;
}> = ({ setView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Error: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      // const token = await response.headers.authorization()
      console.log("Login successful:", data);
      localStorage.setItem("userId", data.id);
      // redirect("/dashboard");
      router.push("/dashboard");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login failed:", error.message);
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
        <h2 className={`${styles.heading} ${ubuntu.className}`}>
          Sign In
        </h2>

        <form className={styles.form} onSubmit={handleLogin}>
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

          <button
            type="submit"
            className={styles.signInButton}
            disabled={
              loading ||
              formData.email === "" ||
              formData.password === ""
            }
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <div className={styles.newTo}>
            New to Raile?{" "}
            <button
              onClick={() => setView("register")}
              className={styles.signUpLink}
            >
              Sign up now.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
