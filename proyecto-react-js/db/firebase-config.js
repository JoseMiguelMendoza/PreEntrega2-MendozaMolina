// Aqui es donde colocaremos toda la seccion de configuracion de firebase. Lo que nos dieron de entrada, para enlazar nuestro proyecto con nuestra base de datos creada en firebase.

import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCwCPfYaQQEiSnr4aAdKZG-R9zZCQGdzqQ",
    authDomain: "db-e-commerce-f81b3.firebaseapp.com",
    projectId: "db-e-commerce-f81b3",
    storageBucket: "db-e-commerce-f81b3.appspot.com",
    messagingSenderId: "688614301953",
    appId: "1:688614301953:web:3c27c18d8e1a345e453b00"
};

// esta constante inicializa la aplicacion
const app = initializeApp(firebaseConfig);
// esta le da la configuracion de la aplicacion a firestore.
const db = getFirestore(app);

export default db;