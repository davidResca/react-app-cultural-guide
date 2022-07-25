import React from 'react'
import Form from './Form';
import { useContext, useState } from 'react'
import { contexto } from "../context/CartContext"
import { Link } from 'react-router-dom';
import { db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Checkout() {
    const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(contexto)
    const [ idCompra, setIdCompra ] = useState("")
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        tel: "",
        email: "",
        confirmar_email: "",
    });

    const { nombre, apellido, tel, email, confirmar_email } = usuario;


    const handleChange = (e) => {
        const { id, value } = e.target;
        const copia = {...usuario};
        copia[id] = value;
        setUsuario(copia);
    };
    //console.log(usuario);

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: {
                nombre: nombre,
                apellido: apellido,
                telefono: tel,
                email: email,
            },
            carrito,
            precio: precioTotal,
            fecha: serverTimestamp(),
        };

        const ref = collection(db, 'ordenes');
        
        addDoc(ref, orden)
        .then((response) => {
            console.log(response)
        });

    }

    /* if (idCompra !== '') {
        return (
            <div className='checkout'>
                <h2 >¡Muchas gracias por tu compra {(usuario.nombre)}!</h2>
                <p>Te enviamos un mail a {(usuario.email)}</p>
                <p> Con tu orden de compra ID: {idCompra}. </p> 
                <p> ¡Hasta la próxima!</p>
                <Link to='/'><button>volver al inicio</button></Link>
            </div>
        )
    } */
    return (
        <div className='checkout'>
            <h2>Complete con sus datos para finalizar la compra</h2>
            < Form 
                handleChange = {handleChange} 
                usuario = {usuario}
                handleSubmit = { handleSubmit }
            />
        </div>
    )
}

export default Checkout;