import TelaMenu from "../components/TelaMenu"
import '../Css/Login.css'
const Login =() => {
    return (


       <main>
            <TelaMenu/>
            <div id="form">
       
       <form action="">
           <h2 className="title">Login</h2>
           <label> Email: </label>
           <div className="input">
               <input id="Email" name="Email" placeholder="exemplo@exemplo.com" type="text" required/>
           </div>

           <label>Senha:</label>
           <div className="input">
               <input id="senha" name="Senha" placeholder="Insira sua senha" type="password" required/>
           </div>

           <div id="btn">
               <button typeof="LOGAR"> LOGAR</button>
           
                 
               
           </div>
        
       </form>
       
   </div>
   </main>
    
   
    )
}

export default Login