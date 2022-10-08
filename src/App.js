import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { PaginaContacto } from './components/PaginaContacto/PaginaContacto';
import {CartProvider} from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import Formulary from './components/Formulary/Formulary'
import { OrderContainer } from './components/OrderContainer/OrderContainer';
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <BrowserRouter> 
      <UserProvider>
        <CartProvider>
          <div className='MainContainer d-flex flex-column align-items-center m-0 p-0'>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
              <Route path='*' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<PaginaContacto/>}/>
              <Route path='/producto/:id' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<CartContainer/>}/>
              <Route path='/loginin' element={<Formulary/>}/>
              <Route path='/orders' element={<OrderContainer/>}/>
            </Routes> 
          </div>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
