import FormTitle from "../FormTitle";
import FormFields from "../FormFields";
import FormButtons from "../FormButtons";
import { categoriaConfig } from "../InputsConfig";
import { useFormik } from "formik";
import FormTable from "../FormTable";
import { addDoc } from "firebase/firestore/lite";
import ref from "../../../Database/FireBaseConfig";

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
            postCatDoc(data);
            formik.resetForm();
        },
    });
    //Post de la categoria
    const postCatDoc = async (data) => {
        const {nombre, descripcion, color} = data;
        try {
            await addDoc(ref.categoriasCollection, {
                name: nombre,
                description: descripcion,
                color: color
            });
            alert("La categeria se agrego correctamente :)")
        } catch (error) {
            alert("Hubo un error al postear la categoria");
        }
    };
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