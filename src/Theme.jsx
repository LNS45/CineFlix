import { createTheme } from '@mui/material/styles';


//Creacion del tema Oscuro
const darkTheme = createTheme({
    palette: {
        primary: {
            light: 'red',
            main: '#00bd20',
            dark: '#2ae433',
            contrastText: 'black',
        },
        secondary: {
            light: 'red',
            main: '#FFFFFF',
            dark: '#268eed  ',
            contrastText: '#FFFFFF',
        },
    },
});


export default darkTheme;