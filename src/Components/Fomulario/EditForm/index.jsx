import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";


const EditForm = () => {
    const EditFormStyled = styled.form`
        width: 100%;
        height: 400px;
        background-color: red;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 5;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
    `;

    return <EditFormStyled>
        <AiFillCloseCircle size={"30px"} style={{marginLeft: "auto", cursor: "pointer"}}/>
        <TextField name="nombre" label="Nombre" required />
        <TextField />
        <TextField />
        <TextField />
    </EditFormStyled>
};

export default EditForm;