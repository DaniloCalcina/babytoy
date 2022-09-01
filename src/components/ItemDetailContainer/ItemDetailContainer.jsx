import "./ItemDetailContainer.css";
import { getItem } from "../ItemListContainer/arregloItems";
import React, {useEffect,useState} from "react";
import ItemDetail  from "../ItemDetail/ItemDetail";

 const ItemDetailContainer=()=>{
    const [producto, setProducto] =useState({});
    
        useEffect(()=>{
            getItem.then(producto=>{ /* definida en arregloItems */
                setProducto(producto)
            })        
        },[])

    return(
        <div className="">
            <ItemDetail producto = {producto}/>   
        </div>
    )
}

export default ItemDetailContainer;
