import "./ItemList.css"
import {FaPlus, FaMinus} from "react-icons/fa";
import { useState } from "react";

const ItemList= ()=>{

    const [count,setCount]= useState(1); 
    const onCount= (newQuantity)=>{setCount(newQuantity)};
    return(
        <div className="container-fluid d-flex justify-content-center count-container">
            <div>
                 <div className="me-3 mb-4"> 
                     <button onClick={()=>{onCount(count -1)}} className="btn"><FaMinus/></button>
                     <span className="m-3">{count}</span>
                     <button onClick={()=>{onCount(count +1)}} className="btn"><FaPlus/></button>
                 </div>
                 <button className="btn btn*primary">Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemList;