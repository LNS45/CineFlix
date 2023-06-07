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
        @media screen and (max-width: 4000px) and (min-width: 1282px) {
            &{
                box-sizing: border-box;
                width: auto;
                height: 18.75rem;
                position: relative;
            }
        }

        /*PC*/
        @media screen and (max-width: 1281px) and (min-width: 769px) {

        }

        /*Tablets*/
        @media screen and (max-width: 768px) and (min-width: 483px) {
            &{
                box-sizing: border-box;
                width: 25rem;
                height: 18.75rem;
                position: relative;
                border: 1px solid var(--Color-Secundario);
                padding: .625rem;
            }
        }

        /*Movil*/
        @media screen and (max-width: 482px) and (min-width: 0px) {
            &{
                box-sizing: border-box;
                width: 18.75rem;
                height: 18.75rem;
                border: 1px solid var(--Color-Secundario);
                padding: .625rem;
                
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