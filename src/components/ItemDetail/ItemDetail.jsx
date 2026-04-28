import { Item } from "../Item/Item";

export const ItemDetail = ({ item }) => {
  return (
    <Item {...item}>
      <button>Agregar al carrito</button>
    </Item>
  );
};