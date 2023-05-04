import { useState } from "react";
import Styles from "../CSS/Login.css";
import Menu from "./Menu.JSX"

function Login(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
  
    //alert teste
    function sendEmail(e) {
      e.preventDefault();
  
      //campos vazios <
      if (name === "" || email === "" || senha === "") {
        alert("Preencha todos os campos solicitados!");
        return;
      }
  
      alert("Obrigada pela resposta (:");
      
    }

 return(

 <div>

<div className="rodape-cima">
    <img src="/src/imagens/Logo_flor-linda.png" alt="" />
    <h1>Dona flor-linda</h1>
    <Menu/>
    </div>
 
  <div className="container">
      <div className="borda "></div>
 
      <h3 className="title"> Faça o seu login!</h3>
      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          maxLength={80}
        />

        <input
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          maxLength={50}
        />

        <input
          className="input"
          type="password"
          placeholder="Digite a sua senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />
        <input className="button" type="submit" value="Concluir" />
      </form>
    </div>
 </div>
 )
}
export default Login
