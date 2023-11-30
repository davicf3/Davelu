import Icone from '../components/IMG/IconeCarrinho.png';
import Perfil from '../components/IMG/Icone.png';
import Logo from '../components/IMG/Nome.png';
const TelaMenu= () =>{ 
    return (
        <div>
             <div className="menu">
          <div className="lado-esquerdo-menu">
            <div className="Logo">
              <a href='/'><img src={Logo} alt="Carrinho" width="200" /></a>

              </div>
            <nav>
              <ul>
               <li><a href="/Cadastro" className="nome">Cadastro</a></li>
               <li><a href="/Login" className="nome">Login</a></li>
               <li><a href="/Catalogo" className="nome">Catalogo</a></li>
              </ul>
            </nav>
          </div>

          <div className="lado-direito-menu">
            <a className="icone"><img  src={Icone} alt="Carrinho" width="32" /></a>
            <a href='/Login' className="icone"><img  src={Perfil} alt="Ícone" width="35" /></a>
          </div>
        </div>

        <div className="line"></div>
        </div>
    )
}

export default TelaMenu