import CartWidget from './CartWidget';
import HamIcon from "./HamIcon";
import HeaderSidebar from './HeaderSidebar';

const Header = () => {
    return (
        <header className='header'>
            <HamIcon />
            <HeaderSidebar />
            <CartWidget />
        </header>
    )
}

export default Header;