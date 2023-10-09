import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/navegacion/navbar';
import Home from './components/paginas/home';
import Conocenos from './components/paginas/conocenos';
import Products from './components/paginas/products';
import Contacts from './components/paginas/contacs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/conocenos'element={<Conocenos />}/>
           <Route path='/products'element={<Products/>}/>
           <Route path='/contacs'element={<Contacts/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
