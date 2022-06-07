import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div className="navbar__links">
            <a className="navbar__links--link" href="#">inicio</a>
            <a className="navbar__links--link" href="#">comprá tus entradas</a>
            <a className="navbar__links--link" href="#">beneficios</a>
            <a className="navbar__links--link" href="#">nosotros</a>
            <CartWidget />
        </div>
    )
}
export default Navbar;
