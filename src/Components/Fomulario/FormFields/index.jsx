import { TextField } from "@mui/material";
const FormFields = ({formik}) => {
    const {titulo, linkVideo, linkIcono, linkPortada, descripcion, categoria, codigoSeguridad, nombre, color} = formik.values;
    const location = window.location.pathname;

    const textFieldsPelicula = [
        {
            name: "titulo",
            label: "Titulo",
            value: titulo,
            type: "text",
            invalid: formik.touched.titulo && Boolean(formik.errors.titulo),
            multiline: false,
            helperText: formik.touched.titulo && formik.errors.titulo,
        },        {
            name: "linkVideo",
            label: "Link del Video",
            value: linkVideo,
            type: "text",
            invalid: formik.touched.linkVideo && Boolean(formik.errors.linkVideo),
            multiline: false,
            helperText: formik.touched.linkVideo && formik.errors.linkVideo,
            
        },
        {
            name: "linkPortada",
            label: "Link de la Portada",
            value: linkPortada,
            type: "text",
            invalid: formik.touched.linkPortada && Boolean(formik.errors.linkPortada),
            multiline: false,
            helperText: formik.touched.linkPortada && formik.errors.linkPortada,
            
        },
        {
            name: "linkIcono",
            label: "Link del Icono",
            value: linkIcono,
            type: "text",
            invalid: formik.touched.linkIcono && Boolean(formik.errors.linkIcono),
            multiline: false,
            helperText: formik.touched.linkIcono && formik.errors.linkIcono,
            
        },
        {
            name: "categoria",
            label: "Categoria",
            value: categoria,
            type: "text",
            invalid: formik.touched.categoria && Boolean(formik.errors.categoria),
            multiline: false,
            helperText: formik.touched.categoria && formik.errors.categoria,
            
        },
        {
            name: "descripcion",
            label: "Descripcion",
            value: descripcion,
            type: "text",
            invalid: formik.touched.descripcion && Boolean(formik.errors.descripcion),
            multiline: true,
            helperText: formik.touched.descripcion && formik.errors.descripcion,
            
        },
        {
            name: "codigoSeguridad",
            label: "Codigo de Seguridad",
            value: codigoSeguridad,
            type: "number",
            invalid: formik.touched.codigoSeguridad && Boolean(formik.errors.codigoSeguridad),
            helperText: formik.touched.codigoSeguridad && formik.errors.codigoSeguridad,
            multiline: false,
            
        }
    ];
    const textFieldsCategoria = [
        {
            name: "nombre",
            label: "Nombre",
            value: nombre,
            type: "text",
            invalid: formik.touched.nombre && Boolean(formik.errors.nombre),
            multiline: false,
            helperText: formik.touched.nombre && formik.errors.nombre,
        },
        {
            name: "descripcion",
            label: "Descripcion",
            value: descripcion,
            type: "text",
            invalid: formik.touched.descripcion && Boolean(formik.errors.descripcion),
            multiline: true,
            helperText: formik.touched.descripcion && formik.errors.descripcion,
            
        },
        {
            name: "color",
            label: "Color",
            value: color,
            type: "color",
            invalid: false,
            multiline: false,
            helperText: "",
            
        },
        {
            name: "codigoSeguridad",
            label: "Codigo de Seguridad",
            value: codigoSeguridad,
            type: "number",
            invalid: formik.touched.codigoSeguridad && Boolean(formik.errors.codigoSeguridad),
            helperText: formik.touched.codigoSeguridad && formik.errors.codigoSeguridad,
            multiline: false,
        }
    ];

    return <form onSubmit={() => formik.submit}>
        {(location.includes("/Formulario/pelicula") ? textFieldsPelicula : textFieldsCategoria).map((field, index) => {
            const {name, label, value, type, invalid, multiline, helperText} = field;
            return <TextField name={name} type={type} variant="filled" label={label} margin="dense" fullWidth={true} value={value} onChange={formik.change} error={invalid} key={index} required multiline={multiline} helperText={helperText}/>
        })} 
    </form>
};

export default FormFields;