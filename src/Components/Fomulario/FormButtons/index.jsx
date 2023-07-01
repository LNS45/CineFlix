import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const FormButtons = (props) => {
    const {reset, boton, location, submit} = props;
    const FormButtons = styled.div`
        width: 100%;
        height: auto;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

            /*Adaptabilidad*/

        /*TV*/
        @media screen and (max-width: 4001px) and (min-width: 1282px){

        }
        /*PC*/
        @media screen and (max-width: 1281px) and (min-width: 769px){
            &{
                
            }
        }

        /*Tablets*/
        @media screen and (max-width: 768px) and (min-width: 483px){
            &{
                
            }
        }

        /*Movil*/
        @media screen and (max-width: 482px) and (min-width: 0px){
            & {
                width: 100%;
                flex-direction: column;
                gap: 10px;
                align-items: center;
                
            }
        }
    `;
    return <FormButtons>
        <Button type="submit" color="primary" variant="outlined" onClick={submit}>Guardar</Button>
        <Button color="error" variant="outlined" onClick={reset}>Limpiar</Button>
        <Link to={location}><Button color="primary" variant="outlined">{boton}</Button></Link>
    </FormButtons>
};

export default FormButtons;