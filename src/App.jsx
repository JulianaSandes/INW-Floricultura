import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home.jsx';
import Produtos from './pages/Produtos';

function App(){

    return(
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/home"element = {<Home/>}/>
          <Route path="/login"element = {<Login/>}/>
          <Route path="/produtos"element = {<Produtos/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
  }
  export default App
