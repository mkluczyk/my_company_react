import styles from "./OffersList.module.css";
import Offer from "../Offer/Offer";
import { offersArray } from "../../data/offersArray";
import Container from "../Container/Container";

const OffersList = () => {
  return (
    <section className={styles.offers} id="offers">
      <Container>
        <h2 className={styles.offerTitle}>Czym zajmuje się nasza firma?</h2>
        <div className={styles.offerBoxWrapper}>
          {offersArray.map((offer) => (
            <Offer key={offer.id} isNew={offer.isNew} name={offer.name} />
          ))}
          ;
        </div>
      </Container>
    </section>
  );
};

export default OffersList;
