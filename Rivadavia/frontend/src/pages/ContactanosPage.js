import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/pages/ContactanosPage.css";

const ContactanosPage = (props) => {
    return (
        <main>
            <div className="contenedor">
                <h2>Contactanos</h2>
                <div>
                    <form className='formulario'>
                        <div className="campos">
                            <label className='campo' for="nombre">Nombre:</label>
                            <input type="text" className="campo" placeholder="Nombre" required/>
                        </div>
                        <div className="campos">
                            <label className='campo' for="apellido">Apellido:</label>
                            <input type="text" className="campo" placeholder="Apellido" required/>
                        </div>
                        <div className="campos">
                            <label className='campo'>Eres socio?</label>
                            <label><input className='campo' type="radio" name="socio" value="si" />Si</label>
                            <label><input className='campo' type="radio" name="socio" value="no" />No</label>
                        </div>
                        <div className="campos">
                            <label className='campo' for="numero">Numero de socio o DNI:</label>
                            <input type="text" className="campo" placeholder="N° Socio / DNI" />
                        </div>
                        <div className="campos">
                            <label className='campo'>Dejanos un comentario:</label>
                            <textarea className='campo' name="comentario" id="comentario" cols="30" rows="10"
                                placeholder="Comentario..." required></textarea>
                        </div>
                        <div className="campos">
                            <button className='campo' type="submit" value="enviar">Enviar</button>
                            <button className='campo' type="reset" value="reset">Borrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
export default ContactanosPage;