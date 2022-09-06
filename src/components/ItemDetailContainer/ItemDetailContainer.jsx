import "./ItemDetailContainer.css";
import { getItem } from "../ItemListContainer/arregloItems";
import React, {useEffect,useState} from "react";
import ItemDetail  from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{

const {id}= useParams();
const [producto, setProducto] =useState({});
const [isLoaded,SetisLoaded]= useState (false);
    
useEffect(()=>{
    getItem(parseInt(id)).then(producto=>{ /* definida en arregloItems */ 
        if(producto){
            console.log(producto)
            setProducto(producto)
            SetisLoaded(true)
        }    
    })        
},[])

    if (isLoaded){
        return(
            <div className="">
                <ItemDetail producto = {producto}/>  
            </div>
        )
    }else{
        return <></>;
    }
}

export default ItemDetailContainer;
