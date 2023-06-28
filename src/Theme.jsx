import { createTheme, } from '@mui/material/styles';
import { green, blue, red} from '@mui/material/colors';

//Creacion del tema Oscuro
const darkTheme = createTheme({
    palette: {
        primary: {main: "#2ae433"},
        secondary: {main: blue[700]},
        text: {
            primary: "#2ae433",
            secondary: green[100]
        },
        error:{
            main: red['A400']
        }
    },
});



export default darkTheme;