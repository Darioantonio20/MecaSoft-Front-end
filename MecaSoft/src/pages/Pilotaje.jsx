import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import "../assets/style/Pilotaje.css";
import NavBar from '../atoms/NavBar';

function Pilotaje() {
    const [value, setValue] = useState(0);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (!isNaN(inputValue)) {
            setValue(Number(inputValue));
        }
    };

    const calculateSize = (value) => {
        const initialSize = 25;
        const maxSize = 50;
        const size = initialSize + (value / 100) * (maxSize - initialSize);
        return `${size}px`;
    };

    useEffect(() => {
        const colorIntensity = Math.floor((value / 100) * 255);
        document.documentElement.style.setProperty('--track-color', `rgb(${colorIntensity}, 0, 0)`);
    }, [value]);

    const askForValue = () => {
        Swal.fire({
            title: 'Introduzca el valor',
            input: 'number',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Cambiar',
            showLoaderOnConfirm: true,
            preConfirm: (number) => {
                if (number > 100) {
                    Swal.showValidationMessage('The value cannot be greater than 100º');
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                setValue(Number(result.value));
            }
        });
    };

    return (
        <>
        <NavBar />
            <div className="card text-white bg-danger mb-3 text-center mb-5 mt-4" >
                <h1 class="card-header">Pilotaje</h1>
                <div class="card-body">
                    <h4 class="card-title">Herramienta respecto al sistema de referencia: [X, Y, Z] mm |  Rot[Z,Y', Z' ']deg - Adept/Comau/Kawasaki</h4>
                </div>
            </div>
            <div class="card-group">
                
                <div class="card border-0">
                    <div class="card-img-top d-flex justify-content-center align-items-center">
                        <div class="bg">
                            <div class="loader"></div>
                        </div>
                    </div>
                    <div className="card-body mb-5">
                        <div className="App">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input 
                                    type="range" 
                                    value={value} 
                                    onChange={handleInputChange} 
                                    style={{ 
                                        '--thumb-size': calculateSize(value)
                                    }}
                                />
                                <button className="buttonSlider" onClick={askForValue} style={{ marginLeft: '10px' }}>
                                    <span>Cambiar valor</span>
                                </button>
                            </div>
                            <div id="h4-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div id="h4-subcontainer">
                                    <h4 style={{ 
                                        transform: `translateX(-50%) scale(${1 + (value / 100)})`, 
                                        left: `${value}%`,
                                        paddingLeft: '5rem' // Agrega esto
                                    }}>
                                        {value}º
                                        <span></span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted ">1: Type P θ=37.00° d=415.00mm a=0.00mm a=0.00°</small>
                    </div>
                </div>

                <div class="card border-0">
                    <div class="card-img-top d-flex justify-content-center align-items-center">
                        <div class="bg">
                            <div class="loader"></div>
                        </div>
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer text-center">
                    <small class="text-muted">2: Type R θ=126.00° d=0.00mm a=200.00mm a=0.00°</small>
                    </div>
                </div>
                <div class="card border-0">
                    <div class="card-img-top d-flex justify-content-center align-items-center">
                        <div class="bg">
                            <div class="loader"></div>
                        </div>
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer text-center">
                    <small class="text-muted">3: Type R θ=173.00° d=0.00mm a=200.00mm a=0.00°</small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pilotaje;