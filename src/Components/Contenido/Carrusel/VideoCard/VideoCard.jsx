import styled from "@emotion/styled";


const VideoCard = (props) => {

    const {color, personaje, portada} = props;

    const VideoCard = styled.div`
        position: relative;
        width: 380px;
        height: 260px;
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
    `;
    
    return <VideoCard>
        <img src={portada} alt="Portada"/>
    </VideoCard>
}

export default VideoCard;

/*    let estilo = {
        border: `2px solid ${props.color}`,
        boxShadow: `0px 0px 5px ${props.color}, 1px 1px 5px ${props.color}`,
    };
    let estilobefore= {
        backgroundImage: `url(${props.personaje})`,
    }; */