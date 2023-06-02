import styled from '@emotion/styled';
import CarruselContainer from './CarruselContainer';

const Contenido = () => {
    

    const categorias = [
        {id: "1", tipo: "Superheroes", color: "#6BD1FF"},
        {id: "2", tipo: "Terror", color:"#6B5BE2"},
        {id: "3", tipo: "Ciencia Ficcion", color:"#00C86F"},
        {id: "4", tipo:"Animacion", color: "#DC6EBE"},
        {id: "5", tipo: "Accion", color: "#e63535"}
    ];

    const Contenido = styled.section`
        position: relative;
        margin-top: 80px;
        width: 100%;
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
            <CarruselContainer color={categoria.color} tipo={categoria.tipo} key={index}/>
        ))}
    </Contenido>
}

export default Contenido;



//INSERT INTO movies VALUES(1,"Titulo","Cover","Icono", "Categoria", "Descripcion")