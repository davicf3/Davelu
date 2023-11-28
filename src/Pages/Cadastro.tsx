import styles from './Cadastro.module.css'
import React from 'react';

const Cadastro = () => {
  return (

    <div id="form">
      
      <form action="">
        <h2 className="title">CADASTRO</h2>

        <label htmlFor="NomeCompleto">Nome Completo</label>
        <div className="input">
          <input id="NomeCompleto" name="NomeCompleto" placeholder="Escreva Seu Nome Completo" type="text" />
        </div>

        <label htmlFor="CPF">CPF</label>
        <div className="input">
          <input id="CPF" name="CPF" placeholder="Digite Seu CPF" type="text" />
        </div>

        <label htmlFor="Email">Email</label>
        <div className="input">
          <input id="Email" name="Email" placeholder="Digite Seu Email" type="email" />
        </div>

        <label htmlFor="nascimento">Data de nascimento</label>
        <div className="Data">
          <input id="nascimento" name="nascimento" placeholder="Em Que Ano Você Nasceu?" type="date" />
        </div>

        <label htmlFor="celular">Celular</label>
        <div className="input">
          <input id="celular" name="celular" placeholder="Digite Seu N° de Celular" type="text" />
        </div>

        <label htmlFor="senha">Senha</label>
        <div className="input">
          <input id="senha" name="Senha" placeholder="Crie Uma Senha" type="password" />
        </div>

        <label htmlFor="confirmarSenha">Confirmar Senha</label>
        <div className="input">
          <input id="confirmarSenha" name="confirmarSenha" placeholder="Digite a Senha Novamente" type="password" />
        </div>

        <div id="btn">
          <button type="submit">CADASTRAR</button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;