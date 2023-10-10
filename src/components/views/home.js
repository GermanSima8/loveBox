import React from "react";
import Navbar from '../navigation/navbar';
import '../views/home.css';
import imageHome from '../img/imgHome.jpg';

const Home = () => {
    return (
        <div>
            <Navbar/>
        <div className="container">
        <h3 class="titulo-bienvenida">Bienvenido</h3>
            <div className="content">
                <div className="image">
                    <img src={imageHome} alt="Imagen de portada" />
                </div>
                <div className="text">
                    <div className="card">
                        <h1>¡Ilumina tus momentos especiales con nuestras increíbles cajas de regalo con luz!</h1>
                        <p>
                            Con Love Box tomamos en cuenta lo especial que es para ti expresar tu amor, cariño y gratitud para 
                            alguien especial en tu vida. ¡Por eso, hemos creado "Love Box" cajas de regalo con las luces más 
                            deslumbrantes, vibrantes y emocionantes que jamás hayas logrado ver! Si quieres deslumbrar a tu ser 
                            querido ya sea en un cumpleaños, aniversario, boda o algún evento especial nuestras cajas de regalo 
                            con luz añadirán un toque mágico y memorable a tu regalo.
                        </p>
                        <a id="comprar" href="/products">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;
