import React from 'react';
import Icone from '../components/IMG/IconeCarrinho.png';
import Perfil from '../components/IMG/Icone.png';
import Logo from '../components/IMG/Nome.png';
import Masculina from '../components/IMG/Novo1.jpg'
import Feminina from '../components/IMG/Novo2.jpg'
import Insta from '../components/IMG/instagram-removebg-preview.png'
import Whatsapp from '../components/IMG/whatsapp.png'


const Menu = () => {
  return (
    
      <main>
        <div className="menu">
          <div className="lado-esquerdo-menu">
            <div className="Logo">
              <img src={Logo} alt="Logo" width="200" />
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
            <a  href='/Login'className="icone"><img  src={Perfil} alt="Ícone" width="35" /></a>
          </div>
        </div>

        <div className="line"></div>

        <div className='Pags'>
            <div>
                <a href=''>
                <img className='Pags' src={Masculina} alt= "Masculino"/>

                </a>
                        <div className='Titulo1'>
            <a href=''><p>Masculino</p></a>
            </div>
            
            </div>

            <div>
                <a href=''>
                <img className='Pags' src={Feminina} alt="Feminina"/>
                </a>
            
            <div className='Titulo1'>
            <a href=''><p>Feminino</p></a>
            </div>
            

            </div>
            </div>

            <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-p'>
            <h3>Redes Sociais</h3>
            <div className='rede-social'>
              <a href="link-do-instagram" target="_blank"><img src={Insta} alt="Instagram"/></a> <br></br>
              <a href="link-do-instagram" target="_blank"><img src={Whatsapp} alt="Instagram"/></a>
            
            </div>
          </div>
          <div className='footer-p'>
            <h3>Informações de Contato</h3>
            <p>Telefone: (71985589348)</p>
            <p>Telefone: (71985589348)</p>
            <p>Telefone: (71985589348)</p>
            <p>Email: davelu@davelu.com</p>
            

            
          </div>
          <div className='footer-p'>
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="#">Termos de Serviço</a></li>
              <li><a href="/PoliticaPrivacidade">Política de Privacidade</a></li>
              <li><a href="#">Sobre Nós</a></li>
            </ul>
          </div>
        </div>
        <div className='footer-inferior'>
          <p>&copy; 2023 Davelu Online.</p>
        </div>
      </footer>

        
      </main>

      
  );
};

export default Menu;