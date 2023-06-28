import FormTitle from "../FormTitle";
import FormFields from "../FormFields";
import FormButtons from "../FormButtons";
import { categoriaConfig } from "../InputsConfig";
import { useFormik } from "formik";
import FormTable from "../FormTable";

const CatForm = () => {
    const formik = useFormik({
        initialValues: {
            codigoSeguridad: "",
            nombre: "",
            descripcion: "",
            color: "#FFFFFF"
        },
        //Esquema de validacion a usar
        validationSchema : categoriaConfig.validacionCategoria,
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
        <FormTitle text="Nueva Categoria"/>
        <FormFields formik = {formikConfig}/>
        <FormButtons boton="Nueva Pelicula" reset={formik.resetForm} location={"/Formulario/pelicula"} submit={formik.handleSubmit}/>
        <FormTable />
    </>
};

export default CatForm;