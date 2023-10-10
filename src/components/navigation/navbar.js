import React from "react";
import "../navigation/navbar.css";
import logo from "../img/TxtWhite2.png"; 

const Navbar = () => {

  const openNav = () => {
    document.getElementById("mobile-menu").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mobile-menu").style.width = "0%";
  };

  return (
    <div className="navbar-main">
      <header className="header"> 
        <div className="logo">
          <img src={logo} alt="Logo" /> 
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/conocenos">Nosotros</a>
            </li>
            <li>
              <a href="/products">Productos</a>
            </li>
          </ul>
        </nav>
        <a className="btn" href="/contacs">
          <button>Contáctanos</button>
        </a>
        <a onClick={openNav} className="menu" href="#">
          <button>Menu</button>
        </a>
        <div id="mobile-menu" className="overlay">
          <a onClick={closeNav} href="#" className="close">
            &times;
          </a>
          <div className="overlay-content">
            <a href="/">Inicio</a>
            <a href="/conocenos">Nosotros</a>
            <a href="/products">Productos</a>
            <a href="/contacs">Contáctanos</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;