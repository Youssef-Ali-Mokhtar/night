import navbarClasses from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( <div className={navbarClasses['navbar']}>
        <Link to="/">
            Home
        </Link>
        <Link to="/details">
            details
        </Link>
    </div> );
}

export default Navbar;