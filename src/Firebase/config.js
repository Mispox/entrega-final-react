import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC446js-xr6dBpi6w-4LN-4Uz2WtPZE0lE",
  authDomain: "bathory-books.firebaseapp.com",
  projectId: "bathory-books",
  storageBucket: "bathory-books.firebasestorage.app",
  messagingSenderId: "286968502782",
  appId: "1:286968502782:web:1f1403a1fe5c39fb5408af"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);