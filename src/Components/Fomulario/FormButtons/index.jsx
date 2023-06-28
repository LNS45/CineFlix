import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const FormButtons = (props) => {
    const {reset, boton, location, submit} = props;
    const FormButtons = styled.div`
        width: auto;
        height: auto;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    `;
    return <FormButtons>
        <Button type="submit" color="primary" variant="outlined" onClick={submit}>Guardar</Button>
        <Button color="error" variant="outlined" onClick={reset}>Limpiar</Button>
        <Link to={location}><Button color="primary" variant="outlined">{boton}</Button></Link>
    </FormButtons>
};

export default FormButtons;