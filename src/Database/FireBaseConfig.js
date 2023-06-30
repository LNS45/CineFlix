//Importar las funciones a usar
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";

//Configuracion
const firebaseConfig = {
    apiKey: "AIzaSyAY26qyjte-Ggre8-H_Cm_9V0hIUl09HJI",
    authDomain: "cineflex-1e57e.firebaseapp.com",
    projectId: "cineflex-1e57e",
    storageBucket: "cineflex-1e57e.appspot.com",
    messagingSenderId: "1069007646996",
    appId: "1:1069007646996:web:6328b5566f1708e6829201"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
//Se obtiene la referencia de la tabla a obtener
const categoriasCollection = collection(db, "Categorias");

const ref = {
    categoriasCollection,

};

export default ref;