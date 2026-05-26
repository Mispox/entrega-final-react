import { useEffect, useState } from "react";
import { getProducts, deleteProduct, addProduct, updateProduct } from "../../services/productsService";
import "./Gestion.css";

export const Gestion = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    longDescription: "",
    price: "",
    image: "",
    category: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const handleDelete = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de eliminar este producto?");
    if (confirmacion) {
      await deleteProduct(id);
      setProducts(products.filter((prod) => prod.id !== id));
      alert("Producto eliminado.");
    }
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productToAdd = {
      ...newProduct,
      price: Number(newProduct.price),
    };
    const id = await addProduct(productToAdd);
    setProducts([...products, { id, ...productToAdd }]);
    setNewProduct({
      name: "",
      description: "",
      longDescription: "",
      price: "",
      image: "",
      category: "",
    });
    alert("Producto agregado.");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const { id, ...data } = editingProduct;
    data.price = Number(data.price);
    await updateProduct(id, data);
    setProducts(products.map((prod) => (prod.id === id ? { id, ...data } : prod)));
    setEditingProduct(null);
    alert("Producto actualizado.");
  };

  return (
    <section className="gestion-container">
      <h1>Panel de Administración</h1>

      <h2>Agregar producto</h2>
      <form className="gestion-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" value={newProduct.name} onChange={handleChange} required />
        <input name="description" placeholder="Descripción corta" value={newProduct.description} onChange={handleChange} required />
        <input name="longDescription" placeholder="Descripción larga" value={newProduct.longDescription} onChange={handleChange} />
        <input name="price" placeholder="Precio" type="number" value={newProduct.price} onChange={handleChange} required />
        <input name="image" placeholder="Ruta de imagen (/img/libro.jpg)" value={newProduct.image} onChange={handleChange} />
        <input name="category" placeholder="Categoría" value={newProduct.category} onChange={handleChange} />
        <button type="submit">Agregar</button>
      </form>

      {editingProduct && (
        <>
          <h2>Editar producto</h2>
          <form className="gestion-form" onSubmit={handleEditSubmit}>
            <input name="name" placeholder="Nombre" value={editingProduct.name} onChange={handleEditChange} required />
            <input name="description" placeholder="Descripción corta" value={editingProduct.description} onChange={handleEditChange} required />
            <input name="longDescription" placeholder="Descripción larga" value={editingProduct.longDescription} onChange={handleEditChange} />
            <input name="price" placeholder="Precio" type="number" value={editingProduct.price} onChange={handleEditChange} required />
            <input name="image" placeholder="Ruta de imagen (/img/libro.jpg)" value={editingProduct.image} onChange={handleEditChange} />
            <input name="category" placeholder="Categoría" value={editingProduct.category} onChange={handleEditChange} />
            <button type="submit">Guardar cambios</button>
          </form>
        </>
      )}

      <h2>Productos</h2>
      <ul className="gestion-list">
        {products.map((prod) => (
          <li key={prod.id}>
            <span>{prod.name}</span>
            <div>
              <button onClick={() => setEditingProduct(prod)}>Editar</button>
              <button onClick={() => handleDelete(prod.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};