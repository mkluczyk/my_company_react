import React, { useState, useEffect } from "react";
import styles from "./Container.module.css";

const Container = ({ children, isFooter, isHeader, isNavigation }) => {
  const [css, setCss] = useState(styles.container);

  useEffect(() => {
    if (isFooter) {
      setCss(styles.footerWrapper);
    } else if (isHeader) {
      setCss(styles.headerWrapper);
    } else if (isNavigation) {
      setCss(styles.naviWrapper);
    }
  }, [isFooter, isHeader, isNavigation]);

  return <div className={css}>{children}</div>;
};

export default Container;
