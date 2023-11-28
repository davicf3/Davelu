import React from 'react';
import Icone from './IMG/IconeCarrinho.png';
import Perfil from './IMG/Icone.png';
import Logo from './IMG/Nome.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cadastro from '../Pages/Cadastro';

const Menu = () => {
  return (
    <Router>
      <header>
        <div className="menu">
          <div className="lado-esquerdo-menu">
            <div className="Logo">
              <img src={Logo} alt="Carrinho" width="200" />
            </div>
            <nav>
              <ul>
                <li className="nome"><Link to="/cadastro">Cadastro</Link></li>
                <li className="nome"><Link to="/redes-sociais">Redes Sociais</Link></li>
                <li className="nome"><Link to="/login">Login</Link></li>
              </ul>
            </nav>
          </div>

          <div className="lado-direito-menu">
            <a className="icone"><img  src={Icone} alt="Carrinho" width="32" /></a>
            <a className="icone"><img  src={Perfil} alt="Ícone" width="35" /></a>
          </div>
        </div>

        <div className="line"></div>

        <Routes>
          <Route  exact path="/cadastro" element={<Cadastro />} />
          {

          }
        </Routes>
      </header>
    </Router>
  );
};

export default Menu;