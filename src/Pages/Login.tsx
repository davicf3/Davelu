import TelaMenu from "../components/TelaMenu"
const Login =() => {
    return (


        <header>
            <TelaMenu/>
            <div id="form">
       
       <form action="">
           <h2 className="title">Login</h2>
           <label> Email: </label>
           <div className="input">
               <input id="Email" name="Email" placeholder="digite seu email" type="text"/>
           </div>

           <label>Senha:</label>
           <div className="input">
               <input id="senha" name="Senha" placeholder="insira sua senha" type="password"/>
           </div>

           <div id="btn">
               <button typeof="LOGAR"> LOGAR</button>
           
                   <a href="/Cadastro" target="_blank"> Cadastre-se  </a>
               
           </div>
        
       </form>
       
   </div>

        </header>
     
   
    )
}

export default Login