import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
    return (
        <div className="item-list">
            {data.map((item) => (
                <Item key={item.cod} item={item} />
            ))}
        </div>
    );
}
    export default ItemList;