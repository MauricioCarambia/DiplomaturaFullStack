import React from 'react';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav className="contenedor">
            <ul>
                <li> <Link to="/">Noticias</Link></li>
                <li> <Link to="/especialidades">Especialidades</Link></li>
                <li> <Link to="/servicios">Servicios</Link></li>
                <li> <Link to="/galeria">Galeria</Link></li>
                <li> <Link to="/socios">Socios</Link></li>
                <li> <Link to="/llegar">Como Llegar</Link></li>
                <li> <Link to="/contactanos">Contactanos</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;