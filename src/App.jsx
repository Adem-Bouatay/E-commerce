import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import { redirect } from "react-router-dom";



function App() {
  return (
   
    <Router>
       
       
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Products/:category" element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/register"  element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </Router>
    
  );
};

export default App;
