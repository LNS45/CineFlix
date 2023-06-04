import Nav from "../Components/Nav/Nav";
import Banner from "../Components/Banner/Banner";
import Contenido from "../Components/Contenido/Contenido";
import Footer from "../Components/Footer/Footer";
import { MovieContextProvider } from "../contexts/MovieContext";


const Home = () => {

    return <>
        <Nav />
        <MovieContextProvider>
            <Banner />
            <Contenido />
        </MovieContextProvider>
        <Footer />
    </>

};

export default Home;