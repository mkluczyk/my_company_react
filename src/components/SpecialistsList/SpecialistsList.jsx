import styles from "./SpecialistsList.module.css";
import { specialistsArray } from "../../data/specialistsArray";
import Specialist from "../Specialist/Specialist";
import Container from "../Container/Container";

const SpecialistsList = () => {
  return (
    <section className={styles.specialists} id="about">
      <Container>
        <h2 className={styles.title}>Nasi specjaliści</h2>
        {specialistsArray.map((specialist) => (
          <Specialist key={specialist.id} specialist={specialist} />
        ))}
      </Container>
    </section>
  );
};

export default SpecialistsList;
