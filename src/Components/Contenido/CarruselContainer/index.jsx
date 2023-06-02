import styled from "@emotion/styled";
import Categoria from "../../Banner/BannerMovie/MovieInfo/Categoria/Categoria";
import Carrusel from "./Carrusel/Carrusel";

const CarruselContainer = (props) => {

    //Estructura
    //{title: "", categoria: "", portada: "", personaje: ""}
    const Pelis = [
        {title: "Capitan America", categoria: "Superheroes", portada: "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2019/12/Capitan-Am%C3%A9rica-El-primer-vengador.jpg", personaje: "https://www.nicepng.com/png/full/9-96828_captain-america-png-clipart-el-capitan-america-1.png"},
        {title: "Five Nights at Fredys", categoria: "Terror", portada: "https://www.nintenderos.com/wp-content/uploads/2023/05/Five-Nights-At-Freddys.jpg", personaje: "https://i.pinimg.com/originals/f9/5f/12/f95f124e7fcc9b35f424e760b7a1854b.png"},
        {title: "Dragon Ball Super Broly", categoria: "Animacion", portada: "https://www.elsoldeacapulco.com.mx/incoming/mbjyrl-dragon-ball-super-broly.jpg/ALTERNATES/LANDSCAPE_960/Dragon-Ball-Super-Broly.jpg", personaje: "https://i.pinimg.com/originals/45/ab/54/45ab54f605501d22a84f0d465209e0a6.png"},
        {title: "The Super Mario Bros", categoria: "Animacion", portada: "https://tierragamer.com/wp-content/uploads/2022/10/peach-filtrada-1024x537.jpg", personaje: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIZ1S1MajRUUG0SfOwPjCKAS26XRZVUbZn4-aB6XpkVOECftCjQ5Ku9cN2DHIcj39aV1OM2ZHxxQpFLc5lEolNnK9fR2TtZEIObTOY4IGCKoYCPGGVcOB0WmfRj6yAJgPgfcq7UVp6VhyYjsztvRI4PGFc-mh0IKb_Ca285Ip6qnRo7efvHvBcOmDE/s1600/Imagenes-png-fondo-transparente-super-mario-the-movie%20%281%29.png"},
        {title: "Star Wars: Episodio III La Venganza de los Sith", categoria: "Ciencia Ficcion", portada: "https://javipas.com/wp-content/uploads/2015/11/star-wars-episode-iii-revenge-sith.jpg", personaje: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/df8bo9v-a513243b-3624-4a3c-b742-03c736cd2fc9.png/v1/fill/w_760,h_1052/darth_vader_obi_wan_kenobi_serie_png_by_kevingame_2_df8bo9v-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc3MSIsInBhdGgiOiJcL2ZcLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYVwvZGY4Ym85di1hNTEzMjQzYi0zNjI0LTRhM2MtYjc0Mi0wM2M3MzZjZDJmYzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.O7-aMNgGgxfNZPxuJLRtwcY1DbS9ioqe6eondIozKeI"},
        {title: "Spider-Man Across The Spiderverse", categoria: "Superheroes", portada: "https://images.thedirect.com/media/article_full/spider-verse-2-trailer.jpg", personaje: "https://img1.picmix.com/output/stamp/normal/8/7/0/3/1793078_3adac.png"},
        {title: "Deadpool 1", categoria: "Superheroes", portada: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4437E3CC8B9CC333FB6A957AE2DEDA2C542737E96664D2B09342F1F6F9170C43/scale?width=1200&aspectRatio=1.78&format=jpeg", personaje: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/da0clca-0b3c33fa-7fab-4b03-8f33-a04b1565b654.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZGEwY2xjYS0wYjNjMzNmYS03ZmFiLTRiMDMtOGYzMy1hMDRiMTU2NWI2NTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tcYZWLUS1QG_8CzbRPvistwwPW3b7mqLmMaqUthXGA8"},
        {title: "Venom", categoria: "Superheroes", portada: "https://www.revistabrooke.com/wp-content/uploads/2018/10/venom-2018-portada-e1538837870247.jpg", personaje: "https://i.pinimg.com/originals/f8/62/68/f862683a69bd391673c084b63bfa37f4.png"},
        {title: "Alien", categoria: "Terror", portada: "https://www.economiadigital.es/tendenciashoy/wp-content/uploads/2022/02/Alien-covenant-fue-la-ultima-entrega-firmada-por-Ridley-Scott.jpg", personaje: "https://i.pinimg.com/originals/10/c9/9c/10c99cbbf47f78ead5129fdbd0c113ab.png"},
        {title: "It: Chapter Two", categoria: "Terror", portada: "https://i0.wp.com/lascronicasdedeckard.com/wp-content/uploads/2019/09/It-Cap%C3%ADtulo-2-Portada-Las-Cr%C3%B3nicas-de-Deckard.jpg?fit=830%2C467&ssl=1", personaje: "https://static.vecteezy.com/system/resources/previews/020/994/599/original/realistic-red-balloon-illustration-on-isolated-background-png.png"},
        {title: "Star Wars: Episodio VI El retorno del Jedi", categoria: "Ciencia Ficcion", portada: "https://www.laizquierdadiario.mx/IMG/logo/scale.jpg?1684969129", personaje: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f465c1fd-92a5-48fd-b498-c80d0200a888/deis5j5-5a42dd1a-7f2c-44d6-bf5b-94f7d264133c.png/v1/fill/w_347,h_400/luke_skywalker_render_by_gio3kyt_deis5j5-400t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIzMiIsInBhdGgiOiJcL2ZcL2Y0NjVjMWZkLTkyYTUtNDhmZC1iNDk4LWM4MGQwMjAwYTg4OFwvZGVpczVqNS01YTQyZGQxYS03ZjJjLTQ0ZDYtYmY1Yi05NGY3ZDI2NDEzM2MucG5nIiwid2lkdGgiOiI8PTM2NjgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iXuAeJIY9ybPE8VVmkTpgNjI9zFUg0P1WvPILdJtxP8"},
        {title: "", categoria: "", portada: "", personaje: ""},
        {title: "", categoria: "", portada: "", personaje: ""}

    ];

    const {color, tipo} = props;
    //Almacena las peliculas categorizadas en un objeto nuevo
    const pelisCategorizadas = Pelis.filter(e => e.categoria === tipo)

    const CarruselContainer = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    `;
    
    

    return <CarruselContainer>
        <Categoria color={color} tipo={tipo}/>
        <Carrusel color={color} pelis={pelisCategorizadas}/>
    </CarruselContainer>
}

export default CarruselContainer;