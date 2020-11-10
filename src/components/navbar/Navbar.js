import React from 'react';
import logo from '../../img/logo.jpeg';
import './navbar.css';

const Navbar = () => (
  <div className="barra">
    <div className="container flex">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h4 className="font-2 titulo-barra">Mala facha</h4>
      <nav className="navbar">
        <a href="platillos">Menú</a>
        <a href="contacto">Contacto</a>
      </nav>
    </div>
  </div>
);

export default Navbar;
