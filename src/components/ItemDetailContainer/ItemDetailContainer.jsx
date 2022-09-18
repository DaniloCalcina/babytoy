import "./ItemDetailContainer.css";
import { getItem } from "../../utils/FireBase";
import React, {useEffect,useState} from "react";
import ItemDetail  from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{

const {id}= useParams();
const [producto, setProducto] =useState({});
const [isLoaded,SetisLoaded]= useState (false);
    
useEffect(()=>{
    getItem((id)).then(prod=>{ /* definida en arregloItems */ 
    console.log(prod)
    if(prod.exists()){
        setProducto({id:prod.id,...prod.data()});
        SetisLoaded(true);
    }else{
        console.log("No hay documento");
    }    
    })        
},[id])

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
