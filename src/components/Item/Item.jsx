import React from "react";
import "./Item.css";

export const Item =({producto})=>{
    
return(
    <div className="container">
        <div className="me-3">
            <div className="item-image-container">
                <img src={producto.imagen1} alt="" width={200} height={200} />
            </div>
            <div className="me-3 d-flex flex-column justify-content-center align-items-center">
                <h1 className="item-nombre ms-2.5 me-2.5">{producto.nombre}</h1>
                <p className="item-price">{producto.valor}</p>
                <button className="btn btn*primary detail-button">Ver Detalles</button>
            </div>

        </div>
    </div>
)
}