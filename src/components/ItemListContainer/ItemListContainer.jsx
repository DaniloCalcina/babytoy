import "./ItemListContainer.css";
import React, {useEffect,useState} from "react";
import ItemList from '../ItemList/ItemList';
import {ObtenerItem} from '../../utils/FireBase';
import { useParams } from "react-router-dom";

export const ItemListContainer= ()=>{

const {tipoProducto}= useParams();
const [productos, setProductos] =useState([]);
    
useEffect(()=>{
    ObtenerItem(tipoProducto).then(prod=>{ 
    const data = prod.docs.map (doc =>{
        const laData= doc.data();
        return {...laData,id:doc.id};
    })
        setProductos(data);    
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