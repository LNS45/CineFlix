import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import Boton from '../Boton/Boton';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

export const Nav = () => {
    const location = useLocation();

    const Nav = styled.nav`
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 5rem;
        background-color: var(--Negro);
        border-bottom: 2px solid var(--Color-Primario);
        display: flex;
        align-items: center;
        justify-content: space-around;
    `;

    const NavImg = styled.img`
        width: 9.375rem;
        height: 3.125rem;
    `;

    return <Nav>
        <Link to='/'><NavImg src={Logo} alt='Logo'  /></Link>
        {   //No mostrar boton si esta en la ruta del formulario
            (location.pathname === "/") ? <Boton/> : <></>
        }
        
    </Nav>
};


export default Nav; 