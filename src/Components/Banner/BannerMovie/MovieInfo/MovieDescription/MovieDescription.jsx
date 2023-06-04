import styled from "@emotion/styled";
import { useContext } from "react";
import { MovieContext } from "../../../../../contexts/MovieContext";


const MovieDescription = () => {

    const { movieSelected } = useContext(MovieContext);

    const MovieDescription = styled.p`
        font-size: 1rem;
        line-height: 1.5;
        font-weight: 100;
        margin-bottom: 20px;
        color: var(--Blanco-Grisado);
        width: 100%;
        font-family: 'Prata', serif;
    `;

    return <MovieDescription>
        {movieSelected.description}
    </MovieDescription>
};

export default MovieDescription;