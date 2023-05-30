import styled from '@emotion/styled';
import Carrusel from './Carrusel/Carrusel';

const Contenido = () => {

    const Contenido = styled.section`
        position: relative;
        margin-top: 80px;
        width: 100%;
        height: 700px;
        background-image: linear-gradient(258deg, rgba(39,36,68, 0.3) 0%,rgba(4,12,45, 0.3) 100%),linear-gradient(348deg, rgb(33,41,55),rgb(63,70,84));
        display: flex;
        justify-content: center;
    `;

    return <Contenido>
        <Carrusel />
    </Contenido>
}

export default Contenido;