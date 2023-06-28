import styled from "@emotion/styled";
import Nav from "../Nav/Nav";
import FormContainer from "./FormContainer";
import Footer from "../Footer/Footer";

const Formulario = () => {

    const StyledFormulario = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        margin-top: 4.875rem;
        padding: 30px 40px;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        background-image: linear-gradient(258deg, rgba(39,36,68, 0.3) 0%,rgba(4,12,45, 0.3) 100%),linear-gradient(348deg, rgb(33,41,55),rgb(63,70,84));
    `;  
    return <StyledFormulario>
        <Nav />
        <FormContainer />
        <Footer />
    </StyledFormulario>
};

export default Formulario;