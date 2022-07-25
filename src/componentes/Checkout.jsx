import { Link } from 'react-router-dom';
import { useContext, useState } from 'react'
import { contexto } from "../context/CartContext"
import { db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Form from './Form';

function Checkout() {
    const { carrito, precioTotal, vaciarCarrito } = useContext(contexto);
    const [ ordenId, setOrdenId ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const [usuario, setUsuario] = useState({
        nombre: "",
        apellido: "",
        tel: "",
        email: "",
        confirmar_email: "",
    });

    const { nombre, apellido, tel, email } = usuario;

    const handleChange = (e) => {
        const { id, value } = e.target;
        const copia = {...usuario};
        copia[id] = value;
        setUsuario(copia);
    };
    //console.log(usuario);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
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
            setOrdenId(response.id);
            vaciarCarrito();
        })
        .finally(setLoading(false));
    }

    if(ordenId !==""){
        return(
        <div className='checkout'>
                <h2>Muchas gracias por tu compra {(nombre)}!</h2>
                <p>Te llegará un mail a {(email)}</p>
                <p> ¡Hasta la próxima!</p>
                <Link to='/'><button>volver al inicio</button></Link>
            </div>
        )
    }
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