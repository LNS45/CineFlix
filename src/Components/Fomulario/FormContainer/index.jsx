import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";
import PeliForm from "../PeliForm";
import CatForm from "../CatForm";

const FormContainer = () => {

    const StyledFormContainer = styled.div`
        width: 58.75rem;
        height: auto;
        border-radius: 20px;
        margin-top: 20px;
        padding: 20px;
        box-sizing: border-box;
        background: rgba( 69, 64, 106, 0.35 );
        box-shadow: 0 3px 10px 0 #2ae433;
        backdrop-filter: blur( 3px );
        -webkit-backdrop-filter: blur( 3px );
        border-radius: 10px;
        margin-bottom: 50px;
        position: relative;

                /*Adaptabilidad*/

        /*TV*/
        @media screen and (max-width: 4001px) and (min-width: 1282px){

        }
        /*PC*/
        @media screen and (max-width: 1281px) and (min-width: 769px){
            &{
                width: 43.75rem;
            }
        }

        /*Tablets*/
        @media screen and (max-width: 768px) and (min-width: 483px){
            &{
                width: 28.125rem;
            }
        }

        /*Movil*/
        @media screen and (max-width: 482px) and (min-width: 0px){
            &{
                width: 21.875rem;
            }
        }
    `;
    return <StyledFormContainer>
        <Routes>
            <Route path="pelicula" element={<PeliForm />}/>
            <Route path="categoria" element={<CatForm />}/>
        </Routes>
    </StyledFormContainer>
};

export default FormContainer;