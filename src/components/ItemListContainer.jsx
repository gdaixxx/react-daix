import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/AsyncMock";

const ItemListContainer = () => {
  const [libros, setLibros] = useState([]);
  const { categoria } = useParams();
  
  useEffect(() => {
    getProducts()
    .then((res) => {
      if (categoria) {
        setLibros(res.filter((libro) => libro.categoria === categoria));
        } else {
          setLibros(res);
        }
      })
      .catch((error) => console.error(error));
  }, [categoria]);

  return (
    <div>
      <ItemList data={libros} />
    </div>
  );
};

export default ItemListContainer;