import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "./VideoCard/VideoCard";
import "./Carrusel.css";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import ref from "../../../../Database/FireBaseConfig";




const Carrusel = (props) => {
    const {color, tipo, pelis} = props;
    //Almacena las peliculas categorizadas en un objeto nuevo
    const pelisCategorizadas = pelis.filter(e => e.category === tipo);
    
    
    //Obtiene el width del dispositivo
    const windowSize = window.innerWidth;
    let slideConfiguration = {
        slidesToShow: 3,
        padding: "-0.625rem"
    };
    if(windowSize < 769){
        slideConfiguration.slidesToShow = 1;
        slideConfiguration.padding = "-50rem";
    };

    return <Slider className="Carrusel" slidesToShow={slideConfiguration.slidesToShow} adaptiveHeight="true" autoplaySpeed={4000} autoplay="true" centerMode="true" centerPadding={slideConfiguration.padding} focusOnSelect="true" speed={1000} >
            {pelisCategorizadas.map((peli, index) => (
                <VideoCard color={color} cover={peli.cover} personaje={peli.personaje} key={index} title={peli.title} description={peli.description} id={peli.id} category={peli.category} video={peli.video}/>
            ))}
    </Slider> 
}

export default Carrusel;
