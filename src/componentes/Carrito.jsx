import { useContext } from "react";
import { contexto } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartListItem from "./CartListItem.jsx";


const Carrito = () => {

    const { carrito, precioTotal, eliminarProducto, vaciarCarrito } = useContext(contexto);

    console.log('EN CARRITO: ', carrito);

    return (
        <div className="carrito">
            <h1 className="cart-title">Cart</h1>
            { 
            carrito.length < 1 ? 
            <div className="cart-empty-modal">
                <p>No tienes ningún producto en el carrito, deseas comprar algo?</p>
                <Link to ="/products">Ver Productos</Link>
            </div> :
            <div className="cart-items-container">
                <CartListItem productos={carrito} eliminarProducto={eliminarProducto} />
                <div className="cart-btn-container">
                    <p className="cart-total-price">TOTAL ${precioTotal}</p>
                    <button className="cart-delete" onClick={()=>vaciarCarrito()}>Delete Cart</button>
                </div>
                <Link to ="/checkout">Pagar!</Link>
            </div>
            }
        </div>

    )
}

export default Carrito;