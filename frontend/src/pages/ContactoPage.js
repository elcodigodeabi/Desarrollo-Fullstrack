import { useState } from 'react';
import '../styles/components/pages/ContactoPage.css';
import axios from 'axios';


const ContactoPage=(props)=>{

    const initialForm={
        nombre:'',
        email:'',
        telefono:'',
        mensaje:'',
    }

    const[sending,setSending]=useState(false);
    const[msg,setMsg]=useState('');
    const[formData,setFormData]=useState(initialForm);

    const handleChange=e=>{
        const{name,value}=e.target;
        setFormData(oldData=>({
            ...oldData,
            [name]:value
        }));
    }
    
    const handleSubmit=async e=>{
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response=await
        axios.post('http://localhost:3000/api/contacto',formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error===false){
            setFormData(initialForm);
        }
    }







    return (
        <main className="holder-formulario">

        <div  className="formulario">
            <h2>Contacto Rapido</h2>

            <form action='/contacto' method='post' onSubmit={handleSubmit}>

                <p>
                    <label>Nombre:</label>
                    <input type="text" name='nombre' value={formData.nombre} onChange ={handleChange}/>
                </p>

                <p>
                    <label>Email:</label>
                    <input type="email" name='email' value={formData.email} onChange ={handleChange}/>
                </p>

                <p>
                    <label>Telefono:</label>
                    <input type="text" name='telefono' value={formData.telefono} onChange ={handleChange}/>
                </p>

                <p>
                    <label>Mensaje:</label>
                    <textarea name="mensaje"  value={formData.mensaje} onChange ={handleChange}></textarea>
                </p>

                <p>
                    <input type="submit" value="Enviar"/>
                </p>

                {sending ? <p>Enviando...</p>:null}
                {msg ? <p>{msg}</p>:null}

            </form>

 
            
        </div>

        <div className="datos">
            <h2>Otros metodos de comunicacion</h2>
            <p>Tambien puede contactarse con nosotros utilizando los siguientes metodos</p>
            
            <ul>
                <li>Telefono: 12345678</li>
                <li>Email: asistelegx@estudio.com.ar</li>
                <li>Facebook: AsistLegX</li>
                <li>Twitter: @AsistLegX</li>
            </ul> 
            
        </div>

    </main>
    );
}

export default ContactoPage;