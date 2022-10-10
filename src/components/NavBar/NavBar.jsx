import './NavBar.css'
import CartButton from '../CartWidget/CartWidget ';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import {BiUserCircle} from "react-icons/bi";
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import { useState } from 'react';
import { useUserContext } from '../../context/UserContext';


const NavBar =()=> {
    const {totalItems} =useCartContext ();
    const {OutUser,userLogin}= useUserContext();
    const [dropdown,setDropdown]= useState(false);

    const abrirCerrar = () =>{
        setDropdown(!dropdown);
    }
 
    return (
        <nav className="container-fluid nav-header p-0">
            <div className="container-fluid p-0 d-flex justify-content-between">
                <div className="d-flex align-items-center ms-5">
                    <Link to= "/" className='nav-logo'>
                        <div className="div me-3">BabyStore</div>   
                    </Link>
                    <img src="assets/leon.png" alt="imagen" className='mt-2' height={80} width={100}/>
                </div>
                <div className="d-flex align-items-center ms-5 justify-content-between">
                    <div className="menu_link p-0 d-flex align-items-center">
                        {
                        userLogin?
                        <>
                        <BiUserCircle className='user_icon'/>
                        <div className="nav-link ms-1 me-3">{userLogin.Lastname+', '+ userLogin.Name}</div>
                        <div onClick={OutUser} className='nav-link ms-3 me-3'>Log Out</div>
                        </>
                        :
                        <>
                        <Link to="/loginin" className='nav-link  ms-3 me-3'> Login In</Link>
                        </>
                        }                       
                        <Dropdown isOpen = {dropdown} toggle = {abrirCerrar}>
                            <DropdownToggle caret className='nav-link menu_button mb-2'>Productos </DropdownToggle>
                            <DropdownMenu className='dropdown_menu'>
                                <DropdownItem><Link to= "/productos/Juguetes" className='nav-link me-5'>Juguetes</Link> </DropdownItem> 
                                <DropdownItem divider/>                  
                                <DropdownItem><Link to= "/productos/MamaderaChupete" className='nav-link me-5'>Mamaderas y Chupetes</Link></DropdownItem>
                                <DropdownItem divider/>        
                                <DropdownItem><Link to= "productos/PracticunaCoche" className='nav-link me-5'>Practicunas y Coches </Link></DropdownItem>     
                            </DropdownMenu>
                        </Dropdown>
                        <Link to="/contacto" className='nav-link  ms-3 me-5'> Contacto</Link>
                    </div>
                    {
                    totalItems()!== 0?
                    <>
                        <Link to="/cart" className="d-flex me-5 align-items-center">
                            <CartButton/>
                        </Link>
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

 

