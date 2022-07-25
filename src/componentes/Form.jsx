import React from 'react'
import { useState } from 'react';

const Form = () => {

    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
        tel: "",
        tarjeta: "",
    })

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(usuario);
    }
    
    const handleChange = (e) => {
        const copia = {...usuario};
        copia[e.target.id] = e.target.value;
        setUsuario(copia);
    }

    return (
        <form className='cart-form' action="" onSubmit={handleSubmit}>
            <div className='form-input'>
                <input onChange={handleChange}  placeholder="nombre..." type="text" id="nombre" value={usuario.nombre}/>
            </div>
            <div className='form-input'>
                <input onChange={handleChange}  placeholder="email..." type="email" id="email" value={usuario.email}/>
            </div>
            <div className='form-input'>
                <input onChange={handleChange} placeholder="tel..."  type="number" id="tel" value={usuario.tel}/>
            </div>
            <div className='form-input'>
                <input onChange={handleChange} placeholder="numero de tarjeta..."  type="number" id="tarjeta" value={usuario.tarjeta}/>
            </div>
            <button>comprar</button>
        </form>
    )
}

export default Form