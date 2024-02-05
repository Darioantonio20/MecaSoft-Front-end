import ImgSection2 from "../assets/img/imgSection2.jpg";

function Section2() {
    const services = [
        {
            title: "Diseño de Sistemas Mecatrónicos",
            description: "Desarrollamos sistemas mecatrónicos personalizados, combinando disciplinas como la mecánica, electrónica, control e informática para optimizar tus procesos.",
            delay: 100
        },
        {
            title: "Automatización Industrial",
            description: "Ofrecemos soluciones de automatización industrial para mejorar la eficiencia y precisión de tus operaciones, reduciendo el margen de error humano.",
            delay: 200
        },
        {
            title: "Robótica",
            description: "Diseñamos y construimos robots para diversas aplicaciones, desde manufactura hasta exploración y más. Nuestros robots están equipados con la última tecnología para garantizar un rendimiento superior.",
            delay: 300
        }
    ];

    return ( 
        <>
            <section id="alt-services" className="alt-services mt-5 mb-5">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-around gy-4">
                        <div className="col-lg-6 img-bg d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="100">
                            <img src={ImgSection2} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-5 d-flex flex-column justify-content-center">
                            {services.map((service, index) => (
                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={service.delay} key={index}>
                                    <div>
                                        <h4><p href="" className="stretched-link" style={{color: 'red'}}>{service.title}</p></h4>
                                        <p style={{textAlign: 'justify'}}>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Section2;