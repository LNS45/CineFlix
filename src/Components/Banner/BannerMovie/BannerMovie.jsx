import styled from "@emotion/styled";
import MovieInfo from "./MovieInfo/MovieInfo";
import { useContext } from "react";
import { MovieContext } from "../../../contexts/MovieContext";

const BannerMovie = () => {

    const {movieSelected} = useContext(MovieContext);

    const BannerMovie = styled.div`
        width: 100%;
        height: 31.25rem;
        display: flex;
        align-items: center;
        justify-content: space-around;

        /*Adaptabilidad*/

        /*TV*/
        @media screen and (min-width: 1282px) {
            & iframe{
                width: 600px;
                height: 400px;
            }
        }

        /*PC*/
        @media screen and (max-width: 1281px) {
            & iframe{
                width: 500px;
                height: 300px;
            }
        }

        /*Tablets*/
        @media screen and (max-width: 768px) {
            & {
                flex-direction: column;
                height: 37.5rem;
            }
            & iframe{
                width: 400px;
                height: 250px;
            }
        }

        /*Movil*/
        @media screen and (max-width: 482px) {
            & {
                flex-direction: column;
                height: 37.5rem;
            }
            & iframe{
                width: 300px;
                height: 250px;
                z-index: 4;
            }
        }
    `;

    return <BannerMovie>
        <MovieInfo/>
        <iframe width="560" height="315" src= {movieSelected.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </BannerMovie>
};

export default BannerMovie;
