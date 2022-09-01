import "./ItemListContainer.css";
import React, {useEffect,useState} from "react";
import ItemList from '../ItemList/ItemList';
import {ObtenerItem} from './arregloItems';

export const ItemListContainer= ()=>{

const [productos, setProductos] =useState([]);
    
useEffect(()=>{
    ObtenerItem.then(productos=>{ /* definida en arregloItems */
        setProductos(productos)
    })        
},[])

    return(
        <div className="container-fluid p-0 main_container">
            <div className=" d-flex align-items-center container_producto">
                <ItemList productos = {productos}/>                      
            </div>
        </div>
    )
}

export default ItemListContainer;