import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Home from './components/views/home';
import Conocenos from './components/views/about';
import Products from './components/views/products';
import Contacts from './components/views/contacs';

function App() {
  return (
    <div className="App">
      <Router>
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
