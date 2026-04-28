import "./Item.css";

export const Item = ({ name, description, price, image, children }) => {
  return (
    <article className="card">
      <img src={image} alt={`foto de ${name}`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      {children}
    </article>
  );
};