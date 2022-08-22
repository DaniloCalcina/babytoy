import './CarButtom.css'
import{BsCart4} from "react-icons/bs";

const CarButtom= ()=>{
    return(
        <div className="d-flex flex-column me-3 align-items-center car-container">
            <BsCart4 className='car-icon'/>
            <div className='car-count-container d-flex justify-content-center align-items-center'>
            <span className='car-count'>0</span>
            </div>
        </div>

    )
}

export default CarButtom;