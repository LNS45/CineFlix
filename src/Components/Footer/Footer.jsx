import styled from "@emotion/styled";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Credits from "./Credits/Credits";

const Footer = () => {
    const Footer = styled.section`
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top:  2px solid var(--Color-Primario);
        justify-content: space-evenly;

        /*Tablets*/
        @media screen and (max-width: 768px) and (min-width: 483px){

        }

        /*Movil*/
        @media screen and (max-width: 482px) and (min-width: 0px){
            flex-direction: column;
        }

    `;
    const FooterImg = styled.img`
        width: 150px;
        height: 50px;
    `;


    return <Footer>
        <Link to='/'><FooterImg src={Logo} alt='Logo'  /></Link>
        <Credits />
    </Footer>
};

export default Footer;