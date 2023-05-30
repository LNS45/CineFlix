import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCard from "./VideoCard/VideoCard";
import "./Carrusel.css";

//Estructura
//{title: "", categoria: "", color: "", portada: "", personaje: ""}
const Pelis = [
    {title: "Capitan America", categoria: "Superheroes", color: "#6BD1FF", portada: "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2019/12/Capitan-Am%C3%A9rica-El-primer-vengador.jpg", personaje: "https://www.nicepng.com/png/full/9-96828_captain-america-png-clipart-el-capitan-america-1.png"},
    {title: "Five Nights at Fredys", categoria: "Terror", color: "#6B5BE2", portada: "https://www.nintenderos.com/wp-content/uploads/2023/05/Five-Nights-At-Freddys.jpg", personaje: "https://i.pinimg.com/originals/f9/5f/12/f95f124e7fcc9b35f424e760b7a1854b.png"},
    {title: "Dargon Ball Super Broly", categoria: "Animacion", color: "#DC6EBE", portada: "https://www.elsoldeacapulco.com.mx/incoming/mbjyrl-dragon-ball-super-broly.jpg/ALTERNATES/LANDSCAPE_960/Dragon-Ball-Super-Broly.jpg", personaje: "https://i.pinimg.com/originals/45/ab/54/45ab54f605501d22a84f0d465209e0a6.png"},
    {title: "The Super Mario Bros", categoria: "Animacion", color: "#DC6EBE", portada: "https://tierragamer.com/wp-content/uploads/2022/10/peach-filtrada-1024x537.jpg", personaje: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIZ1S1MajRUUG0SfOwPjCKAS26XRZVUbZn4-aB6XpkVOECftCjQ5Ku9cN2DHIcj39aV1OM2ZHxxQpFLc5lEolNnK9fR2TtZEIObTOY4IGCKoYCPGGVcOB0WmfRj6yAJgPgfcq7UVp6VhyYjsztvRI4PGFc-mh0IKb_Ca285Ip6qnRo7efvHvBcOmDE/s1600/Imagenes-png-fondo-transparente-super-mario-the-movie%20%281%29.png"}
];


const Carrusel = (props) => {
    const {color} = props;

    return <Slider className="Carrusel" slidesToShow={3} adaptiveHeight="true" autoplaySpeed={3000} autoplay="true" centerMode="true" centerPadding="-10px" focusOnSelect="true" speed={1000} >
            {Pelis.map((peli, index) => (
                <VideoCard color={color} portada={peli.portada} personaje={peli.personaje} key={index}/>
            ))}
    </Slider> 
}

export default Carrusel;
