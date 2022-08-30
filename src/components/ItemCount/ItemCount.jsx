import "./ItemCount.css"
import {FaPlus, FaMinus} from "react-icons/fa";
import { useState } from "react";

const ItemCount= ()=>{

    const [count,setCount]= useState(1); 
    const onCount= (newQuantity)=>{setCount(newQuantity)};
    return(
        <div className="container-fluid d-flex align-items-center count-container">
            <div>
                 <div className="me-3 mb-4 d-flex align-items-center "> 
                     <button onClick={()=>{onCount(count -1)}} className="btn ms-3"><FaMinus className="count_button"/></button>
                     <span className="m-3 display_count d-flex justify-content-center align-items-center">{count}</span>
                     <button onClick={()=>{onCount(count +1)}} className="btn"><FaPlus className="count_button"/></button>
                 </div>
                 <div className="d-flex justify-content-center align-items-center cart_button">
                    <button className="btn btn*primary ">Agregar al Carrito</button>
                 </div>
            </div>
        </div>
    )
}

export default ItemCount;