import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { PaginaContacto } from './components/PaginaContacto/PaginaContacto';
import {CartProvider} from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';


function App() {
  return (
    <BrowserRouter> 
      <CartProvider>
        <div className='MainContainer d-flex flex-column align-items-center'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
            <Route path='*' element={<ItemListContainer/>}/>
            <Route path='/contacto' element={<PaginaContacto/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartContainer/>}/>
          </Routes> 
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
