import React from 'react';
import styles from '../styles/Logo.module.css'
import { nunito } from 'app/fonts/fonts';

const Logo:React.FC = () => {

  return (
    <h1 className={`${styles.gradientText} ${nunito.className}`}>
      Railex
    </h1>
  );
}
export default Logo;