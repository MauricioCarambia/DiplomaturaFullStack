import React from 'react';
import { Link } from 'react-router-dom';
const ContactanosPage = (props) => {
    return (
        <main className="contenedor">
        <h2>Contactanos</h2>
        <div>
            <form>
                <div className="formulario">
                    <label for="nombre">Nombre</label>
                    <input type="text" className="nombre" placeholder="Nombre"/>
                </div>
                <div className="formulario">
                    <label for="apellido">Apellido</label>
                    <input type="text" className="apellido" placeholder="Apellido"/>
                </div>
                <div className="formulario">
                    <p>Eres socio?</p>
                    <label><input type="radio" name="socio" value="si"/>Si</label>
                    <label><input type="radio" name="socio" value="no"/>No</label>
                </div>
                <div className="formulario">
                    <label for="numero">Numero de socio</label>
                    <input type="text" className="numero" placeholder="N° Socio"/>
                </div>
                <div className="formulario">
                    <p>Dejanos un comentario</p>
                    <textarea name="comentario" id="comentario" cols="30" rows="10"
                        placeholder="Comentario..."></textarea>
                </div>
                <div className="formulario">
                    <button type="submit" value="enviar">Enviar</button>
                    <button type="reset" value="reset">Borrar</button>
                </div>
            </form>
        </div>
    </main>
    );
}
export default ContactanosPage;