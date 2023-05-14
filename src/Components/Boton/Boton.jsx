import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import './Boton.css'


const Boton = () => {

    const colores = useTheme();

    return <Button variant="contained" color='primary'> 
        Nuevo Video
    </Button>
};

export default Boton;