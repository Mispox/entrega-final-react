import {
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase/config";

const productosRef = collection(db, "productos");

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
export const deleteProduct = async (id) => {
  try {
    const productRef = doc(db, "productos", id);
    await deleteDoc(productRef);
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }
};
export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(productosRef, product);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar producto:", error);
  }
};
export const updateProduct = async (id, updatedData) => {
  try {
    const productRef = doc(db, "productos", id);
    await updateDoc(productRef, updatedData);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
  }
};
export const createProduct = async (product) => {
  try {
    const docRef = await addDoc(productosRef, product);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};