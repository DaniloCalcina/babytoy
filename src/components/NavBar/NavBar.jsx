import './NavBar.css'
import CartButton from '../CartWidget/CartWidget ';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";


const NavBar =()=> {
    const {totalItems} =useCartContext ();
 
    return (
        <nav className="container-fluid nav-header p-0">
            <div className="container-fluid p-0 d-flex justify-content-between">
                <div className="d-flex align-items-center ms-5">
                    <Link to= "/" className='nav-logo'>
                        <div className="div me-3">BabyStore</div>   
                    </Link>
                    <img src="assets/leon.png" alt="imagen" height={80} width={100}/>
                </div>
                <div className="d-flex align-items-center ms-5 justify-content-between">
                    <div className="menu_link p-0 d-flex align-items-center">
                        <Link to= "/productos/Juguetes" className='nav-link me-5'>Juguetes</Link>                    
                        <Link to= "/productos/MamaderaChupete" className='nav-link me-5'>Mamaderas y Chupetes</Link>
                        <Link to= "productos/PracticunaCoche" className='nav-link me-5'>Practicunas y Coches </Link>
                        <Link to="/contacto" className='nav-link me-5'> Contacto</Link>
                    </div>
                    {
                    totalItems()!== 0?
                    <>
                        <div className="d-flex me-5 align-items-center">
                            <CartButton/>
                        </div>
                    </>
                    :
                    <>
                    </>    
                    }
                </div>
            </div>
        </nav> 
    ); 
}

export default NavBar;

 

