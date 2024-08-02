import React from "react";

const NovedadItem=(props)=>{

    const{title,subtitle,imagen,body}=props;

    console.log(imagen);    
    if(imagen!=''){
    return (

        <section className="holder">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} className="editImg"/>
            <div dangerouslySetInnerHTML={{ __html:body }}></div>
            <hr/>
        </section>
    )}else{

    return (

        <section className="holder">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{ __html:body }}></div>
            <hr/>
        </section>
    );}
}

export default NovedadItem;