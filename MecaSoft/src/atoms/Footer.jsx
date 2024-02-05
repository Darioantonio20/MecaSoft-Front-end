import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
            <section className="mb-4">
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="https://www.facebook.com/mecaupch" role="button" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#55acee"}} href="https://twitter.com/imupchiapas?lang=es" target="_blank" role="button">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="mailto:mecatronica@upchiapas.edu.mx" target="_blank" role="button">
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="https://www.instagram.com/mecatronicaup/" target="_blank" role="button">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="https://www.linkedin.com/company/upchiapas/" target="_blank" role="button">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </section>
        </div>
    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        <h5>© 2022 Ingeniería en Mecatrónica</h5>
        <p style={{fontSize: '0.9rem', color: '#666'}}>Teléfono: <a href="tel:019616171460">01961 61 71460</a></p>
        <p style={{fontSize: '0.9rem', color: '#666'}}>Dirección: Carretera Tuxtla Gutierrez. Portillo Zaragoza Km 21+500</p>
    </div>
    </footer>
);

export default Footer;