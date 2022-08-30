import React, {Component} from "react";
import "./ItemList.css";
import {Item} from "../Item/Item";


export const ItemList =({data=[]})=>{
    
    return(
        <div className= "row">
            {data.map((producto) =>{
                return(
                    <div>
                        <Item key= {producto.id} producto={producto} />
                    </div>
                )
            })}
        </div>
    )
}

