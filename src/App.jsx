import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.JSX";
import Produtos from "./pages/Produtos";
import Login from "./pages/Login";
import './CSS/index.css';


function App(){
 return(
 <div className="links">
<BrowserRouter>
    <div className="teste">
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/produtos" element={<Produtos/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>'
    </div>
 </BrowserRouter>
 </div>
 )
}
export default App

