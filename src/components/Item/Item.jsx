import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item =({producto})=>{
var ID= "/producto/" + producto.id;
return(
    <div className="m-3 p-3 d-flex flex-column justify-content-center align-items-center container_card">
        <div className="item-image-container d-flex flex-column justify-content-center align-items-center">
            <img src={producto.imagen1} alt="" width={200} height= {200} />    
        </div>
        <div className="container-texto d-flex flex-column justify-content-center align-items-center">
            <h1 className="item-nombre ms-3 p-3">{producto.nombre}</h1>
            <h3 className="item-price">$ {producto.valor}</h3>
            <Link to ={ID} className="detail-button p-2">Ver Detalle</Link>
        </div>
    </div>
)
}
export default Item;

