import CartWidget from './CartWidget';
import HeaderAsideMenu from './HeaderAsideMenu';
import HamBtn from './HamBtn';

const Header = () => {
    return (
        <nav className="navbar">
            <HamBtn />
            <HeaderAsideMenu />
            <CartWidget />
        </nav>
    )
}

export default Header;