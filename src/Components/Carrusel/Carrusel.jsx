import Slider from "react-slick";
import VideoCard from "../VideoCard/VideoCard";
import "./Carrusel.css";


const Carrusel = () => {
    return <Slider className="Carrusel" slidesToShow={3} >
            <VideoCard color="#6BD1FF" portada="https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2019/12/Capitan-Am%C3%A9rica-El-primer-vengador.jpg" personaje=""/>
            <VideoCard color="#6B5BE2" portada="https://www.nintenderos.com/wp-content/uploads/2023/05/Five-Nights-At-Freddys.jpg" personaje="https://i.pinimg.com/originals/f9/5f/12/f95f124e7fcc9b35f424e760b7a1854b.png"/>
            <VideoCard color="#6BD1FF" portada="https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2019/12/Capitan-Am%C3%A9rica-El-primer-vengador.jpg" personaje=""/>
            <VideoCard color="#6B5BE2" portada="https://www.nintenderos.com/wp-content/uploads/2023/05/Five-Nights-At-Freddys.jpg" personaje="https://i.pinimg.com/originals/f9/5f/12/f95f124e7fcc9b35f424e760b7a1854b.png"/>
    </Slider> 
}

export default Carrusel;