import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "./VideoCard/VideoCard";
import "./Carrusel.css";




const Carrusel = (props) => {
    const {color, pelis} = props;

    return <Slider className="Carrusel" slidesToShow={3} adaptiveHeight="true" autoplaySpeed={3000} autoplay="true" centerMode="true" centerPadding="-10px" focusOnSelect="true" speed={1000} >
            {pelis.map((peli, index) => (
                <VideoCard color={color} portada={peli.portada} personaje={peli.personaje} key={index} title={peli.title}/>
            ))}
    </Slider> 
}

export default Carrusel;
