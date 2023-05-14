import './reset.css';
import './Global.css'
import {ThemeProvider } from '@mui/material/styles';
import Nav from './Components/Nav/Nav';
import darkTheme from './Theme';
import Promocional from './Components/Promocional/Promocional';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <header >
        <Nav></Nav>
      </header>
      <Promocional />
    </ThemeProvider>
  );
}

export default App;
