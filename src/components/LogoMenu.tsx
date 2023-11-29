import Icone from '../components/IMG/IconeCarrinho.png';
import Perfil from '../components/IMG/Icone.png';
import Logo from '../components/IMG/Nome.png';

const LogoMenu = () => {
    return (
        <div>
              <div className="menu">
          <div className="lado-esquerdo-menu">
            <div className="Logo">
             <a href='/'className='logo'><img src={Logo} alt="Carrinho" width="200" /></a> 
            </div>
           
          </div>

          <div className="lado-direito-menu">
            <a className="icone"><img  src={Icone} alt="Carrinho" width="32" /></a>
            <a className="icone"><img  src={Perfil} alt="Ícone" width="35" /></a>
          </div>
        </div>

        <div className="line"></div>
        </div>
    )
}

export default LogoMenu