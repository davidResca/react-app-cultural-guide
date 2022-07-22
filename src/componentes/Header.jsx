import CartWidget from './CartWidget';
import HamIcon from "./HamIcon";
import HeaderSidebar from './HeaderSidebar';
import { useContext } from "react";
import { contexto } from "../context/CartContext";

const Header = () => {

    const { carrito } = useContext(contexto);

    return (
        <header className='header'>
            <HamIcon />
            <HeaderSidebar />
            {
                carrito.length < 1 ? "" : <CartWidget />
            }
        </header>
    )
}

export default Header;