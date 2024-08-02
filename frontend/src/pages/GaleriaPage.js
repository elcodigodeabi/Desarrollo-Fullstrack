import React from "react";

import '../styles/components/pages/GaleriaPage.css'
const GaleriaPage=(props)=>{
    return (
        <main className="holder">
        
        <div className="galery">
            <img src="images/Galeria_abogacia.jpg" alt="abogacia"/>
            <img src="images/Galeria_oficina.jfif" alt="oficinas"/>
            <img src="images/Galeria_socio.jpg" alt="socios"/>
            <img src="images/Galeria_socio2.jpg" alt="socios2"/>
        </div>
    </main>
    );
}

export default GaleriaPage;