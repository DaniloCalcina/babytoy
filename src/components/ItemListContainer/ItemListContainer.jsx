import "./ItemListContainer.css";
import React, {useEffect,useState} from "react";
import ItemList from '../ItemList/ItemList';
import {ObtenerItem} from './arregloItems';
import { useParams } from "react-router-dom";

export const ItemListContainer= ()=>{

const {tipoProducto}= useParams();
const [productos, setProductos] =useState([]);
    
useEffect(()=>{
    ObtenerItem.then(productos=>{ /* definida en arregloItems */
        if(!tipoProducto){
            setProductos(productos)
        } else {
            const Filtrado= productos.filter(item=>item.categoryid=== tipoProducto)
            setProductos(Filtrado)
        }
    })        
},[tipoProducto])

    return(
        <div className="container-fluid p-0 main_container">
            <div className=" d-flex align-items-center container_producto">
                <ItemList productos = {productos}/>                      
            </div>
        </div>
    )
}

export default ItemListContainer;