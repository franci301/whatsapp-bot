// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnBgLvNjtg-TphpbFNzwMhOG6nYAL4EVs",
    authDomain: "whatsapp-66db6.firebaseapp.com",
    projectId: "whatsapp-66db6",
    storageBucket: "whatsapp-66db6.appspot.com",
    messagingSenderId: "276994536488",
    appId: "1:276994536488:web:1f6c49c5e6b16a0e61f11d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);