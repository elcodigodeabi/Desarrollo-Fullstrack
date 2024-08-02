import React from "react";
import '../../styles/components/layout/Header.css';


const Header = (props)=>{
    return (
        <header className="holder">
            <div className="holder">
                <img src="images/icono.jpg" width="200" id="logo" alt="AsisteLeg X"/>
                <h1>AsistLeg X</h1>
            </div>        
        </header>
    )
}

export default Header;