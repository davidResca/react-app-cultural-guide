import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from './CartContext'

const CartWidget = () => {

    const resultado = useContext(contexto);

    return (
        <div>
            <Link to='/carrito'><span className="material-symbols-outlined cart-widget">shopping_cart</span><span>{resultado.cantidadTotal}</span></Link>
        </div>
    )
}

export default CartWidget; 