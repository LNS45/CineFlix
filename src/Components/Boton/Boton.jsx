import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Boton = () => {
    return <Link to={"/Formulario/pelicula"}>
            <Button variant="contained" color='primary'> 
                Nuevo Video
            </Button>
        </Link>
};

export default Boton;