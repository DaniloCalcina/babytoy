import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'; 
import './Formulary.css';
import { useNavigate  } from "react-router-dom";
import { useUserContext } from '../../context/UserContext';
import swal from 'sweetalert';



export default function Formulary() {
const navigate = useNavigate();
const {addUser, verifyUser} = useUserContext();

const Bienvenida = () => {

    swal ({
        title: "Inicio Exitoso",
        text: "Bienvenido",
        icon: "success",
        button: "Iniciar"
    }).then (()=>{navigate('/');})
}

const sendUser = (e) =>{
    e.preventDefault();
    const buyer={
        Email:e.target[0].value,
        Password:e.target[1].value,
        Name:e.target[2].value,
        Lastname:e.target[3].value,
        Adress:e.target[4].value,
        }
    addUser(buyer);
    Bienvenida();
}

const verifUser= (e)=> {
    e.preventDefault();
    const member ={
        Email:e.target[0].value,
        Password:e.target[1].value,
    }
    verifyUser (member);
    Bienvenida();
}

  return (
    <div className="d-flex justify-content-center align-items-center flex-column page-container mt-1 p-1">
      <div className="logo_container d-flex m-5">
        <div className="text_logo me-5">BabyStore</div>
        <img src="assets/leon.png" alt="imagen" height={160} width={200}/>
      </div>
    <Container id='principal-container' className='d-flex justify-content-center align-items-center'>
        <div className="d-flex">
        <div className="m-1 me-5">
        <Form id='sign-in-form' className='text-center w-100' onSubmit={verifUser}>
                <h1 className='mb-3 logIn-title fw-normal'>Iniciar Sesion</h1>
            <Form.Group className='mb-1'>
                <Form.Control type='email' size='lg' placeholder='Email' autoComplete='username' className='position-relative'/>
            </Form.Group>
            <Form.Group className='mb-1'>
                <Form.Control type='password' size='lg' placeholder='Contraseña'/>
            </Form.Group>
            <div className="d-grid h-100 justify-content-center mt-1">
                <button type='submit' className='registry_button'>Entrar</button>
            </div>
        </Form>
        </div>
        <div className="m-1 ms-5">
        <Form id='sign-in-form' className='text-center w-100' onSubmit={sendUser}>
                <h1 className='mb-3 logIn-title fw-normal'>Registro</h1>
            <Form.Group className='mb-1'>
                <Form.Control type='email' size='lg' placeholder='Email' autoComplete='username' className='position-relative'/>
            </Form.Group>
            <Form.Group className='mb-1'>
                <Form.Control type='password' size='lg' placeholder='Contraseña'/>
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
            <div className="d-grid h-100 justify-content-center mt-3">
                <button type='submit' className='registry_button'>Finalizar</button>
            </div>
        </Form>
        </div>
        </div>
    </Container>
    </div>
  )
}
