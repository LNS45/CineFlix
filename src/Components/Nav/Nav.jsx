import './Nav.css'
import Logo from '../../assets/Logo.png'
import Boton from '../Boton/Boton';

export const Nav = () => {
    return <nav>
        <a href='http://localhost:3000/CineFlix'><img src={Logo} alt='Logo'  /></a>
        <Boton/>
    </nav>
};


export default Nav; 