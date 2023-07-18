import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { deleteDoc, getDocs } from 'firebase/firestore/lite';
import ref from '../../../Database/FireBaseConfig';
import { doc } from 'firebase/firestore/lite';

const FormTable = (props) => {
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
    const eliminarCategoria = async (id) => {
        try {
            await deleteDoc(doc(ref.db, "Categorias", id))
            alert("La categoria ha sido eliminada con exito :)");
        } catch (error) {
            console.log(error)
            alert("Hubo un error al eliminar la categoria")
        }
    };
    
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
                    <TableCell sx={cellStyle}>Eliminar</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                    categorias.map((fila, index) => (
                        <TableRow key={index}>
                            <TableCell>{fila.name}</TableCell>
                            <TableCell>{fila.description}</TableCell>
                            <TableCell><input type='color' value={fila.color} readOnly/></TableCell>
                            <TableCell><Button onClick={() => eliminarCategoria(fila.id)} size='small'>Eliminar</Button></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
};

export default FormTable;