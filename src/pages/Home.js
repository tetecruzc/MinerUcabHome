import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Minerales from "../components/Minerales";
const Home = () => {
  return (
    <>
<<<<<<< HEAD
<Hero hero="defaultHero">
    <Banner banner="banner" title="Miner Ucab" subtitle="Loren ipsum dolor no se que poner aca aun ">
        <Link to="/nosotros" className="btn-primary">Nosotros</Link> 
    </Banner>
</Hero>
<Services/>
<Minerales/>
</>
)};
=======
      <Hero hero="defaultHero">
        <Banner
          banner="banner"
          title="Miner Ucab"
          subtitle="Loren ipsum dolor no se que poner aca aun "
        >
          <Link to="/nosotros" className="btn-primary">
            Nosotros
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Minerales />
    </>
  );
};
>>>>>>> michialleb

export default Home;
