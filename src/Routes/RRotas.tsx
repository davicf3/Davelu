import { Routes, Route, Router } from "react-router-dom";
import Principal from '../Pages/Principal'
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login'
import PoliticaPrivacidade from "../Pages/PoliticaPrivacidade";
import LogoMenu from "../components/LogoMenu";


const RRotas = () => {
    return (
        <Routes>
            <Route path='/' element={<Principal/>} />
            <Route path='/Cadastro' element={<Cadastro/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/PoliticaPrivacidade' element={<PoliticaPrivacidade/>} />
            <Route path='/Inicio' element={<Principal/>} />


        </Routes>
    )
}

export default RRotas