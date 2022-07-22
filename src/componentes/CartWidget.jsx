import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from '../context/CartContext'

const CartWidget = () => {

    const { cantidadTotal } = useContext(contexto);

    return (
        <div>
            <Link to='/carrito'><span className="material-symbols-outlined cart-widget">shopping_cart</span><span>{cantidadTotal}</span></Link>
        </div>
    )
}

export default CartWidget; 