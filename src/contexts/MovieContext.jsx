import { createContext, useState } from 'react';

const MovieContext = createContext();

//Palabra children hace referencia a todos los componentes que seran hijos del contexto
const MovieContextProvider = ({children}) => {
    let movie = {
        id: "1",
        title: "Capitan America",
        description: "Tras tres meses de someterse a un programa de entrenamiento físico y táctico, encomiendan a Steve Rogers su primera misión como Capitán América. Armado con un escudo indestructible, emprende la guerra contra la perversa organización HYDRA.",
        cover: "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2019/12/Capitan-Am%C3%A9rica-El-primer-vengador.jpg",
        character: "https://www.nicepng.com/png/full/9-96828_captain-america-png-clipart-el-capitan-america-1.png",
        category: "Superheroes",
        color: "#6BD1FF",
        video: "https://www.youtube.com/embed/B96CZzcM1CA",
        favorite: false,
    };
    //Contexto para pelicula del inicio
    let [movieSelected, setMovieSelected] = useState(movie);
    
    return <MovieContext.Provider value={{movieSelected, setMovieSelected}}>
        {children}
    </MovieContext.Provider>

};

export { MovieContext, MovieContextProvider };