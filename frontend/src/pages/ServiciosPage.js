import React from "react";

import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage=(props)=>{
    return ( 
    <main className="holder">
    <div className="servicios">
        <img src="images/Servicios_Familia.webp" alt="servicio_familia"/>
            <div className="info">
                <h4>Familias y Sucesiones</h4>
                <p>Lo asesoraremos en forma personal en temas vinculados a la planificación de activos y herencias, y en especial nos abocamos a la resolución de controversias familiares, fundación, reestructuración y escisión de empresas familiares..</p>
            </div>

    </div>

    <div className="servicios">
        <img src="images/Servicios_empresas.jfif" alt="servicio_empresas"/>
            <div className="info">
                <h4>Administrativo</h4>
                <p>Asesoramos a nuestros clientes en las diversas operaciones de compras públicas, ofertas públicas, obras públicas y demás contratos administrativos, así como toda clase de recursos ante los tribunales administrativos y judiciales</p>
            </div>

    </div>

    <div className="servicios">
        <img src="images/Servicios_contaduria.jfif" alt="servicio_contador"/>
            <div className="info">
                <h4>Bancario y Financiero</h4>
                <p>Brindamos asesoramiento a entidades financieras sobre cuestiones vinculadas a los préstamos comerciales o transacciones en el mercado de capitales, inversiones, fusiones, adquisiciones. Representamos a nuestros clientes en los procesos de reestructuración de sociedades, transformaciones y liquidaciones de las mismas.</p>
            </div>

    </div>
</main>

    );
}

export default ServiciosPage;