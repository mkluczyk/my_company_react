import styles from "./Container.module.css";

const Container = ({ children, isFooter, isHeader, isNavigation }) => {
  const getProperCss = () => {
    switch (true) {
      case Boolean(isFooter):
        return styles.footerWrapper;
      case Boolean(isHeader):
        return styles.headerWrapper;
      case Boolean(isNavigation):
        return styles.naviWrapper;
      default:
        return styles.container;
    }
  };

  return <div className={getProperCss()}>{children}</div>;
};

export default Container;
