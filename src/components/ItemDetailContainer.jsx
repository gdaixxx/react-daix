import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../mock/AsyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

//- Crea un estado local llamado detalle, que empieza como un objeto vacío {}. Se usará para guardar los datos del ítem.

const [detalle, setDetalle] = useState({});

//- Obtiene el parámetro de la URL llamado detalleId usando el hook useParams.
const {cod} = useParams()

//- Este useEffect se ejecuta cada vez que cambia el id.
useEffect(() => {
    // Simular una llamada a una API para obtener los detalles del producto
    getItem(cod)
        .then((respuesta) => {
            setDetalle(respuesta);
        })
        .catch((error) => {
            console.error("Error al obtener los detalles del producto:", error);
        });
}, [cod]);

    return(
        <div><ItemDetail detalle={detalle}/>
            <h2>Detalle del Producto</h2>
        </div>
    )
}

export default ItemDetailContainer