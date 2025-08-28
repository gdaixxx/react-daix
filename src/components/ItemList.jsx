import React from "react";
import Item from "./Item";

// Genera cars dinámicamente a partir de los datos recibidos en la prop data
const ItemList = ({ data }) => {
    return (
        <div className="item-list d-flex justify-content-between flex-wrap align-items-center p-2">
            {data.map((item) => (
                <Item key={item.cod} item={item} />
            ))}
        </div>
    );
}
    export default ItemList;