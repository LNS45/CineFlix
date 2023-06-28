import Nav from "../Components/Nav/Nav";
import FormContainer from "../Components/Form";
import Footer from "../Components/Footer/Footer";
import { FormContextProvider } from "../contexts/FormContext";

const Form = () => {


    return <>
        <Nav />
        <FormContextProvider>
            <FormContainer />
        </FormContextProvider>
        <Footer />
    </>

}

export default Form;
