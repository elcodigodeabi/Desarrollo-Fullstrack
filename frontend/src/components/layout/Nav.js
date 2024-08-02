import React from "react";
import { NavLink } from "react-router-dom";

import '../../styles/components/layout/Nav.css';


const Nav = (props)=>{
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/home" className={(navData) => (navData.isActive ? "activo" : 'none')}>Home</NavLink></li>
                    <li><NavLink to="/nosotros" className={(navData) => (navData.isActive ? "activo" : 'none')}>Nosotros</NavLink></li>
                    <li><NavLink to="/servicios" className={(navData) => (navData.isActive ? "activo" : 'none')}>Servicios</NavLink></li>
                    <li><NavLink to="/galeria" className={(navData) => (navData.isActive ? "activo" : 'none')}>Galeria</NavLink></li>
                    <li><NavLink to="/novedades" className={(navData) => (navData.isActive ? "activo" : 'none')}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={(navData) => (navData.isActive ? "activo" : 'none')}>Contacto</NavLink></li>
                </ul>
            </div>|
        </nav>
    )
}

export default Nav;