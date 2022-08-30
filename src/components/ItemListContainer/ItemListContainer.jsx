import "./ItemListContainer.css";
import {arregloItems} from "./arregloItems";
import React, {useEffect,useState} from "react";
import {ItemList} from '../ItemList/ItemList';

export const ItemListContainer= ()=>{
    const [productos, setProductos] =useState([]);

    const ObtenerItem =()=>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve (arregloItems)
            },2000);
        })
    }
    
    useEffect(()=>{
        ObtenerItem()
            .then((listado)=>{setProductos(listado); console.log(listado)})
            .catch (()=>console.log("falló en la comunicación con el servidor"));
    },[])
    console.log('contadorRender')
    console.log(productos)
    return(
        <div className="container-fluid p-0 main_container">
            <div className=" d-flex align-items-center container_producto">
                <ItemList data={productos}/>                      
            </div>
        </div>
    )
}

