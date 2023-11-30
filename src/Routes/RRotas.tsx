import { Routes, Route, Router } from "react-router-dom";
import Principal from '../Pages/Principal'
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login'
import PoliticaPrivacidade from "../Pages/PoliticaPrivacidade";
import LogoMenu from "../components/LogoMenu";
import Catalogo from "../Pages/Catalogo";


const RRotas = () => {
    return (
        <Routes>
            <Route path='/' element={<Principal/>} />
            <Route path='/Cadastro' element={<Cadastro/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/PoliticaPrivacidade' element={<PoliticaPrivacidade/>} />
            <Route path='/Inicio' element={<Principal/>} />
            <Route path="/Catalogo" element={<Catalogo/>} />


        </Routes>
    )
}

export default RRotas