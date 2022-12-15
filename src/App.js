import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Elements/Cart';
import Home from './Components/Elements/Home';
import Header from './Components/Layouts/Header';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
