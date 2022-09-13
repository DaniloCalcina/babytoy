import './CartWidget .css'
import{BsCart4} from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";

const CartButton = ()=>{
const {totalItems} =useCartContext ();
     return(
        <div className="d-flex flex-column me-3 align-items-center car-container">
            <BsCart4 className='car-icon'/>
            <div className='car-count-container d-flex justify-content-center align-items-center'>
                <span className='car-count'>{totalItems()}</span>
            </div>
        </div>

    )
}

export default CartButton ;
