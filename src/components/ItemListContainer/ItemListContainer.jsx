import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      });
  }, []);

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};