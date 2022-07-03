import { Link } from "react-router-dom";


const CartWidget = () => {
    return (
        <div>
            <Link to='/carrito'><span className="material-symbols-outlined cart-widget">shopping_cart</span></Link>
        </div>
    )
}

export default CartWidget;