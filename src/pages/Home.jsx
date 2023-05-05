import Menu from "./Menu.JSX"

function Home(){
 return(
<div>
   <div className="container-cima">
      <div className="rodape-cima">
         <img src="/src/imagens/Logo_flor-linda.png" alt="logo" />
      <h1>Dona flor-linda</h1>
      <div className="Menu"><Menu/></div>
   </div>
         <img className = "tam-img" src="/src/imagens/flores-fundo.jpg" alt="" />
         <div className="quadrado-info">
         <img src="/src/imagens/Logo_flor-linda-rodape.png" alt="logo" />
           <h1>Seja Bem vindo a Dona flor-linda!!!</h1>
         </div>
         
   </div>
      
      
   <div className="container-sobre">
      <h1 className="title">Sobre a Dona flor-linda!</h1>
      <h3 className="subtitle">Feito pra você e quem você ama.</h3>
      <div className="topicos">
         <h2>Flores: 100% Naturais e Verdadeiras.</h2>
         <h2>Bouquet: Feitos a mão. Com cuidado e carinho.</h2>
         <h2>Feitos a mão: Bouquet de flores inovados.</h2>
         <h2>Entrega: Totalmente seguro e confiavel.</h2>
      </div>
      <img className = "tam-vaso" src="/src/imagens/vaso-flores.jpg" alt="" /> 
   </div> 
 
   <div className="container-rodape">
      <hr className="linha"/>
      <img src="/src/imagens/Logo_flor-linda-rodape.png" alt="logo-rodape" />
      <h1>Dona flor-linda</h1>
      </div>

</div>

 )
}
export default Home
