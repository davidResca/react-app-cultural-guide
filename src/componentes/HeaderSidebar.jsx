import { Link, NavLink } from "react-router-dom";


const HeaderSidebar = () => {

    return (
        <nav className='sidebar'>
            <NavLink to='/' className='navbar_link'>inicio</NavLink>
            <NavLink to='/products/' className='navbar_link'>tickets</NavLink>
            <NavLink to='/category/recitales' className='navbar_link'>recitales</NavLink>
            <NavLink to='/category/teatro' className='navbar_link'>teatro</NavLink>
            <NavLink to='/category/carrito' className='navbar_link'>carrito</NavLink>
        </nav>
    )
}

export default HeaderSidebar;