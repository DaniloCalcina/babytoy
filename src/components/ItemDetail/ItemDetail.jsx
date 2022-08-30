import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetail=({producto})=>{
    return(
        <div className="container-fluid d-flex flex-column justify-content-center producto">
            <div className="container-md d-flex justify-content-center">
                <div className="d-flex">
                    <div className="me-3 d-flex">
                        <div className="detail-image-container">
                            <img src={producto.imagen1}  alt="" width={400} height={400} />
                        </div>
                        <div className="">
                        <div className="detail-image-container">
                            <img src={producto.imagen2}  alt="" width={75} height={75} />
                        </div>
                        <div className="detail-image-container">
                            <img src={producto.imagen3} alt="" width={75} height={75} />
                        </div>
                        </div>
                    </div>
                    <div className="me-3">
                        <h1 className="item-detail-nombre">{producto.nombre}</h1>
                        <p className="item-detail-description">{producto.descripcion}</p>
                        <p className="item-detail-price">{producto.valor}</p>
                        <ItemCount/>
                    </div>
                </div>
            </div>
        </div>
   )
}