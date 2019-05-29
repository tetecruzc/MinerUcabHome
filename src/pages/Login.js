import React from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
//import img1 from "../images/bauxita.jpg";
//import Title from "../components/Title";

const Login =() => {
    
return (
<>
<Hero hero="roomsHero">
    <div className="wrapper">
        <div className="form-wrapper">
            <h1>Log in</h1>
            <div className="line"></div>
            <form  noValidate>
                <div className="firstname">
                    <label htmlFor="firstname">Nombre:</label>
                    <input type="text" className="" placeholder="Nombre" name="firstName"  noValidate></input>
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Apellido:</label>
                    <input type="text" className="" placeholder="Apellido" name="lastName"  noValidate></input>
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="" placeholder="Email" name="email"  noValidate></input>
                </div>
                <div className="password">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" className="" placeholder="Contraseña" name="password"  noValidate></input>
                </div>
            </form>
        </div>
    </div>
</Hero>
</>
)};

export default Login;