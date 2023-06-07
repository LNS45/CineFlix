import styled from "@emotion/styled";
import { useContext } from "react";
import { MovieContext } from "../../../../../contexts/MovieContext";


const VideoCard = (props) => {

    const {color, personaje, title, description, cover, category,video} = props;
    const {movieSelected, setMovieSelected} = useContext(MovieContext);
    const scroll = () => {
        const banner = document.querySelector("#Banner");
        banner.scrollIntoView({behavior: "smooth"});
    };
    
    const VideoCard = styled.div`
        position: relative;
        width: 23.75rem;
        height: 16.25rem;
        border-radius: 10px;
        transition: .1s;
        background-color: black;
        border: 2px solid ${color};
        box-shadow: 0px 0px 5px ${color}, 1px 1px 5px ${color};
        cursor: pointer;

        & img{
            border-radius: 10px;
            width: 100%;
            height: 100%;
        }
        &:hover{
            transform:rotateX(40deg);
        }
        &:hover img{
            filter: blur(1.1px);
            opacity: 30%;
        }
        &::before{
            content: "";
            position: absolute;
            top: -42px;
            left: 100px;
            width: 200px;
            height: 320px;
            background-image: url(${personaje});
            background-size: 100% 100%;
            
            background-repeat: no-repeat;
            z-index: 2;
            opacity: 0;
            transition: opacity .8s;
        }
        &:hover::before{
            opacity: 1;
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
                width: 30rem;
            }
        }

        /*Movil*/
        @media screen and (max-width: 482px) and (min-width: 0px){
            &{
                width: 20rem;
            }
        }

    `;
    //Envia los datos de la peli para actualizarse el banner
    return <VideoCard onClick={() => {
        setMovieSelected({...movieSelected, title: title, description: description, cover: cover, category: category, color: color, video: video})
        scroll()
        }}>
        <img src={cover} alt="Portada"/>
    </VideoCard>
}

export default VideoCard;
