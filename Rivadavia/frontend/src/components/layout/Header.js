import React from 'react';
import { Link } from 'react-router-dom';
const Header = (props) => {
    return (
        <header>
            <div id="inicio" class="contenedor">
                <img src="img/logosala.png" alt="sala rivadavia" class="imagenlogo"/>

                    <div class="cabeza">
                        <div class="sala">
                            <h1>Sala Bernardino Rivadavia</h1>
                            <h4>Sociedad de fomento</h4>
                        </div>
                        <div class="atencion">
                            <h3>Atencion a socios y particulares</h3>
                            <h3>Aranceles comunitarios</h3>
                        </div>
                    </div>
            </div>
        </header>
    );
}
export default Header;