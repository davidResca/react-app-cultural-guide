import { Link } from "react-router-dom";

const Carrito = () => {
    return (
        <div className="carrito">
            <h1>Carrito</h1>
            <p>Este es un Carrito</p>
            <Link to ="/checkout">Pagar!</Link>
        </div>

    )
}

export default Carrito;