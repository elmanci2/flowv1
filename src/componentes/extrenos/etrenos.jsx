import React from "react";
import './estreno.css'
import { motion } from "framer-motion";
import  palomitas from '../../img/palomitas.png'
import EXtrenosItem from "./extrenos_props";

export default function EXtrenos() {

    return (

        <section className="super_conted">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}

            >


                <div className="extrenos_tex_palomitas">
                    <img src={palomitas} alt="" />
                    <h3>Proximamente</h3>
                </div>


                <EXtrenosItem
                    fecha1='jul'
                    fecha2='de juli'
                    dia='3'
                    title='Vencer la Ausencia'
                    poster="  https://i.ytimg.com/vi/7IrjPsil4sA/maxresdefault.jpg "
                    sinopsis='Trata sobre pérdidas de seres queridos en la época actual en la cuarta entrega de la saga Vencer, producida por Rosy Ocampo.'
                />




                <EXtrenosItem
                    fecha1='jul'
                    fecha2='de juli'
                    dia2='15'
                    dia='15'
                    title='doctor stranger'
                    poster='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg'
                    sinopsis='Viaja a lo desconocido con el Doctor Strange, 
                quien, con la ayuda de tanto antiguos como nuevos aliados
                 místicos, recorre las complejas y peligrosas realidades alternativas'
                />








            </motion.div>
        </section>
    )
}



