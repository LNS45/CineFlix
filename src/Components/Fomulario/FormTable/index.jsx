import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const FormTable = () => {

    const crearData = (nombre,descripcion) => {
        return {nombre,descripcion};
    }

    const filas = [
        crearData("Accion", "Peliculas de accion"),
        crearData("Terror", "Peliculas con las que te vas a cagar"),
        crearData("Superheroes", "Peliculas de superheroes"),
    ];
    const cellStyle = {
        color: "#FFFFFF", 
        fontWeight: "bold", 
        fontSize: '15px'
    }

    return <TableContainer sx={{marginTop: "20px"}}>
        <Table sx={{border: "2px solid green"}}>
            <TableHead>
                <TableRow>
                    <TableCell sx={cellStyle}>Categoria</TableCell>
                    <TableCell sx={cellStyle}>Descripcion</TableCell>
                    <TableCell sx={cellStyle}>Editar</TableCell>
                    <TableCell sx={cellStyle}>Eliminar</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                    filas.map((fila, index) => (
                        <TableRow key={index}>
                            <TableCell>{fila.nombre}</TableCell>
                            <TableCell>{fila.descripcion}</TableCell>
                            <TableCell><Button onClick={() => console.log("Editar activado", index)} size='small'>Editar</Button></TableCell>
                            <TableCell><Button onClick={() => console.log("Eliminar Activado", index)} size='small'>Eliminar</Button></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
};

export default FormTable;