import * as yup from "yup";

const validacionPelicula = yup.object({
    titulo: yup
        .string("Ingresa el titulo de la pelicula")
        .required("El titulo de la pelicula es requerido"),
    linkVideo: yup
        .string("Ingresa el link de la pelicula")
        .required("El link de la pelicula es requerido"),
    linkIcono: yup
        .string("Ingresa el link del icono")
        .required("El link del icono es requerido"),
    linkPortada: yup
        .string("Ingresa el link de la portada")
        .required("El link de la portada es requerido"),
    categoria: yup
        .string("Ingresa la categoria de la pelicula")
        .required("La categoria de la pelicula es requerida"),
    descripcion: yup
        .string("Ingresa la descripcion de la pelicula")
        .required("La descripcion de la pelicula es requerida"),
    codigoSeguridad: yup
        .string("Ingresa el codigo de seguridad")
        .required("El codigo de seguridad es requerido")
        .equals(["454590"],"El codigo de seguridad ingresado no es correcto")
});
const validacionCategoria = yup.object({
    nombre: yup
        .string("Ingresa el titulo de la pelicula")
        .required("El titulo de la pelicula es requerido"),
    descripcion: yup
        .string("Ingresa el link de la pelicula")
        .required("El link de la pelicula es requerido"),
    codigoSeguridad: yup
        .string("Ingresa el codigo de seguridad")
        .required("El codigo de seguridad es requerido")
        .equals(["454590"],"El codigo de seguridad ingresado no es correcto")
});

const peliculaConfig = {
    validacionPelicula,
};

const categoriaConfig = {
    validacionCategoria,
};

export {peliculaConfig, categoriaConfig}