import React from "react";
import Navbar from '../navigation/navbar';
import '../views/contacs.css'

const Contacts = () => {
    return (
        <div>
            <Navbar />
            <div className="formulario-container">
                                <div class="card">
                        <h2>Información de Contacto</h2>
                        <p id="p2">
                            Aquí puedes encontrar nuestra información de contacto. 
                            Si tienes alguna pregunta o comentario, no dudes en contactarnos.
                        </p>
                        <ul>
                            <li>Teléfono: +123456789</li>
                            <li>Correo Electrónico: info@example.com</li>
                            <li>Dirección: Calle Principal, Ciudad</li>
                        </ul>
                    </div>
                    <div></div>
                    <div className="formulario">
                    <h1 id="h1">Contacto</h1>
                    <p>Por favor, completa el siguiente formulario para ponerte en contacto con nosotros:</p>
                    <form action="#" method="POST">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                        
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                        
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;




