import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../mock/AsyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

//- Crea un estado local llamado libros, que empieza como un objeto vacío {}. Se usará para guardar los datos del ítem.

const [libros, setLibros] = useState({});

//- Obtiene el parámetro de la URL llamado librosId usando el hook useParams.
const {cod} = useParams()

//- Este useEffect se ejecuta cada vez que cambia el id.
useEffect(() => {
    // Simular una llamada a una API para obtener los libross del producto
    getItem(cod)
        .then((respuesta) => {
            setLibros(respuesta);
        })
        .catch((error) => {
            console.error("Error al obtener los libros del producto:", error);
        });
}, [cod]);

    return(
        <div>

        <h2>Detalles del libro</h2>
        <div style={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px', margin: '20px'}}>
            <ItemDetail libro={libros}/>
        </div>
        </div>
    )
}

export default ItemDetailContainer