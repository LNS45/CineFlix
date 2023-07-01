import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore/lite';
import ref from '../../../Database/FireBaseConfig';

const FormTable = () => {
    
    const [categorias, setCategorias] = useState([]);
    //Para llamar cada vez que se actualice la variable categorias
    useEffect(() => {
        const getCategories = async () => {
            //Respuesta a la promesa
            const data = await getDocs(ref.categoriasCollection);
            //Obtener categorias y agregarlas al estado
            setCategorias(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getCategories();
    }, [categorias]);
    
    
    const cellStyle = {
        color: "#FFFFFF", 
        fontWeight: "bold", 
        fontSize: '15px'
    }

    return <TableContainer sx={{marginTop: "20px"}}>
        <Table sx={{border: "2px solid white"}}>
            <TableHead>
                <TableRow>
                    <TableCell sx={cellStyle}>Categoria</TableCell>
                    <TableCell sx={cellStyle}>Descripcion</TableCell>
                    <TableCell sx={cellStyle}>Color</TableCell>
                    <TableCell sx={cellStyle}>Editar</TableCell>
                    <TableCell sx={cellStyle}>Eliminar</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                    categorias.map((fila, index) => (
                        <TableRow key={index}>
                            <TableCell>{fila.name}</TableCell>
                            <TableCell>{fila.description}</TableCell>
                            <TableCell><input type='color' value={fila.color}/></TableCell>
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