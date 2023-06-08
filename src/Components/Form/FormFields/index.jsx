import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';


const FormFields = () => {

    const FormFields = styled.div`
        width: 940px;
        height: auto;
        border-radius: 20px;
        margin-top: 20px;
        padding: 20px;
        box-sizing: border-box;
        background: rgba( 69, 64, 106, 0.35 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3px );
        -webkit-backdrop-filter: blur( 3px );
        border-radius: 10px;
    `;

    const labelProps = {
        style: {color: "rgba(255,255,255,0.6)"}
    }
    const inputProps = {
        input: {color: "white", background: "none"}
    }

    return <FormFields>
    <form autoComplete="false" action="POST">
        <TextField color="secondary" variant="filled" required="true" label="Titulo" margin="dense" fullWidth="true" InputLabelProps={labelProps} sx={inputProps}/>
        <TextField color="secondary" variant="filled" required="true" label="Link del video" margin="dense" fullWidth="true" InputLabelProps={labelProps} sx={inputProps}/>
        <TextField color="secondary" variant="filled" required="true" label="Link de la Portada" margin="dense" fullWidth="true" InputLabelProps={labelProps} sx={inputProps}/>
        <TextField color="secondary" variant="filled" required="true" label="Link del Icono" margin="dense" fullWidth="true" InputLabelProps={labelProps} sx={inputProps}/>
        <TextField color="secondary" variant="filled" required="true" label="Categoria" margin="dense" fullWidth="true" InputLabelProps={labelProps} sx={inputProps}/>
        <TextField color="secondary" variant="filled" required="true" label="Descripcion" margin="dense" fullWidth="true" InputLabelProps={labelProps} sx={inputProps}/>
        <TextField color="secondary" variant="filled" required="true" label="Codigo de Seguridad" margin="dense" fullWidth="true" InputLabelProps={labelProps} sx={inputProps}/>
    </form>
        
    </FormFields>
};

export default FormFields;