import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

const products = [
  {
    name: "Nuestra Parte de Noche",
    description: "Mariana Enriquez",
    longDescription: "Juan Peterson viaja con su hijo Gaspar por la ruta hacia Buenos Aires. Juan es el médium más poderoso de la Orden, una sociedad secreta que lleva décadas intentando contactar a una entidad oscura e inmortal. Gaspar no sabe nada de esto aún, pero pronto descubrirá el peso de su herencia.",
    price: 12500,
    image: "/img/noche.jpg",
    category: "terror"
  },
  {
    name: "Alguien camina sobre tu tumba",
    description: "Mariana Enriquez",
    longDescription: "Una colección de crónicas donde Mariana Enriquez recorre cementerios de todo el mundo. Desde los panteones de Nueva Orleans hasta los camposantos de Europa del Este, la autora encuentra en estos espacios historias de muerte, cultura y belleza perturbadora.",
    price: 12500,
    image: "/img/alguien.jpeg",
    category: "terror"
  },
  {
    name: "Porque demasiado no es suficiente",
    description: "Mariana Enriquez",
    longDescription: "Un libro autobiográfico sobre la obsesión musical. Mariana Enriquez narra su amor absoluto por Suede, la banda británica de rock, y cómo su música marcó su adolescencia, su forma de ver el mundo y su identidad como escritora.",
    price: 28900,
    image: "/img/demasiado.webp",
    category: "biografias"
  },
  {
    name: "Los peligros de fumar en la cama",
    description: "Mariana Enriquez",
    longDescription: "Doce cuentos de terror que transcurren en los barrios populares de Buenos Aires. Fantasmas, cultos, adolescentes perturbadas y criaturas innombrables habitan estas páginas donde lo cotidiano se convierte en pesadilla.",
    price: 35000,
    image: "/img/fumar.jpg",
    category: "terror"
  },
  {
    name: "Las cosas que perdimos en el fuego",
    description: "Mariana Enriquez",
    longDescription: "Una colección de cuentos que exploran el horror social argentino. Mujeres que se queman a lo bonzo, niños desaparecidos, casas encantadas y rituales oscuros conviven con la pobreza, la violencia y la marginalidad en un Buenos Aires inquietante.",
    price: 42000,
    image: "/img/fuego.jpeg",
    category: "terror"
  },
  {
    name: "Como desaparecer completamente",
    description: "Mariana Enriquez",
    longDescription: "Una novela corta sobre Silvina, una joven que trabaja en una revista y comienza a ver algo perturbador en las fotos que revela: una figura oscura que nadie más puede ver. Un relato sobre el miedo, la soledad y lo que se esconde detrás de la realidad cotidiana.",
    price: 45500,
    image: "/img/desaparecer.jpeg",
    category: "terror"
  }
];

export const seedProducts = async () => {
  const productosRef = collection(db, "productos");
  for (const product of products) {
    await addDoc(productosRef, product);
  }
  console.log("Productos cargados!");
};