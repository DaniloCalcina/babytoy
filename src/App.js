import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className='MainContainer d-flex flex-column align-items-center'>
      <NavBar/>
      <ItemListContainer/>
      </div>
  );
}

export default App;
