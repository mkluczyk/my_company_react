import React from "react";
import styles from "./Specialist.module.css";

const Specialist = ({ specialist, id }) => {
  const specialistUrl = specialist.image;

  return (
    <div className={styles.specialist}>
      <div
        className={styles.specImg}
        style={{
          backgroundImage: `url(${specialistUrl})`,
          backgroundPosition: id % 2 === 0 ? "left" : "right",
        }}
      ></div>
      <div className={styles.specInfWrapper}>
        <h2 className={styles.name}>
          {specialist.fullname} {specialist.position}
        </h2>
        <p className={styles.description}>{specialist.description}</p>
      </div>
    </div>
  );
};

export default Specialist;
