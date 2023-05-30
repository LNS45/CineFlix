import Logo from '../../assets/Logo.png'
import Boton from '../Boton/Boton';
import styled from '@emotion/styled';

export const Nav = () => {

    const Nav = styled.nav`
        position: fixed;
        top: 0;
        z-index: 3;
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
        <a href='http://localhost:3000/CineFlix'><NavImg src={Logo} alt='Logo'  /></a>
        <Boton/>
    </Nav>
};


export default Nav; 