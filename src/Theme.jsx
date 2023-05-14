import { createTheme} from '@mui/material/styles';


//Creacion del tema Oscuro
const darkTheme = createTheme({
    palette: {
        primary: {
            light: 'red',
            main: '#00bd20',
            dark: '#2ae433',
            contrastText: '#fff',
        },
        secondary: {
            light: 'red',
            main: 'blue',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default darkTheme;