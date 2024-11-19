import React from "react";
import styles from "../styles/Logo.module.css";
import { nunito } from "app/fonts/fonts";

const Logo: React.FC<{ fontSize?: string }> = ({ fontSize }) => {
  return (
    <h1
      className={`${styles.gradientText} ${nunito.className}`}
      style={{ fontSize: fontSize }}
    >
      Railex
    </h1>
  );
};
export default Logo;
