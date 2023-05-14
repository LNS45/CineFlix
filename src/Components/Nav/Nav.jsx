import './Nav.css'
import Logo from '../../assets/Logo.png'
import Boton from '../Boton/Boton';

export const Nav = () => {
    return <nav>
        <img src={Logo} alt='Logo' />
        <Boton />
    </nav>
};


export default Nav; 