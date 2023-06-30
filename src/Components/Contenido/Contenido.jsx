import styled from '@emotion/styled';
import CarruselContainer from './CarruselContainer';
import { useEffect } from 'react';
import {getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';
import ref from '../../Database/FireBaseConfig';

const Contenido = () => {
    
    const [categorias, setCategorias] = useState([]);

    //Para llamar cada vez que se renderiza la pagina
    useEffect(() => {
        const getCategories = async () => {
            //Respuesta a la promesa
            const data = await getDocs(ref.categoriasCollection);
            //Obtener categorias y agregarlas al estado
            setCategorias(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getCategories();
    });
    
    const Contenido = styled.section`
        position: relative;
        margin-top: 80px;
        width: 100%;
        box-sizing: border-box;
        height: auto;
        background-image: linear-gradient(258deg, rgba(39,36,68, 0.3) 0%,rgba(4,12,45, 0.3) 100%),linear-gradient(348deg, rgb(33,41,55),rgb(63,70,84));
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    `;

    return <Contenido>
        
        {//Por cada objeto de categorias se crea un Carrusel
        categorias.map((categoria, index) => (
            <CarruselContainer category={categoria} key={index}/>
        ))}
    </Contenido>
}

export default Contenido;



//INSERT INTO movies VALUES(1,"Titulo","Cover","Icono", "Categoria", "Descripcion")