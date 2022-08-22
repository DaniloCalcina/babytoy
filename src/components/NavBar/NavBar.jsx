import './NavBar.css'
import CarButtom from '../CarButtom/CarButtom';


const NavBar =()=> {
    return (
        <nav className="container-fluid nav-header p-0">
            <div className="container-fluid p-0 d-flex justify-content-between">
                <div className="d-flex align-items-center ms-5">
                    <a href="#" className='nav-logo'>
                     <div className="div me-3">BabyStore</div>   
                    </a>
                    <img src="assets/leon.png" alt="imagen" height={80} width={100}/>
                </div>
                <div className="d-flex align-items-center ms-5 justify-content-between">
                    <div className="menu_link p-0 d-flex align-items-center">
                        <span className='nav-link me-5'>Inicio</span>
                        <span className='nav-link me-5'>Productos</span>
                        <span className='nav-link me-5'>Ayuda</span>
                        <span className='nav-link me-5'>Contacto</span>
                    </div>
                    <div className="d-flex me-5 align-items-center">
                        <CarButtom/>
                    </div>
                </div>
            </div>
        </nav> 
    ); 
}

export default NavBar;

 

