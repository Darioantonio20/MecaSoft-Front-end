import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import "../assets/style/Pilotaje.css";
import NavBar from '../atoms/NavBar';

function Pilotaje() {
    
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    const [x1, setX1] = useState(0);
    const [y1, setY1] = useState(0);
    const [x2, setX2] = useState(0);
    const [y2, setY2] = useState(0);

    const handleInputChange = (event) => {
        const inputValue = Number(event.target.value);
        if (!isNaN(inputValue)) {
            switch (event.target.name) {
                case "teta1":
                    setValue(inputValue);
                    break;
                case "teta2":
                    if (inputValue < -120 || inputValue > 120) {
                        alert('El valor debe estar entre -120º y 120º');
                    } else {
                        setValue2(inputValue);
                    }
                    break;
                case "z":
                    if (inputValue < 0 || inputValue > 250) {
                        alert('El valor debe estar entre 0mm y 250mm');
                    } else {
                        setValue3(inputValue);
                    }
                    break;
            }
            calculos();
        }
    };

    function calculos() {
        let varX1 = 25 * Math.cos(value * Math.PI / 180);
        let varY1 = 25 * Math.sin(value * Math.PI / 180);
        let varX2 = 25 * Math.cos(value * Math.PI / 180) + 15 * Math.cos((value + value2) * Math.PI / 180);
        let varY2 = 25 * Math.sin(value * Math.PI / 180) + 15 * Math.sin((value + value2) * Math.PI / 180);

        setX1(varX1.toFixed(3));
        setY1(varY1.toFixed(3));
        setX2(varX2.toFixed(3));
        setY2(varY2.toFixed(3));
    }
    const calculateSize = (value) => {
        const maxSize = 40;
        return `${maxSize}px`;
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
                if (number < -80 || number > 80) {
                    Swal.showValidationMessage('El valor debe estar entre -80º y 80º');
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                setValue(Number(result.value));
            }
        });
    };

    const askForValue2 = () => {
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
                if (number < -120 || number > 120) {
                    Swal.showValidationMessage('El valor debe estar entre -120º y 120º');
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                setValue2(Number(result.value));
            }
        });
    };

    const askForValue3 = () => {
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
                if (number < 0 || number > 250) {
                    Swal.showValidationMessage('El valor debe estar entre 0mm y 250mm');
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                setValue3(Number(result.value));
            }
        });
    };

    return (
        <>
        <NavBar />
            <div className="card text-white bg-danger mb-3 text-center mb-5 mt-4" >
                <h1 className="card-header">Pilotaje</h1>
                <div className="card-body">
                    <h4 className="card-title">Herramienta respecto al sistema de referencia: [X, Y, Z] mm |  Rot[Z,Y', Z' ']deg - Adept/Comau/Kawasaki</h4>
                </div>
            </div>
            <div className="card-group">
                
                <div className="card border-0">
                    <div className="card-img-top d-flex justify-content-center align-items-center">
                        <div className="bg">
                            <div className="loader"></div>
                        </div>
                    </div>
                    <div className="card-body mb-5">
                        <div className="App">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button className="buttonSlider mt-2 mb-5" onClick={askForValue} style={{ marginTop: '10px' }}>
                                    <span>Cambiar valor</span>
                                </button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input 
                                    type="range" 
                                    min="-80"
                                    max="80"
                                    value={value} 
                                    onChange={handleInputChange} 
                                    name="teta1"
                                    style={{ 
                                        '--thumb-size': calculateSize(value)
                                    }}
                                />
                            </div>
                            <div id="h4-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div id="h4-subcontainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h5 style={{ fontSize: '1.6em' }}>
                                        θ1: {value}º
                                        <span></span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0">
                    <div className="card-img-top d-flex justify-content-center align-items-center">
                        <div className="bg">
                            <div className="loader"></div>
                        </div>
                    </div>
                    <div className="card-body mb-5">
                        <div className="App">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button className="buttonSlider mt-2 mb-5" onClick={askForValue2} style={{ marginTop: '10px' }}>
                                    <span>Cambiar valor</span>
                                </button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input 
                                    type="range" 
                                    min="-120"
                                    max="120"
                                    value={value2} 
                                    onChange={handleInputChange} 
                                    name="teta2"
                                    style={{ 
                                        '--thumb-size': calculateSize(value2)
                                    }}
                                />
                            </div>
                            <div id="h4-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div id="h4-subcontainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h5 style={{ fontSize: '1.6em' }}>
                                        θ2: {value2}º
                                        <span></span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0">
                    <div className="card-img-top d-flex justify-content-center align-items-center">
                        <div className="bg">
                            <div className="loader"></div>
                        </div>
                    </div>
                    <div className="card-body mb-5">
                        <div className="App">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <button className="buttonSlider mt-2 mb-5" onClick={askForValue3} style={{ marginTop: '10px' }}>
                                    <span>Cambiar valor</span>
                                </button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <input 
                                    type="range" 
                                    min="0"
                                    max="250"
                                    value={value3} 
                                    onChange={handleInputChange} 
                                    name="z"
                                    style={{ 
                                        '--thumb-size': calculateSize(value3)
                                    }}
                                />
                            </div>
                            <div id="h4-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div id="h4-subcontainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h4 style={{ fontSize: '1.6em' }}>
                                        z: {value3 + "mm"}
                                        <span></span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                <div className="col-12 col-lg-6" style={{ marginTop: '3rem', marginBottom: '3rem', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#f0f0f0', color: '#121111', textShadow: '2px 2px #999999', borderRadius: '10px', padding: '20px' }}>
                    <table style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                        <tbody>
                            <tr>
                                <th><h1><b>X1:</b></h1></th>
                                <td><h1>{x1}</h1></td>
                            </tr>
                            <tr>
                                <th><h1><b>Y1:</b></h1></th>
                                <td><h1>{y1}</h1></td>
                            </tr>
                            <tr>
                                <th><h1><b>X2:</b></h1></th>
                                <td><h1>{x2}</h1></td>
                            </tr>
                            <tr>
                                <th><h1><b>Y2:</b></h1></th>
                                <td><h1>{y2}</h1></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='mb-5 mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='buttonSend text-center'>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Enviar</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 notifications-container">
                    <div className="alert">
                        <div className="flex">
                            <div className="alert-prompt-wrap">
                                <h5 className="text-sm text-yellow-700" style={{ textAlign: 'center' }}>
                                    <h3 className="alert-link text-center mb-5">Lista de enlaces cinemáticos</h3>
                                    <b>1:</b> Type P θ=37.00° d=415.00mm a=0.00mm a=0.00° <br></br><br></br>
                                    <b>2:</b> Type R θ=126.00° d=0.00mm a=200.00mm a=0.00°<br></br><br></br>
                                    <b>3:</b> Type R θ=173.00° d=0.00mm a=200.00mm a=0.00°<br></br><br></br>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Pilotaje;