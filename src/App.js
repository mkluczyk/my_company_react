import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import SpecialistsList from "./components/SpecialistsList/SpecialistsList";
import OffersList from "./components/OffersList/OffersList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <SpecialistsList />
        <OffersList />
      </main>
      <Footer />
    </>
  );
}

export default App;
