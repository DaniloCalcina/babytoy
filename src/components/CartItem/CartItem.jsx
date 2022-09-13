import "./CartItem.css"
import React from 'react'
import {IoTrashOutline} from "react-icons/io5";
import {useCartContext} from "../../context/CartContext";


export default function CartItem({producto}) {
    const {removeFromCart} =useCartContext ();
  return (
    <div className="container-md d-flex justify-content-between m-1 item-cart-container"> 
        <div className="d-flex">
            <img src={producto.imagen1}  alt="" width={75} height={75} />
            <div className="d-flex align-items-center justify-content-center ms-2">
                <span>{producto.nombre}</span>
                
            </div>   
        </div>
        <div className="d-flex">
            <div className="d-flex flex-column align-items-center">
                <div className="mt-3">
                    <span className="me-2">${producto.valor}</span>
                    <span className="me-2">X</span>
                    <span className="me-2">{producto.quantity}</span>
                </div>
                <span className="">$ {producto.valor*producto.quantity}</span>
            </div>
            <div onClick={()=>removeFromCart(producto.id)} className="m-2 mt-3 trash-icon">
                <IoTrashOutline/>
            </div>
        </div>
    </div>
  )
}

