// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDjPPvKB3oSh_nnD-x8VsSBqF2pGbLXsws",
//   authDomain: "todo-app-46808.firebaseapp.com",
//   projectId: "todo-app-46808",
//   storageBucket: "todo-app-46808.appspot.com",
//   messagingSenderId: "1018603707928",
//   appId: "1:1018603707928:web:4da77850a3f18768392d6d"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
