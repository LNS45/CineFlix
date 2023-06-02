import './reset.css';
import './Global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ThemeProvider } from '@mui/material/styles';
import darkTheme from './Theme';
import Home from './pages/Home';
import Form from './pages/Form';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path='/Form' element={<Form />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
