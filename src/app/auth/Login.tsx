/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Login.module.css";
import Button from "components/Button";
import { ubuntu } from "app/fonts/fonts";
import Logo from "components/Logo";

const Login: React.FC = () => {

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

        <form className={styles.form}>
          <input
            type="text"
            placeholder="Email or mobile number"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />

          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>

          <div className={styles.or}>OR</div>

          <Button variant="secondary">
            <img
              src="/icons/google.webp"
              alt="google icon"
              className={styles.gIcon}
            />
            Sign in with Google
          </Button>

          <a href="#" className={styles.forgotPassword}>
            Forgot password?
          </a>

          <div className={styles.rememberMeContainer}>
            <input type="checkbox" id="rememberMe" />
            <label
              htmlFor="rememberMe"
              className={styles.rememberMeLabel}
            >
              Remember me
            </label>
          </div>

          <div className={styles.newTo}>
            New to Raile?{" "}
            <a href="#" className={styles.signUpLink}>
              Sign up now.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
