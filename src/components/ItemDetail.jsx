import React from "react";

const ItemDetail = ({libro}) => {
    return(
        <div>
            <h2>{libro.título} por {libro.autoría}</h2>
            {/* <img src={detalle.imagen} alt={detalle.título} />
            <p>{detalle.autoría}</p>
            <p>Precio: ${detalle.sinopsis}</p> */}
            <p>
                {libro.editorial} - Año:{libro.año} - {libro.páginas} páginas
            </p>

            <p>
                Ejemplares disponibles: {libro.ejemplares}
            </p>
            <hr></hr>
            
                {libro.sinopsis}
            
        </div>
    )
}

export default ItemDetail

// Problma: {libro.sinopsis} tiene etiquetas HTML que React no renderiza como tales sino que toma el texto tal cual, como string. Investigué y se supone que puedo usar dangerouslySetInnerHTML para que las interprete como HTML, pero no sé si es una buena práctica usarlo.