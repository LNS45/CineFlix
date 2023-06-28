import FormTitle from "../FormTitle";
import FormFields from "../FormFields";
import FormButtons from "../FormButtons";
import { useFormik } from "formik";
import { peliculaConfig } from "../InputsConfig";

const PeliForm = () => {
    const formik = useFormik({
        initialValues: {
            titulo: "",
            linkVideo: "",
            linkIcono: "",
            linkPortada: "",
            categoria: "",
            descripcion: "",
            codigoSeguridad: "",
        },
        //Esquema de validacion a usar
        validationSchema : peliculaConfig.validacionPelicula,
        onSubmit: (data) => {
            //Data enviada
            console.log(data);
            formik.resetForm();
        },
    });
    let formikConfig = {
        values: formik.values,
        errors: formik.errors,
        change: formik.handleChange,
        submit: formik.handleSubmit,
        reset: formik.resetForm,
        touched: formik.touched
    };
    
    return <>
        <FormTitle text="Nueva Pelicula"/>
        <FormFields formik = {formikConfig}/>
        <FormButtons boton="Nueva Categoria" reset={formik.resetForm} location={"/Formulario/categoria"} submit={formik.handleSubmit} codigo={formik.values.codigoSeguridad}/>
    </>
};

export default PeliForm;