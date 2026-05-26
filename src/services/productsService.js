import {
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase/config";

const productosRef = collection(db, "productos");

/* ---- GET ALL ---- */
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productosRef);
    const productsFormat = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productsFormat;
  } catch (err) {
    console.error("Error al traer productos:", err);
    return [];
  }
};

/* ---- GET BY ID ---- */
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "productos", id);
    const snapshot = await getDoc(productRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    return null;
  }
};