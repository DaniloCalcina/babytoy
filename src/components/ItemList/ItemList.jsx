import "./ItemList.css";
import Item from "../Item/Item";


const ItemList = ({productos}) => {

    return(
        <div className= "d-flex flex-wrap container_list m-3 p-3">
            {productos.map(producto =>(                                
                <Item key = {producto.id} producto={producto} />                            
            ))}
        </div>
    )
}

export default ItemList;