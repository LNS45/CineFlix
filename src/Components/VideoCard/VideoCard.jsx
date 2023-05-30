import "./VideoCard.css"

const VideoCard = (props) => {


    let estilo = {
        border: `2px solid ${props.color}`,
        boxShadow: `0px 0px 5px ${props.color}, 1px 1px 5px ${props.color}`,
    };
    let estilobefore= {
        backgroundImage: `url(${props.personaje})`,
    };
    
    return <div className="VideoCard" style={estilo}>
        <div style={estilobefore}></div>
        <img src={props.portada} alt="Portada"/>
    </div>
}

export default VideoCard;