import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Buscar from "../buscar/buscar";
import Inicio from "../inicio/Inicio";
import Ajustes from "../ajustes/ajuste";
import EXtrenos from "../extrenos/etrenos";
import Erorr from "../error/error";
import Politicas from "../politicas/politicas";
import Nosotros from "../mas_sobre-nossotraso/nosostros";
import Confirmacion from "../error/pagina-de-confirmacion/confirmacion";

export default function Animacion() {

    const lacation = useLocation()

    return (
        
        <AnimatePresence exitBeforeEnter>
            <Routes location={lacation} key={lacation.pathname} >
                 <Route path='/error' element={< Erorr />} />
                <Route path='/' exact element={<Inicio />} />
                <Route path='/buscar' element={<Buscar />} />
                <Route path='/ajustes' element={<Ajustes />} />
                <Route path='/estrenos' element={<EXtrenos />} />
                <Route path='/politicas' element={<Politicas/>} />
                <Route path='/nosotros' element={<Nosotros/>} />
                <Route path='/confirmacion' element={<Confirmacion/>} />
            </Routes>
        </AnimatePresence>


    )
}

