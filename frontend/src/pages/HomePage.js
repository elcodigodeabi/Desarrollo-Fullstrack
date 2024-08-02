import React from "react";

import '../styles/components/pages/HomePage.css';

const HomePage=(props)=>{
    return (
        <main className="holder">
        <div>
            <img className="derecha" alt="imagen_home" src="images/home_image.webp"/>

            <h2>Bienvenido</h2>

            <aside>
               <p> Asesoramos a nuestros clientes en las diversas operaciones de compras públicas, ofertas públicas, obras públicas y demás contratos administrativos, así como toda clase de recursos ante los tribunales administrativos y judiciales que correspondan, abarcamos todas las ramas del derecho.</p>

               <p> 
                Contamos con profesionales que poseen una vasta experiencia en la materia y que han asesorado a diversas empresas con dificultades financieras en sus procesos de concurso y/o posterior quiebra.</p>
                
                Nuestros profesionales le brindaran un servicio de asesoramiento legal y representación en toda clase de procedimientos administrativos y judiciales, en los cuales se aplique la Ley de Defensa del Consumidor

                </aside>

          </div>

    </main>
    );
}

export default HomePage