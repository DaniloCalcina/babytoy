import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';



function App() {
  return (
    <div className='MainContainer d-flex flex-column align-items-center'>
      <NavBar/>
      <ItemList/>
    </div>
  );
}

export default App;
