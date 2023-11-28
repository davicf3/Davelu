import React from 'react';
import Menu from './components/Menu';
import Paginas from './components/Paginas';
import Rodape from './components/Rodape';
import FundoSite from './components/FundoSite';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cadastro from './Pages/Cadastro';

const App = () => {
  return (
    <>
     
      <Menu/>
      <Paginas/>
      <Rodape/>



    </>
  );
};
export {};

export default App;