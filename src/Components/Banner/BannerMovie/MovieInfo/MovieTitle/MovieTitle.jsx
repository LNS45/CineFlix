
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
        height: auto;
        margin: 15px 0;
        line-height: 1.3;

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

        /*Adaptabilidad*/

        /*TV*/
        @media screen and (max-width: 4001px) and (min-width: 1282px){

        }

        /*PC*/
        @media screen and (max-width: 1281px) and (min-width: 769px){

        }

        /*Tablets*/
        @media screen and (max-width: 768px) and (min-width: 483px){
            &{
                margin-top: 3.125rem;
            }
        }

        /*Movil*/
        @media screen and (max-width: 482px) and (min-width: 0px){
            &{
                font-size: 1.25rem;
                margin-top: 3.125rem;
            }
        }

    `;

    return <MovieTitle>
        <h1>{movieSelected.title}</h1>
        <IconContext.Provider value={{ color: "red", className: 'Like'}}>
            {like === false ? <AiOutlineHeart  onClick={handleLikeClick} className="Like"/> : <AiFillHeart  onClick={handleLikeClick} className="Like"/>}
        </IconContext.Provider>
    </MovieTitle>
};

export default MovieTitle;