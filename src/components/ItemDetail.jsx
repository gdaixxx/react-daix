import React from "react";

const ItemDetail = ({detalle}) => {
    return(
        <div>
            <h2>{detalle.título}</h2>
            {/* <img src={detalle.imagen} alt={detalle.título} />
            <p>{detalle.autoría}</p>
            <p>Precio: ${detalle.sinopsis}</p> */}
        </div>
    )
}

export default ItemDetail