import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from '../pages/LandingPage';
import InicioDeSesion from '../pages/InicioDeSesion';
import Registro from '../pages/Registro';
import Pilotaje from '../pages/Pilotaje';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/inicioDeSesion" element={<InicioDeSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/pilotaje" element={<Pilotaje/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
