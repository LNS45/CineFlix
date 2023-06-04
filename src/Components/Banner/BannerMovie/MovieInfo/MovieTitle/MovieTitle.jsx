
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import { useContext, useState } from "react";
import styled from "@emotion/styled";
import { IconContext } from "react-icons";
import { MovieContext } from "../../../../../contexts/MovieContext";


const MovieTitle = () => {

    const { movieSelected } = useContext(MovieContext)

    let [like, setLike] = useState(false);

    const handleLikeClick = (e) => {
        e.preventDefault();
        setLike(!like);
    };

    const MovieTitle = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 30px;
        width: 100%;
        height: 40px;
        margin: 10px 0;

        & h1{
            width: auto;
            font-weight: 700;
            color: var(--Blanco-Grisado);
            width: 100%;
            font-family: 'Prata', serif;
        }
        & .Like{
            width: 20px;
            margin: 0 10px;
            transition: .1s;
            cursor: pointer;
        }
        & .Like:hover{
            transform: scale(1.2);
        }
    `;

    return <MovieTitle>
        <h1>{movieSelected}</h1>
        <IconContext.Provider value={{ color: "red", className: 'Like'}}>
            {like === false ? <AiOutlineHeart  onClick={handleLikeClick} className="Like"/> : <AiFillHeart  onClick={handleLikeClick} className="Like"/>}
        </IconContext.Provider>
    </MovieTitle>
};

export default MovieTitle;