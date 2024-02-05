import React, { useState, useEffect } from 'react';
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

    return (
        <>
        <NavBar />
        <div className="App">
            <h1>CSS Range Slider</h1>
            <input 
                type="range" 
                value={value} 
                onChange={handleInputChange} 
                style={{ 
                    '--thumb-size': calculateSize(value)
                }}
            />
            <div id="h4-container">
                <div id="h4-subcontainer">
                    <h4 style={{ 
                        transform: `translateX(-50%) scale(${1 + (value / 100)})`, 
                        left: `${value}%` 
                    }}>
                        {value}
                        <span></span>
                    </h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default Pilotaje;