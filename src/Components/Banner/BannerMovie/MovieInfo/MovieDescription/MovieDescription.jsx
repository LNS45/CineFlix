import styled from "@emotion/styled";


const MovieDescription = () => {

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
        Gracias a su renovada fe en la humanidad e inspirado por el acto de altruísmo de Superman, Bruce Wayne pide ayuda a su nueva aliada, Diana Prince, para enfrentar a un enemigo aún más peligroso.
    </MovieDescription>
};

export default MovieDescription;