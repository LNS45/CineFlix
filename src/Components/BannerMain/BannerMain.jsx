import "./BannerMain.css"
import Categoria from "../Categoria/Categoria";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import { useState } from "react";
import { IconContext } from "react-icons";



const BannerMain = () => {
    
    let [like, setLike] = useState(false);


    return <div className="BannerMain">
        <div className="BannerMain__Elements">
            <Categoria />
            <div className='Movie__Like'>
                <h1>La Liga de la justicia</h1>
                <IconContext.Provider value={{ color: "red", className: 'Like'}}>
                {like === false ? <AiOutlineHeart  onClick={() => setLike(!like)} className="Like"/> : <AiFillHeart  onClick={() => setLike(!like)} className="Like"/>}
            </IconContext.Provider>
            </div>
            <p>Gracias a su renovada fe en la humanidad e inspirado por el acto de altruísmo de Superman, Bruce Wayne pide ayuda a su nueva aliada, Diana Prince, para enfrentar a un enemigo aún más peligroso.</p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1c66wfYbNEs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
}

export default BannerMain;