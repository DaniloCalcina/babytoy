import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail=({producto})=>{

    const [goToCart,setGoToCart] = useState (false);
    const [count, setCount] =useState(1);
    const {addToCart} =useCartContext ();
    const onCount= (newQuantity) => {setCount(newQuantity)};
    const onCart =()=> {
        setGoToCart (true);
        addToCart (producto, count);
    } 
   

    return(
        <div className="container-fluid d-flex flex-column justify-content-center pb-5 pt-5 producto">
            <div className="container-md d-flex justify-content-center">
                <div className="d-flex">
                    <div className="me-3 d-flex">
                        <div className="detail-image-container">
                            <img src={producto.imagen1}  alt="" width={400} height={400} />
                        </div>
                        <div className="">
                        <div className="detail-image-container">
                            <img src={producto.imagen2}  alt="" width={75} height={75} />
                        </div>
                        <div className="detail-image-container">
                            <img src={producto.imagen3} alt="" width={75} height={75} />
                        </div>
                        </div>
                    </div>
                    <div className="me-3">
                        <h1 className="item-detail-nombre">{producto.nombre}</h1>
                        <p className="item-detail-description">{producto.descripcion}</p>
                        <p className="item-detail-price m-5">$ {producto.valor}</p>
                        
                        {
                            !goToCart?
                            <>
                                <div className="">
                                     <ItemCount count ={count} onCount={onCount} />
                                    <button onClick={()=> onCart ()} className="btn-block carrito_button ms-3">Agregar al Carrito</button>   
                                </div>
                            </>
                            :
                            <>
                            <div className="d-flex flex-column">
                                <Link to="/" className="btn-sm carrito_button m-3 p-3">Continuar Comprando</Link>
                                <Link to="/cart" className="btn-sm carrito_button m-3 p-3"> Finalizar Compra</Link>
                            </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
   )
}

export default ItemDetail;