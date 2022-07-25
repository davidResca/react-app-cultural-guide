//Metodo de autenticación c/firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Traigo Keys privados de la plataforma web
const firebaseConfig = {
    apiKey: "AIzaSyDH-B1F7J_qZ3ak3Xo9ewFqq9lwox03pjw",
    authDomain: "guiacultural-5a64d.firebaseapp.com",
    projectId: "guiacultural-5a64d",
    storageBucket: "guiacultural-5a64d.appspot.com",
    messagingSenderId: "1004264958506",
    appId: "1:1004264958506:web:7967a5a23951a7f9da3153"
};

//Me autentico usando el metodo y las keys
const app = initializeApp(firebaseConfig);

//Obtener referencia/puntero a la base de datos
export const db = getFirestore(app);

