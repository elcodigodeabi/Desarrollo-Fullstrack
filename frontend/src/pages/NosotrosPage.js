import React from "react";

import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage=(props)=>{
    return (
<main className="holder">
        <div className ="historia">

            <h2>Historia</h2>
            <p>Desde sus comienzos el funcionamiento del Estudio se proyectó con una destacada y extensa actividad en el asesoramiento de empresas, especialmente de seguro, agropecuarias, comerciales, industriales y médicas, que se distingue por la idoneidad de sus profesionales y el compromiso ineludible de concretar resultados satisfactorios obrando con lealtad, probidad y excelencia.
            </p>

<p>
En el mundo de los negocios y en el ámbito privado las empresas, las organizaciones y los particulares necesitan asesoramiento para resolver las diversas cuestiones que se suscitan a diario con las autoridades gubernamentales, así como con el amplio universo de compañías e individuos con los que diariamente están llamadas a interactuar.

            </p>
            <h2>Staff</h2>
            <div className="staff">


                <div className="empleado">
                    <img src="images/Nosotros_fundador.jfif" alt="imagen_fundador"/>
                    <h5>Luis Ricatti</h5>
                    <h6>Fundador</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa exercitationem, iure quo corporis placeat amet ullam dolore animi deserunt? Unde, adipisci laudantium aperiam architecto earum distinctio. Est, quidem! Iure.</p>

                </div>

                <div className="empleado">
                    <img src="images/Nosotros_abogada.jfif" alt="imagen_empleado"/>
                    <h5>Lucia Perez</h5>
                    <h6>Abogada</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa exercitationem, iure quo corporis placeat amet ullam dolore animi deserunt? Unde, adipisci laudantium aperiam architecto earum distinctio. Est, quidem! Iure.</p>

                </div>

                <div className="empleado">
                    <img src="images/Nosotros_abogado.webp" alt="imagen_empleado"/>
                    <h5>Mariano Tolosky</h5>
                    <h6>Abogado</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa exercitationem, iure quo corporis placeat amet ullam dolore animi deserunt? Unde, adipisci laudantium aperiam architecto earum distinctio. Est, quidem! Iure.</p>

                </div>

                <div className="empleado">
                    <img src="images/Nosotros_contador.webp" alt="imagen_contador"/>
                    <h5>Nicolas Carmona</h5>
                    <h6>Contador</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa exercitationem, iure quo corporis placeat amet ullam dolore animi deserunt? Unde, adipisci laudantium aperiam architecto earum distinctio. Est, quidem! Iure.</p>

                </div>

                <div className="empleado">
                    <img src="images/Nosotros_rrhh.jpg" alt=""/>
                    <h5>Esteban Hoffman</h5>
                    <h6>Recuros Humanos</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa exercitationem, iure quo corporis placeat amet ullam dolore animi deserunt? Unde, adipisci laudantium aperiam architecto earum distinctio. Est, quidem! Iure.</p>

                </div>

            </div>
           
        </div>
    </main>
    );
}

export default NosotrosPage;