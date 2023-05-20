import './reset.css';
import './Global.css'
import {ThemeProvider } from '@mui/material/styles';
import Nav from './Components/Nav/Nav';
import darkTheme from './Theme';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Nav></Nav>
      <Banner />

    </ThemeProvider>
  );
}

export default App;
