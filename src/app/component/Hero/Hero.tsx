import styles from "./hero.module.css";
import React from "react";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>WELCOME TO HERO SECTION </h1>
      <p>This is where your hero content will go</p>
    </section>
  );
};

export default Hero;
