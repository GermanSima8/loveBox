import React from "react";
import Navbar from '../navigation/navbar';
import '../views/about.css';
import imageHome from '../img/lovebox.jpg';

const Conocenos = () => {
    return(
        <div>
            <Navbar/>
        <div className="container">
        <h1 class="titulo-bienvenida">Nosotros somos...</h1>
            <div className="content">
                <div className="image">
                    <img src={imageHome} alt="Imagen de portada" />
                </div>
                <div className="text">
                    <div className="card1">
                        <h1 id="idcard">Somos una empresa con aspiración</h1>
                        <p id="p1">
                        En nuestro emprendimiento, nos apasiona ofrecer una cuidadosa selección de productos que 
                        estamos seguros de que cautivarán el corazón de sus seres queridos. Somos un grupo de 
                        emprendedores comprometidos y apasionados que busca no solo brindar productos excepcionales, 
                        sino también ganarse el cariño y la apreciación de nuestro querido público ❤️
                        </p>
                        <a id="comprar" href="/products">Conoce nuestros productos</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Conocenos;