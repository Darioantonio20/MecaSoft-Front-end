import React, { useEffect } from 'react';
import ImgHerramientas from "../assets/img/imgHerramientas.jpeg";
import ImgHerramientas2 from "../assets/img/imgHerramientas2.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/Mision.css";

function Section3() {

    useEffect(() => {
        const title = document.querySelector('.title');
        title.classList.add('typing');
    }, []);

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return ( 
        <>
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5 mb-5">
                <div className="col-12 col-lg-6">
                    <div className="section3" data-aos="fade-up">
                        <h2 className="title">Pilotaje</h2>
                        <p className="text">Un robot es un sistema intrincado con una estructura mecánica articulada. Para que su funcionamiento se alinee con las tareas designadas por su "comportamiento" (movimiento, operación), es esencial esquematizarlo en un modelo matemático. Este modelo debe considerar las relaciones de causa y efecto entre sus diversos componentes, que incluyen órganos mecánicos, sensoriales y de control.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <img src={ImgHerramientas} className="img-fluid" data-aos="fade-up"/>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center mb-5">
                <div className="col-12 col-lg-6">
                    <img src={ImgHerramientas2} className="img-fluid" data-aos="fade-up"/>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="section3" data-aos="fade-up">
                        <h2 className="" style={{ color: 'red' }}>Nuestra Misión</h2>
                        <p className="text">En la Universidad Politécnica de Chiapas, tenemos la misión de fomentar aprendizajes para nuestros profesionales competentes de Ingeniería Mecatrónica a través de un programa de estudio de ingeniería, en un ambiente seguro e intuitivo para mejorar el desarrollo de soluciones en sectores empresariales y científico-tecnológico.<br></br><br></br>Esto nos ha llevado a mejorar nuestros métodos de enseñanza implementando software que facilite el aprendizaje. </p>
                        <p className="highlight">Ingeniería mecatrónica</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Section3;