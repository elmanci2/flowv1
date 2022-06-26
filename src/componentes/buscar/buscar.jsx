import React from "react";
import './buscar.css'
import { motion } from "framer-motion";
import NovelasBuscar from "./novelas-buscar/novelas_buscar";

export default function Buscar() {




    const search = () => {


        const d = document;
        const searchbox = d.getElementById('buscador').value.toUpperCase();
        const storeitime = d.getElementById('grid')
        const product = d.querySelectorAll('.imagen_gri_buscar')
        const pname = storeitime.getElementsByTagName('h2')

        for (var i = 0; i < pname.length; i++) {
            let match = product[i].getElementsByTagName('h2')[0];
            if (match) {
                let texvalue = match.textContent || match.innerHTML

                if (texvalue.toUpperCase().indexOf(searchbox) > -1) {
                    product[i].style.display = '';
                } else {
                    product[i].style.display = 'none';
                }
            }
        }
    }



    return (


        <section className="container">

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}

            >

                <div className="subcontainer">
                    <div className="fixed_buscar">
                        <div className="buscar_container">
                            <i className="bx bx-search"></i>
                            <input type="text"
                                id="buscador"
                                placeholder="busca tu novela aqui ...."
                                className="pepe"
                                onKeyUp={search}
                            />
                        </div>

                    </div>


                </div>


            <NovelasBuscar/>


            </motion.div>

        </section>

    )
}




