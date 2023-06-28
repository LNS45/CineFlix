import { createContext, useState } from 'react';

const MovieContext = createContext();

//Palabra children hace referencia a todos los componentes que seran hijos del contexto
const MovieContextProvider = ({children}) => {
    let movie = {
        id: "1234",
        title: "Pelicula",
        description: "Descripcion jsadmfjsda s ksndaksnd saknds ndaskdnsaknd salk nsan daslkdn salkdn sadk aslkdnaslkdn lkasndksandkndksnk",
        cover: "https://www.laizquierdadiario.mx/IMG/logo/scale.jpg?1684969129",
        character: "",
        category: "Ciencia Ficcion",
        color: "",
        video: "",
        favorite: false,
    };
    //Contexto inicial
    let [movieSelected, setMovieSelected] = useState(movie);

    return <MovieContext.Provider value={{movieSelected, setMovieSelected}}>
        {children}
    </MovieContext.Provider>

};

export { MovieContext, MovieContextProvider };