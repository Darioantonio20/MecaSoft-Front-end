import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from '../pages/LandingPage';
import InicioDeSesion from '../pages/InicioDeSesion';
import Registro from '../pages/Registro';
import Pilotaje from '../pages/Pilotaje';
import Usuarios from '../pages/Usuarios';
import Solicitudes from '../pages/Solicitudes';
import Historial from '../pages/Historial';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inicioDeSesion" element={<InicioDeSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/pilotaje" element={<Pilotaje/>} />
          <Route path="/usuarios" element={<Usuarios/>} />
          <Route path="/solicitudes" element={<Solicitudes/>} />
          <Route path="/historial" element={<Historial/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
