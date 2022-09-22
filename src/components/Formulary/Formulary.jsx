import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'; 
import { useCartContext } from '../../context/CartContext';
import './Formulary.css';
import {sendItem} from '../../utils/FireBase';
import { useNavigate  } from "react-router-dom";



export default function Formulary() {
const navigate = useNavigate();
const {totalPrice,cart:carrito,clearCart}= useCartContext();
const sendOrder =(e)=>{
    e.preventDefault();

    const order = {
        buyer:{
        buyerId:e.target[0].value,
        buyerName:e.target[1].value,
        buyerLastname:e.target[2].value,
        buyerDress:e.target[3].value,
        },
        items:carrito,
        total:totalPrice()
    }
    sendItem(order);
    clearCart ();
    navigate('/');
}
  return (
    <Container id='principal-container' className='d-grid h-100'>
        <Form id='sign-in-form' className='text-center w-100' onSubmit={sendOrder}>
            <img className='mb-4' src="assets/leon.png" alt="imagen" height={120} width={150}/>
                <h1 className='mb-3 logIn-title fw-normal'>Registro</h1>
            <Form.Group className='mb-1'>
                <Form.Control type='email' size='lg' placeholder='Email' autoComplete='username' className='position-relative'/>
            </Form.Group>
            <Form.Group className='mb-1'>
                <Form.Control type='text' size='lg' placeholder='Nombre'/>
            </Form.Group>
            <Form.Group className='mb-1'>
                <Form.Control type='text' size='lg' placeholder='Apellido'/>
            </Form.Group>
            <Form.Group className='mb-1'>
                <Form.Control type='text' size='lg' placeholder='Direccion'/>
            </Form.Group>
{/*             <Form.Group className='d-flex justify-content-center fw-bolder'>
                <Form.Check label="Recuerdame"/>    
            </Form.Group> */}
            <div className="d-grid h-100 justify-content-center mt-3">
                <button type='submit' className='registry_button'>Finalizar</button>
            </div>
        </Form>
    </Container>
  )
}
