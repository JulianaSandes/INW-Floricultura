import Menu from "./Menu.JSX";
import Styles from "../CSS/Produtos.css";

function Produtos(){
 return(
   <div>
    <div className="rodape-cima">
    <img src="/src/imagens/Logo_flor-linda.png" alt="" />
    <h1>Dona flor-linda</h1>
    <div className="Menu"><Menu/></div>
    </div>

       <div className="container-produtos">
         <h1 className="titulo">Nossos Produtos</h1>
         <h3 className="subtitulo">Venha escolher na nossa loja as suas flores!!!</h3>
        <hr className="separador"/>
    <div className="Flex">
       <div className="card-group">
        <img className="card-img"src="https://images.pexels.com/photos/1586498/pexels-photo-1586498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h1 className="card-flor">Vaso de tulipa</h1>
        <p className="card-preco">R$150</p>
       </div>

       <div className="card-group">
        <img className="card-img"src="https://images.pexels.com/photos/12387330/pexels-photo-12387330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h1 className="card-flor">Vaso mix de flores</h1>
        <p className="card-preco">R$220</p>
       </div>

       <div className="card-group">
        <img className="card-img"src="https://images.pexels.com/photos/4702141/pexels-photo-4702141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h1 className="card-flor">Vaso de flores lavanda</h1>
        <p className="card-preco">R$120</p>
       </div>
</div>
<div className="Flex">
       <div className="card-group">
        <img className="card-img"src="https://images.pexels.com/photos/6913841/pexels-photo-6913841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h1 className="card-flor">Cesta de flores</h1>
        <p className="card-preco">R$150</p>
       </div>

       <div className="card-group">
        <img className="card-img"src="https://images.pexels.com/photos/9906440/pexels-photo-9906440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h1 className="card-flor">Flores amarelas</h1>
        <p className="card-preco">R$180</p>
       </div>

       <div className="card-group">
        <img className="card-img"src="https://images.pexels.com/photos/1427855/pexels-photo-1427855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h1 className="card-flor">Vaso de girassol</h1>
        <p className="card-preco">R$100</p>
        </div>
       </div>
    </div>
</div>
 )
}
export default Produtos
