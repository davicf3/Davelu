  import React, { FormEvent } from 'react';
  import TelaMenu from '../components/TelaMenu';
  import '../Css/Cadastro.css';
  import { useState } from 'react';


  const Cadastro = () => {
    function cadastrarUsuario (e:FormEvent) {
      e.preventDefault()
      console.log ('Teste formulario')

  }



    return (




















      
      <div>
        <TelaMenu/>

  <div id="form">
    
    <form onSubmit={cadastrarUsuario}>
      <h2 className="title">CADASTRO</h2>

      <label htmlFor="NomeCompleto">Nome Completo</label>
      <div className="input">
        <input id="NomeCompleto" name="NomeCompleto" placeholder="Escreva Seu Nome Completo" type="text" required />
      </div>

      <label htmlFor="CPF">CPF</label>
      <div className="input">
        <input id="CPF" name="CPF" placeholder="Digite Seu CPF" type="number" required />
      </div>

      <label htmlFor="Email">Email</label>
      <div className="input">
        <input id="Email" name="Email" placeholder="Digite Seu Email" type="email" required/>
      </div>

      <label htmlFor="nascimento">Data de nascimento</label>
      <div className="Data">
        <input id="nascimento" name="nascimento" placeholder="Em Que Ano Você Nasceu?" type="date" required/>
      </div>

      <label htmlFor="celular">Celular</label>
      <div className="input">
        <input id="celular" name="celular" placeholder="Digite Seu N° de Celular" type="number" required/>
      </div>

      <label htmlFor="senha">Senha</label>
      <div className="input">
        <input id="senha" name="Senha" placeholder="Crie Uma Senha" type="password" required />
      </div>

      <label htmlFor="confirmarSenha">Confirmar Senha</label>
      <div className="input">
        <input id="confirmarSenha" name="confirmarSenha" placeholder="Digite a Senha Novamente" type="password" required />
      </div>

      <div id="btn">
        <button type="submit">CADASTRAR</button>
      </div>
    </form>
  </div>
      </div>
    );
  };

  export default Cadastro;