import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/AsyncMock";

const ItemListContainer = () => {
  const [detalle, setDetalle] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoria) {
          setDetalle(res.filter((item) => item.categoria === categoria));
        } else {
          setDetalle(res);
        }
      })
      .catch((error) => console.error(error));
  }, [categoria]);

  return (
    <div>
      <ItemList data={detalle} />
    </div>
  );
};

export default ItemListContainer;