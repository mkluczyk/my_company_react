import styles from "./Header.module.css";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.shadow}>
        <Container isHeader={true}>
          <h1 className={styles.biggerTxt}>
            Nasza firma oferuje najwyższej jakości produkty
          </h1>
          <p className={styles.smallerTxt}>Nie wierz nam na słowo - sprawdź</p>
          <a href="#offers" className={styles.offerBtn}>
            oferta
          </a>
        </Container>
      </div>
    </header>
  );
};

export default Header;
