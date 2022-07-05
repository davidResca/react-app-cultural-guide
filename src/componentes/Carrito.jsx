import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CartContext";


const Carrito = () => {

    const {carrito } = useContext(contexto);

    const handleClick = (e) => {
        e.preventDefault();
    }


    return (
        <div className="carrito">
            <h1>Carrito</h1>
            <p>Este es un Carrito</p>
            <Link to ="/checkout">Pagar!</Link>
        </div>

    )
}

export default Carrito;