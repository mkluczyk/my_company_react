import styles from "./Footer.module.css";
import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container isFooter={true}>
        <span className={styles.txt}>
          Nazwa firmy - wszelkie prawa zastrzeżone, 2023
        </span>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faInstagram} className={styles.ig} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
