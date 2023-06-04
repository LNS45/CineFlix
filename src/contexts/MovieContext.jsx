import { createContext, useState } from 'react';

const MovieContext = createContext();

//Palabra children hace referencia a todos los componentes que seran hijos del contexto
const MovieContextProvider = ({children}) => {

    //Contexto inicial
    let [movieSelected, setMovieSelected] = useState("Hola");

    return <MovieContext.Provider value={{movieSelected, setMovieSelected}}>
        {children}
    </MovieContext.Provider>

};

export { MovieContext, MovieContextProvider };