import './PaginaContacto.css'
import React from 'react'
import{BsInstagram} from "react-icons/bs";
import{BsFacebook} from "react-icons/bs";


export const PaginaContacto = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-item-center container-page'>
      <div className="logo_container d-flex m-5">
        <div className="text_logo me-5">BabyStore</div>
        <img src="assets/leon.png" alt="imagen" height={160} width={200}/>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center m-2 p-2">
        <div className="social-container mb-2"><BsInstagram className='me-2 social-icon'/>@Baby.Store</div>
        <div className="social-container mb-2"><BsFacebook className='me-2 social-icon'/>/BabyStore</div>
        <div className="social-container mb-2">Tel: +54 (0343) 123456789</div>
        <div className="social-container mb-2">E-mail: contacto@babystore.com</div>
      </div>
     </div>
  )
}
