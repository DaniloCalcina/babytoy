import React from "react";
import "./Item.css";

const Item =({producto})=>{
    
return(
    <div className="m-3 p-3 d-flex flex-column justify-content-center align-items-center">
        <div className="item-image-container d-flex flex-column justify-content-center align-items-center">
            <img src={producto.imagen1} alt="" width={200} height= {200} />    
        </div>
        <div className="container-texto d-flex flex-column justify-content-center align-items-center">
            <h1 className="item-nombre ms-3 p-3">{producto.nombre}</h1>
            <h3 className="item-price">{producto.valor}</h3>
            <button className="btn detail-button">Ver Detalles</button>
        </div>
    </div>
)
}
export default Item;