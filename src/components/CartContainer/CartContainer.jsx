import "./CartContainer.css"
import React from 'react'
import CartItem  from "../CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


function CartContainer() {
    const {cart:carrito}=useCartContext();
    const {totalItems,totalPrice} =useCartContext ();

    return (
    <>
       { totalItems()  === 0 ? 
            <>
                <div className="d-flex flex-column m-5">
                    <div className=" d-flex justify-content-center align-items center flex-column m-5">
                        <div className="d-flex justify-content-center cart-empty m-1">El Carrito esta vacio</div>
                        <Link to="/" className="btn-sm carrito_button m-1 p-1">Iniciar Compra</Link>
                    </div>
                </div>
            </>
            :
            <>
                <div className="container-md d-flex flex-column">
                    <div className="container-md container-cart d-flex justify-content-center align-items center flex-column mt-2"> 
                        <div className="container-md d-flex justify-content-center cart-titles m-1"> Carrito</div>
                    {carrito.map(producto =>(                                
                        <CartItem key = {producto.id} producto={producto} />                            
                    ))}          
                     </div>
                    <div className="container-md d-flex flex-row justify-content-between cart-totals">
                         <div className="m-1 cart-titles">Total</div>
                        <div className="m-1">Cantidad de Productos: {totalItems()}</div>
                        <div className="m-1">Total: $ {totalPrice()}</div>
                    </div>
                </div>
            </>
        }
    </>
    );
}

export default CartContainer