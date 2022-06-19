import React from 'react';
import "../styles/components/pages/EspecialidadesPage.css";

const EspecialidadesPage = (props) => {
    return (
        <main class="contenedor">
            <h2>Nuestras especialidades</h2>
            <div className='especialidad'>
                <div className="especialidades">
                    <img src="img/gineco.png" alt="Ginecologia" />
                    <div className="info">
                        <h3>Ginecologia/obstetricia</h3>
                        <p>Campo de la medicina que se especializa en la atención de las mujeres durante el embarazo y el parto,
                            y en el diagnóstico y tratamiento de enfermedades de los órganos reproductivos femeninos.</p>
                        <ul>
                            <li>Lunes - 9hs a 11hs</li>
                            <li>Martes - 13hs a 16hs</li>
                            <li>Martes - 16hs a 18.30hs</li>
                            <li>Jueves - 17.30hs a 19.30hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/trauma.png" alt="Traumatologia" />
                    <div className="info">
                        <h3>Traumatologia</h3>
                        <p>Un traumatólogo es aquel profesional, especializado en el tratamiento de las lesiones que sufre el
                            aparato locomotor. La traumatología es por ende, la especialidad médica que se centra en el
                            análisis, diagnóstico, tratamiento y seguimiento de dolencias adquiridas por el sistema
                            músculo-esquelético.</p>
                        <p>Lunes - 13hs a 17hs</p>
                        <p>Miercoles - 9hs a 12hs</p>
                        <p>Miercoles - 15hs a 17hs</p>
                        <p>Jueves - 15hs a 17hs</p>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/oftalmo.png" alt="Oftalmologia" />
                    <div className="info">
                        <h3>Oftalmologia</h3>
                        <p>Médico que tiene una formación especial para diagnosticar y tratar problemas de los ojos, incluso
                            lesiones y enfermedades.</p>
                        <p>Lunes - 9hs a 14hs</p>
                        <p>Viernes - 13hs a 16hs</p>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/gastro.png" id="gastro" alt="Gastroenterologia" />
                    <div className="info">
                        <h3>Gastroenterologia</h3>
                        <p>La gastroenterología es el estudio de la función normal y las enfermedades del esófago, estómago,
                            intestino delgado, colon y recto, páncreas, vesícula biliar, conductos biliares e hígado.</p>
                        <p>Lunes - 18.30hs a 20hs</p>
                        <p>Miercoles - 13hs a 15hs</p>
                        <p>Viernes - 15hs a 18hs</p>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/alergista.png" id="gastro" alt="Alergista" />
                    <div className="info">
                        <h3>Alergista</h3>
                        <p>Médico especializado en el estudio o tratamiento de las alergias.</p>
                        <p>Lunes - 9hs a 12hs</p>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/gastro.png" id="gastro" alt="Cardiologia" />
                    <div className="info">
                        <h3>Cardiologia</h3>
                        <p>Rama de la medicina que se especiliza en el diagnóstico y tratamiento de enfermedades del corazón, los vasos sanguíneos y el sistema circulatorio. Estas enfermedades incluyen enfermedad de las arterias coronarias, problemas del ritmo del corazón e insuficiencia cardíaca.</p>
                        <p>Lunes - 12hs a 16hs</p>
                        <p>Martes - 12hs a 15hs</p>
                        <p>Miercoles - 9hs a 12hs</p>
                        <p>Jueves - 8hs a 12hs</p>
                        <p>Jueves - 17.30hs a 20hs</p>
                        <p>Viernes - 8.30hs a 13hs</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default EspecialidadesPage;