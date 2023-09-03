import React from "react";
import styles from "./Offer.module.css";

const Offer = ({ isNew, name }) => {
  if (isNew) {
    return (
      <div className={styles.offerBox}>
        <div className={styles.circle}></div>
        <p className={`${styles.pgf} ${styles.newOffer}`}>{name}</p>
      </div>
    );
  }

  return (
    <div className={styles.offerBox}>
      <p className={styles.pgf}>{name}</p>
    </div>
  );
};

export default Offer;
