import FormTitle from "../FormTitle";
import FormFields from "../FormFields";
import FormButtons from "../FormButtons";
import { useFormik } from "formik";
import { peliculaConfig } from "../InputsConfig";
import { addDoc } from "firebase/firestore/lite";
import ref from "../../../Database/FireBaseConfig";

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
            postPeliDoc(data);
            formik.resetForm();
        },
    });
    const postPeliDoc = async (data) => {
        const {categoria, descripcion, linkIcono, linkPortada, linkVideo, titulo} = data;
        try {
            await addDoc(ref.peliculasCollection, {
                title: titulo,
                category: categoria,
                description: descripcion,
                personaje: linkIcono,
                cover: linkPortada,
                video: linkVideo,
            });
            alert("La pelicula se agrego correctamente :)")
        } catch (error) {
            alert("Hubo un error al postear la pelicula");
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
        <FormTitle text="Nueva Pelicula"/>
        <FormFields formik = {formikConfig}/>
        <FormButtons boton="Nueva Categoria" reset={formik.resetForm} location={"/Formulario/categoria"} submit={formik.handleSubmit} codigo={formik.values.codigoSeguridad}/>
    </>
};

export default PeliForm;