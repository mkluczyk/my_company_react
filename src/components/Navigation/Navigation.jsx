import React from "react";
import styles from "./Navigation.module.css";
import Container from "../Container/Container";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Container isNavigation={true}>
        <span className={styles.company}>moja firma</span>
        <ul className={styles.linksList}>
          <li className={styles.listItem}>
            <a className={styles.link} href="#about">
              o nas
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="#offers">
              oferta
            </a>
          </li>
          <li className={styles.listItem}>
            <p className={`${styles.link} ${styles.disabled}`}>kontakt</p>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
