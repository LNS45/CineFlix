import styled from "@emotion/styled";
import Categoria from "./Categoria/Categoria";
import MovieTitle from "./MovieTitle/MovieTitle";
import MovieDescription from "./MovieDescription/MovieDescription";
import { useContext } from "react";
import { MovieContext } from "../../../../contexts/MovieContext";


const MovieInfo = () => {

    const {movieSelected} = useContext(MovieContext);

    const MovieInfo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        width: 31.25rem;
        height: 18.75rem;
        font-size: 1.6rem;
        border-radius: 10px;


        /*Adaptabilidad*/

        /*TV*/
        @media screen and (min-width: 1282px) {
            &{
                box-sizing: border-box;
                width: 600px;
                height: 300px;
                position: relative;
            }
        }

        /*PC*/
        @media screen and (max-width: 1281px) {

        }

        /*Tablets*/
        @media screen and (max-width: 768px) {
            &{
                box-sizing: border-box;
                width: 400px;
                height: 300px;
                position: relative;
            }
        }

        /*Movil*/
        @media screen and (max-width: 482px) {
            &{
                box-sizing: border-box;
                width: 300px;
                height: 300px;
                position: relative;
            }
        }
    `;

    return <MovieInfo>
        <Categoria tipo={movieSelected.category} color={movieSelected.color}/>
        <MovieTitle />
        <MovieDescription />
    </MovieInfo>
};

export default MovieInfo;