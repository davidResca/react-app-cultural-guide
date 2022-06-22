import { Link } from "react-router-dom";


const HeaderSidebar = () => {

    return (
        <nav className='sidebar'>
            <Link to='/' className='navbar_link'>inicio</Link>
            <Link to='/products/' className='navbar_link'>tickets</Link>
            <Link to='/category/recitales' className='navbar_link'>recitales</Link>
            <Link to='/category/teatro' className='navbar_link'>teatro</Link>
        </nav>
    )
}

export default HeaderSidebar;