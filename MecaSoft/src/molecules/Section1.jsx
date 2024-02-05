import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importas el CSS de AOS

import ImgCard1 from "../assets/img/imgCard1.jpg";
import ImgCard2 from "../assets/img/imgCard2.jpg";
import ImgCard3 from "../assets/img/imgCard3.jpg";
import ImgCard4 from "../assets/img/imgCard4.jpg";

function Section1() {

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);

    const cardData = [
    {
        title: "Introducción a la Mecatrónica",
        text: "La mecatrónica es una disciplina que une la mecánica, la electrónica, la informática y los sistemas de control. Se utiliza para diseñar productos y procesos eficientes y versátiles.",
        image: ImgCard1
    },
    {
        title: "Aplicaciones de la Mecatrónica",
        text: "La mecatrónica tiene una amplia gama de aplicaciones, desde la robótica y la automatización industrial hasta los vehículos autónomos y los sistemas de asistencia médica.",
        image: ImgCard2
    },
    {
        title: "Beneficios de la Mecatrónica",
        text: "La mecatrónica puede mejorar la eficiencia, la flexibilidad y la funcionalidad de los sistemas. También puede ayudar a reducir los costos y a mejorar la calidad de los productos y servicios.",
        image: ImgCard3
    },
    {
        title: "Futuro de la Mecatrónica",
        text: "Con el avance de la tecnología, la mecatrónica seguirá desempeñando un papel crucial en áreas como la inteligencia artificial, la Internet de las cosas y la industria 4.0.",
        image: ImgCard4
    },

];
    return ( 
        <>
            <section id="constructions" class="constructions">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <h2>Construcciones Mecatrónicas</h2>
                        <p>La mecatrónica juega un papel crucial en el diseño y construcción de sistemas y productos eficientes. Desde la robótica hasta la automatización industrial, la mecatrónica está transformando la forma en que construimos y operamos maquinaria.</p>
                    </div>
                    <div class="row gy-4">
                    {cardData.map((card, index) => (
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay={100 * index} key={index}>
                            <div class="card-item">
                                <div class="row">
                                    <div class="col-xl-5 d-flex align-items-center justify-content-center">
                                        <div class="card-bg">
                                            <img className="img-fluid" src={card.image}/>
                                        </div>
                                    </div>
                                    <div class="col-xl-7 d-flex align-items-center">
                                        <div class="card-body">
                                            <h4 class="card-title">{card.title}</h4>
                                            <p>{card.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </>
     );
}

export default Section1;