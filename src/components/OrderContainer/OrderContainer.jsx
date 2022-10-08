import React from 'react'
import {getCart} from '../../utils/FireBase';

export const OrderContainer = () => {
  return (
    <div className="d-flex flex-column m-5">
      <div className=" d-flex justify-content-center align-items center flex-column m-5">
        <div className="d-flex justify-content-center cart-empty m-1">Aqui se encuentra el Historial de Compras</div>
      </div>
    </div>
  )
}
