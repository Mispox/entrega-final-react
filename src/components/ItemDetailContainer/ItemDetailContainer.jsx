import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItemDetail({ id: snapshot.id, ...snapshot.data() });
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>Detalles del producto</h1>
      <div className="detail-wrapper">
        <ItemDetail {...itemDetail} />
      </div>
    </section>
  );
};