import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ id, name, description, longDescription, price, image }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({ id, name, price, image }, quantity);
  };

  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={image} alt={name} />
      </div>
      <div className="detail-info">
        <h2>{name}</h2>
        <p className="detail-description">{description}</p>
        <p className="detail-description">{longDescription}</p>
        <p className="detail-price">${price}</p>
        <div className="detail-quantity">
          <span>CANTIDAD</span>
          <div className="quantity-controls">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </div>
        <button className="detail-btn" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};