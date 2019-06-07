import React from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import Minerales from '../components/Minerales';
const Home =() => {
return (
    <>
<Hero hero="defaultHero">
    <Banner banner="banner" title="Miner Ucab" subtitle="Loren ipsum dolor no se que poner aca aun ">
        <Link to="/nosotros" className="btn-primary">Nosotros</Link> 
    </Banner>
</Hero>
<Services/>
<Minerales/>
</>
)};

export default Home;