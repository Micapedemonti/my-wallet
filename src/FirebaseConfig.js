// FirebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA9eLSTxBTp3o7amQw0jSiyJMe3sC0MDD4",
    authDomain: "my-wallet-bf8bc.firebaseapp.com",
    projectId: "my-wallet-bf8bc",
    storageBucket: "my-wallet-bf8bc.appspot.com",
    messagingSenderId: "937585828194",
    appId: "1:937585828194:web:cb3f21395535e490148c3b"
  };

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)