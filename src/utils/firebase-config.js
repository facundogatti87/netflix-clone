import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD1NAYb47IzLDenySvj81ayngzA_RBiIN4",
  authDomain: "react-netflix-clone-447ac.firebaseapp.com",
  projectId: "react-netflix-clone-447ac",
  storageBucket: "react-netflix-clone-447ac.appspot.com",
  messagingSenderId: "386737190245",
  appId: "1:386737190245:web:234f955f16716d79c0dd8c",
  measurementId: "G-P4ZF502BP0"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);