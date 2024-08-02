import { BrowserRouter,Routes,Route } from "react-router-dom";

import React from "react";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import GaleriaPage from './pages/GaleriaPage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ServiciosPage from './pages/ServiciosPage';

import '../src/App.css';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="home" element={<HomePage />}/>
          <Route path="nosotros" element={<NosotrosPage />}/>
          <Route path="servicios" element={<ServiciosPage/>}/>
          <Route path="galeria" element={<GaleriaPage/>}/>
          <Route path="novedades" element={<NovedadesPage/>}/>
          <Route path="contacto" element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
