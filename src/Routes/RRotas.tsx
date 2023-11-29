import { Routes, Route, Router } from "react-router-dom";
import Principal from '../Pages/Principal'
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login'


const RRotas = () => {
    return (
        <Routes>
            <Route path='/' element={<Principal/>} />
            <Route path='/Cadastro' element={<Cadastro/>} />
            <Route path='/Login' element={<Login/>} />


        </Routes>
    )
}

export default RRotas