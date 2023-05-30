import styled from "@emotion/styled";
import Categoria from "../../Banner/BannerMovie/MovieInfo/Categoria/Categoria";
import Carrusel from "./Carrusel/Carrusel";

const CarruselContainer = (props) => {

    const {color, tipo} = props;

    const CarruselContainer = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    `;

    return <CarruselContainer>
        <Categoria color={color} tipo={tipo}/>
        <Carrusel color={color}/>
    </CarruselContainer>
}

export default CarruselContainer;