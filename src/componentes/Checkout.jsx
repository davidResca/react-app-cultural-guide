import React from 'react'
import { useContext, useState } from 'react'
import { contexto } from "../context/CartContext"
import { Link } from 'react-router-dom';
import { db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

function Checkout() {
    const { carrito, precioTotal } = useContext(contexto)
    const [ idCompra, setIdCompra ] = useState("")
    const [ mostrarModal, setMostrarModal ] = useState(false)
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        tel: "",
        email: "",
        confirmar_email: "",
    });

    const orderDate = new Date().toLocaleDateString();

    const handleChange = (e) => {
        const copia = {...usuario};
        copia[e.target.id] = e.target.value;
        setUsuario(copia);
    };

    function handleOrder() {
        const order = {
            nombre: "",
            item: carrito,
            precio: precioTotal,
            fecha: orderDate,
        };
    }

    const addOrder = (order) => {
        const doc = addDoc(collection(db, 'orders', order))
        return doc.id;
    }

    if (idCompra !== '') {
        return (
            <div className='page page__in page__center'>
                <h2 >¡Muchas gracias por tu compra {(usuario.nombre).toUpperCase()}!</h2>
                <p>Te enviamos un mail a {(usuario.email).toLowerCase()}</p>
                <p> Con tu orden de compra ID: {idCompra}. </p> 
                <p> ¡Hasta la próxima!</p>
                <Link to='/'><button>volver al inicio</button></Link>
            </div>
        )
    }

    return (
        <div className='checkout'>
            <h2>Complete con sus datos para finalizar la compra</h2>
            <form className='cart-form' action="">
                <div className='form-input'>
                    <input onChange={handleChange} placeholder="nombre..." type="text" id="nombre" value={usuario.nombre}/>
                </div>
                <div className='form-input'>
                    <input onChange={handleChange} placeholder="nombre..." type="text" id="apellido" value={usuario.apellido}/>
                </div>
                <div className='form-input'>
                    <input onChange={handleChange} placeholder="tel..." type="number" id="tel" value={usuario.tel}/>
                </div>
                <div className='form-input'>
                    <input onChange={handleChange}  placeholder="email..." type="email" id="email" value={usuario.email}/>
                </div>
                <div className='form-input'>
                    <input onChange={handleChange}  placeholder="confirmar email..." type="email" id="confirmar_email" value={usuario["confirmar_email"]}/>
                </div>
                <button>comprar</button>
            </form>
            { 
            usuario.nombre && usuario.apellido && usuario.tel && usuario.email && usuario["confirmar_email"] && (usuario.email === usuario["confirmar_email"])
                ? (<input onClick={() => { handleOrder(); setMostrarModal(true) }} type="submit" value="Proceder al pago" />) 
                : (<input className='btnconf' type="submit" value="Proceder al pago" disabled />)
            }
        </div>
    )
}

export default Checkout;