import './NavBar.css'
import { FiShoppingCart } from "react-icons/fi"
import React from 'react';


function NavBar() {
    return (
 
        <div className="NavBar">
            <header className='header'>
               <nav className='Nav'>
                    <a href="#" className='logo NavLink'>BabyStore</a>
                    <ul className='NavMenu NavLink'>
                        <li class="NavMenuItem">
                            <a href="#" className='NavMenuLink NavLink'>Inicio</a>
                        </li>
                        <li className='NavMenuItem'>
                            <a href="#" className='NavMenuLink NavLink'>Productos</a>
                        </li>
                        <li className='NavMenuItem'>
                            <a href="#" className='NavMenuLink NavLink'>Ayuda</a>
                        </li>
                        <li className='NavMenuItem'>
                            <a href="#" className='NavMenuLink NavLink'>Contacto</a>
                        </li>
                       
                    </ul>
                   <div className='NavCarrito'>
                        <i><FiShoppingCart/></i>
                    </div>
                </nav>
           </header>
       </div>
 
        
    ); 
 }

export default NavBar;

 

